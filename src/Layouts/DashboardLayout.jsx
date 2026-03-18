import Navbar from "../Components/Navbar"
import { Link, useNavigate } from "react-router-dom"


function DashboardLayout ({children}) {
    const navigate = useNavigate()
    const handleLogout = ()=> {
    localStorage.removeItem('isLoggedIn', true);
    navigate('/login');
}
    return (
        <div className="dashboard-layout">
        <Navbar image="Dashbaord">
        <Link  to ="/login"><button className="logout" onClick={handleLogout}>Logout</button></Link>
        </Navbar>
        {children}
        </div>
    )
}
export default DashboardLayout;
