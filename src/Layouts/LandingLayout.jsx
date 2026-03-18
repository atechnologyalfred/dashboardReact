import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
function LandingLayout({ children }) {
  return (
    <div className="landing-layout">
      <Navbar image="atech">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </Navbar>
      <div>
      {children}
      </div>
    </div>
  );
}

export default LandingLayout;
