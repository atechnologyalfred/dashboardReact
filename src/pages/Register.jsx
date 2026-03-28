import React, { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal.jsx';

function Register() {
  const navigate = useNavigate()
  const modal = useRef()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = e.target;
    const fullname = payload.fullname.value;
    const email = payload.email.value;
    const password = payload.password.value;
    const confirmPassword = payload.confirmPassword.value;

    if(password !== confirmPassword) {
      modal.current.open()
      return;
    }
    const data = {name: fullname, email: email, password:password}
    await registerApi(data)
    e.target.reset();
  };
  
  const registerApi =  async (user) =>{
    try {
      const response = await fetch("https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",{
        method: 'POST',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(user)
      });
      const data = await response.json()
      if(!response.ok){
        alert(data.message)
        return;
      }

        alert("User registered successfully");
        navigate("/login")

    }catch(err){
      console.error(err);
    }
  }

  return (
    <>
    <Modal ref={modal} modalBtn="x" dialogStyle="
    backdrop:bg-stone-900/60 inset-80 px-4 py-6">
      <span className="text-center font-light ml-10 -mt-10 rounded-full bg-stone-300 p-4">OOPS !</span>
      <p className="text-red-500 mt-4 text-red-700 uppercase">Password do not match</p>
    </Modal>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Register;
