import { Navigate } from "react-router-dom";
function ProtectedRoute({children}) {
    
    const token = JSON.parse(localStorage.getItem('token'));
        if(!token){
            return <Navigate to="/login" replace />
        } 
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute