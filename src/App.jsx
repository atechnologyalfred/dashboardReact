import Home from './pages/StudentLandingPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute> } />
          <Route path="/product/:id" element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute> } />
    </Routes>
  
    </>
  )
}

export default App;