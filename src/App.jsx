import Login from "./pages/Login";
import Register from "./pages/Register";
import {Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App (){
    return (
        <>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route 
            path="/dashboard" 
            element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />

        </Routes>
        
        
        </>
    )
}
export default App;