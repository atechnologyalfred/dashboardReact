import React from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

        const fetchProduct = async () => {  
    console.log(id)
    try {     
         const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      console.log(product);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);


const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginValues");
    navigate("/login");
  };

 return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Top Actions */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ← Back
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Home
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
              {product.category}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-2xl font-bold text-green-600">
              ${product.price}
            </p>

            <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-500 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails

