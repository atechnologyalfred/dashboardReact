import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
