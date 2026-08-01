import { Navigate } from "react-router-dom";
import { useConvexAuth } from "convex/react";

// Wraps a route that should only be reachable while logged in.
// While Convex Auth is still checking for an existing session, render
// nothing rather than redirecting early or flashing the protected
// content. Once the check resolves, send anyone not authenticated to
// /login; otherwise render the page.
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
