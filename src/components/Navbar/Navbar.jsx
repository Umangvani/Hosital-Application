import React, { useState, useEffect } from "react";
import SignUp from "../Sign/SignUp";
import Login from "../Sign/Login";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignUp = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoginOpen(true);
  };

  useEffect(() => {
    if (isModalOpen || isLoginOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
    };
  }, [isModalOpen, isLoginOpen]);

  return (
    <div className="">
      <div className="px-25 ">
        <nav className=" flex justify-between items-center font-normal z-10  ">
          <h1 className="text-3xl text-blue-900 font-extrabold">
            Blue <span className="text-2xl font-bold">Hospital</span>
          </h1>

          <div>
            <ul className="flex justify-between gap-14 items-center">
              <li className="text-blue-900">Home</li>
              <li>
                <label htmlFor="list" className="hover:text-blue-800">
                  Services
                </label>
                <select id="list" className="outline-none">
                  <option value=""></option>
                </select>
              </li>
              <li className="hover:text-blue-800">Doctors</li>
              <li className="hover:text-blue-800">About Us</li>
              <li className="hover:text-blue-800">Contact us</li>
            </ul>
          </div>

          <div className="flex gap-10 text-white">
            <button
              className="border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900 "
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900 "
            >
              Sign up
            </button>
          </div>
        </nav>
        
      </div>

      {isModalOpen && (
        <div
          className="fixed z-30 bg-white p-5 rounded-lg shadow-lg"
          // onClick={closeModal}
        >
          <SignUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed z-30 ">
          <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
