import React, { useState, useEffect } from "react";
import { FiMenu, FiHome, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getValues = JSON.parse(localStorage.getItem("loginValues")) || [];
  console.log(getValues);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    if (getToken) {
      localStorage.removeItem("token");
      localStorage.removeItem("loginValues");
      navigate("/login");
    }
  };

  //fetch fake api

  const fakeApi = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (!data.ok) {
        console.log("bad request")
      }
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fakeApi();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } flex flex-col`}
      >
        {/* Toggle Button */}
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && <span className="font-bold text-lg">Dashboard</span>}
          <button
            onClick={toggleSidebar}
            className="p-1 cursor-pointer rounded hover:bg-gray-200"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* User Info */}
        {sidebarOpen && (
          <div className="flex flex-col items-center mt-4 mb-6">
            <img
              src={img1}
              alt="User Avatar"
              className="w-16 h-16 rounded-full mb-2 object-cover"
            />
            <span className="font-semibold text-gray-700">
              {getValues.user.email || "Email@gmail.com"}
            </span>
          </div>
        )}

        {/* Menu */}
        <nav className="flex flex-col gap-2 px-2">
          <p className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 cursor-pointer">
            <FiHome size={20} />
            {sidebarOpen && (
              <Link to="/">
                <span>Home</span>
              </Link>
            )}
          </p>

          <p
            to="/login"
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 cursor-pointer"
          >
            <FiLogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </p>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">
          Welcome back, {getValues?.user?.name || "John"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain"
              />

              <h2 className="font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-500 text-sm">{product.category}</p>

              <p className="text-lg font-bold mt-2">${product.price}</p>

              <Link
                to={`/product/${product.id}`}
                className="block mt-3 text-center bg-blue-600 text-white py-2 rounded-lg"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
