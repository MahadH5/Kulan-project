import { authFetch } from "./authFetch";

export const ME_URL = "https://dummyjson.com/auth/me";

// Returns the logged-in user from the server, or null if the request
// failed. A 401 has already logged the user out inside authFetch.
export async function fetchCurrentUser({ signal } = {}) {
  const res = await authFetch(ME_URL, { signal });
  if (!res.ok) return null;
  return res.json();
}
