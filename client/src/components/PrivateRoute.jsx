import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Import our new hook

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Wait for the context to check local storage before deciding where to redirect
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-blue-600 font-bold">Loading...</div>;
  }

  // If no user is logged in, kick them back to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If they are logged in, let them see the protected page!
  return children;
};

export default PrivateRoute;