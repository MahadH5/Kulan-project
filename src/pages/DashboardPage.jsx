import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, isLocalToken } from "../store/useAuthStore";
import { fetchCurrentUser } from "../api/auth";
import PageHeader from "../components/PageHeader";
import HowKulanWorks from "../components/HowKulanWorks";
import "./DashboardPage.css";

function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.token);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  // Confirm the token with the server and refresh the saved user.
  // An expired token comes back 401, which logs the user out.
  // Demo signup tokens aren't known to the server, so skip them.
  useEffect(() => {
    if (!token || isLocalToken(token)) return;

    const controller = new AbortController();
    fetchCurrentUser({ signal: controller.signal })
      .then((me) => {
        if (me) useAuthStore.getState().setUser(me);
      })
      .catch(() => {
        // Aborted or offline: keep showing the saved user.
      });

    return () => controller.abort();
  }, [token]);

  function handleSignOut() {
    logout();
    // Send them to login rather than home: clearing the token would
    // otherwise make ProtectedRoute bounce them there anyway.
    navigate("/login", { replace: true });
  }

  const firstName = user?.firstName || user?.username;

  return (
    <div className="dashboard-page">
      <PageHeader
        heading={`Welcome back${firstName ? `, ${firstName}` : ""} \u{1F44B}`}
        subtext="Here's what's happening on Kulan."
      />

      <section className="dashboard-page__events container">
        <h2 className="dashboard-page__events-heading">
          Your upcoming events
        </h2>
        <p className="dashboard-page__events-empty">
          Nothing here yet — events aren't connected to your account yet.
          Once they are, anything you've RSVP'd to will show up on this page.
        </p>
      </section>

      <HowKulanWorks />

      <div className="container dashboard-page__signout-row">
        <button
          type="button"
          className="dashboard-page__signout"
          onClick={handleSignOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
