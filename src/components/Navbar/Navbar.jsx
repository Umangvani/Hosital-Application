import React, { useState, useEffect } from "react";
import SignUp from "../Sign/SignUp";
import Login from "../Sign/Login";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignUp = () => {
    setIsModalOpen(true);
    setIsLoginOpen(false);
  };

  const handleLogin = () => {
    setIsLoginOpen(true);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen || isLoginOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen, isLoginOpen]);

  return (
    <div className="px-6 md:px-25 py-4 shadow-sm sticky top-0 bg-white z-20">
      <nav className="flex justify-between items-center font-normal">
        <h1 className="text-3xl text-blue-900 font-extrabold">
          Blue <span className="text-2xl font-bold">Hospital</span>
        </h1>

        <ul className="hidden md:flex justify-between gap-10 items-center">
          <li className="text-blue-900 font-medium cursor-pointer">Home</li>
          <li className="hover:text-blue-800 cursor-pointer">Services</li>
          <li className="hover:text-blue-800 cursor-pointer">Doctors</li>
          <li className="hover:text-blue-800 cursor-pointer">About Us</li>
          <li className="hover:text-blue-800 cursor-pointer">Contact Us</li>
        </ul>

        <div className="flex gap-4 text-white">
          <button
            className="border-2 border-blue-800 rounded-xl p-2 px-5 bg-blue-800 hover:bg-blue-900 transition-colors"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="border-2 border-blue-800 rounded-xl p-2 px-5 text-blue-800 hover:bg-blue-800 hover:text-white transition-colors"
          >
            Sign up
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-10">
            <SignUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsLoginOpen(false)}
          />
          <div className="relative z-10">
            <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
