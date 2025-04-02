import React, { useState, useEffect } from "react";
import SignUp from "../Sign/SignUp";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUp = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className=" px-20">
        <nav className=" flex justify-between items-center font-normal z-10  ">
          <h1 className="text-3xl text-blue-900 font-extrabold">Blue <span className="text-2xl font-bold">Hospital</span></h1>

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
            <button className="border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900">
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900"
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
          {/* <button 
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
              onClick={closeModal}>
              &times;
            </button> */}

          <SignUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
