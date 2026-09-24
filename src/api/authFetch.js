import { useAuthStore } from "../store/useAuthStore";

// fetch() for protected endpoints: attaches the stored token as a
// Bearer header, and logs the user out if the server rejects it
// (expired or invalid token). ProtectedRoute then sends them to /login.
export async function authFetch(url, options = {}) {
  const { token, logout } = useAuthStore.getState();

  const headers = new Headers(options.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    logout();
  }

  return res;
}
