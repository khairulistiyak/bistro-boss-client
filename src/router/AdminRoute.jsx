import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  // Use the custom hook to get user and loading status
  const { user, loading } = useAuth();

  // Use the custom hook to get admin status and loading status
  const [isAdmin, isAdminLoading] = useAdmin();

  // Get the current location
  const location = useLocation();

  // Render a Spinner if loading or isAdminLoading is true
  if (loading || isAdminLoading) {
    return <Spinner></Spinner>;
  }

  // If user is authenticated and is an admin, render the child components
  if (user && isAdmin) {
    return children;
  } else {
    // If user is not authenticated or is not an admin, redirect to the home page
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
