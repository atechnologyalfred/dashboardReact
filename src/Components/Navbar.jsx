import Modal from "./Modal.jsx";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
    const modal = useRef()
  const [open, setOpen] = useState(false);
  const handleShowModal = ()=> {
    setIsOpen(true)
    modal.current.open()
  }
  return (
    <>
    {isOpen && (
       <Modal ref={modal}
     
     modalBtn="Close" dialogStyle="
             backdrop:bg-stone-900/60 pt-8 px-8 w-[60%] h-[70%] fixed inset-0
        transform my-auto mx-auto bg-blue-100">
        <h1 className="text-center font-bold text-blue-900 uppercase md:text-2xl mb-4">Welcome to studentHub.</h1>
        <p className="text-center font-semibold mb-4">Fill the form below to have access to latest news from studentHub</p>
        <form >
          <label htmlFor="fulname">Fullname</label>
          <input type="text" name="fullname" required className="border border-3 border-cyan-700 focus:outline-cyan-800 rounded mb-6 mt-2 w-[100%] md:w-100 p-2 block"/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"  required className="border border-3 border-cyan-700 focus:outline-cyan-800 rounded mb-6 mt-2 w-[100%] md:w-100 p-2 block"/>
          <button className="border cursor-pointer hover:bg-blue-500 px-8 py-4 rounded-lg bg-blue-900 text-white ">Submit</button>
        </form>
      </Modal>
    )}
    
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">S</div>
          <Link to="/"><h1 className="font-bold text-lg">StudentHub</h1></Link>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link to="/" className=" hover:underline decoration-blue-700 decoration-xl underline-offset-4">Home</Link>
          <li className="cursor-pointer hover:underline decoration-blue-700 decoration-xl underline-offset-4">About</li>
          <li className="cursor-pointer hover:underline decoration-blue-700 decoration-xl underline-offset-4"><a href="#how-it-work"></a>Features</li>
          <li className="cursor-pointer hover:underline decoration-blue-700 decoration-xl underline-offset-4" onClick={handleShowModal}>Contact</li>
        </ul>

        <div className="hidden md:flex gap-4">
         <Link to ="/login"> <button>Login</button></Link>
         <Link to ="/register"><button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Register</button></Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 pb-4"
          >
            <ul className="flex flex-col gap-4">
              <li><a id ="home">Home</a></li>
              <li>About</li>
              <li>Features</li>
              <li onClick={handleShowModal}>Contact</li>
            <Link to="/login" ><button className="text-left">Login</button></Link>
            <Link to="/register"><button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Register</button></Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
export default Navbar;