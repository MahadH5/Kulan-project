import { useNavigate } from "react-router-dom";
import { useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../convex/_generated/api";
import PageHeader from "../components/PageHeader";
import HowKulanWorks from "../components/HowKulanWorks";
import "./DashboardPage.css";

function DashboardPage() {
  const user = useQuery(api.users.viewer);
  const { signOut } = useAuthActions();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  const firstName = user?.name?.split(" ")[0];

  return (
    <div className="dashboard-page">
      <PageHeader
        heading={
          user === undefined
            ? "Welcome back"
            : `Welcome back${firstName ? `, ${firstName}` : ""} \u{1F44B}`
        }
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
