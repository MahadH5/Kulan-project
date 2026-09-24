import { create } from "zustand";

const TOKEN_KEY = "kulan.token";
const USER_KEY = "kulan.user";

// Read anything left over from a previous session so a refresh keeps
// the user logged in.
function readStored(key, parse = false) {
  try {
    const raw = localStorage.getItem(key);
    return parse && raw ? JSON.parse(raw) : raw;
  } catch {
    return null;
  }
}

// Write both keys together so the token and user never drift apart.
function persistSession(token, user) {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user ?? null));
    } else {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  } catch {
    // Ignore storage failures (private mode, quota, etc.).
  }
}

// Signup tokens are minted in the browser (see signup below), so the
// server doesn't recognise them and they can't be sent to protected
// endpoints.
const LOCAL_TOKEN_PREFIX = "local-";

export function isLocalToken(token) {
  return typeof token === "string" && token.startsWith(LOCAL_TOKEN_PREFIX);
}

export const useAuthStore = create((set, get) => ({
  token: readStored(TOKEN_KEY),
  user: readStored(USER_KEY, true),
  status: "idle",
  error: null,

  // The store owns every user-facing auth message, including the
  // client-side validation the forms run before calling an action.
  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),

  // Replace the saved user with a fresh copy from the server, keeping
  // the current token.
  setUser: (user) => {
    persistSession(get().token, user);
    set({ user });
  },

  login: async ({ username, password }) => {
    set({ status: "loading", error: null });
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid username or password.");
      }

      const data = await res.json();
      const token = data.accessToken ?? data.token;

      persistSession(token, data);
      set({ token, user: data, status: "success", error: null });
      return true;
    } catch (err) {
      persistSession(null);
      set({
        token: null,
        user: null,
        status: "error",
        error: err.message || "Login failed.",
      });
      return false;
    }
  },

  signup: async ({ name, email, password }) => {
    set({ status: "loading", error: null });
    try {
      const [firstName, ...rest] = name.trim().split(/\s+/);
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName: rest.join(" "),
          email,
          username: email.split("@")[0],
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("We couldn't create your account. Please try again.");
      }

      const data = await res.json();
      // DummyJSON's mock signup doesn't issue a token, so mint a local
      // session token for the demo. A real backend would return one here.
      const token =
        data.accessToken ?? `${LOCAL_TOKEN_PREFIX}${data.id}-${Date.now()}`;

      persistSession(token, data);
      set({ token, user: data, status: "success", error: null });
      return true;
    } catch (err) {
      persistSession(null);
      set({
        token: null,
        user: null,
        status: "error",
        error: err.message || "Signup failed.",
      });
      return false;
    }
  },

  logout: () => {
    persistSession(null);
    set({ token: null, user: null, status: "idle", error: null });
  },
}));
