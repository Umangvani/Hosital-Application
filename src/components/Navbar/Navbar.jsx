import React, { useState, useEffect } from "react";
import SignUp from "../Sign/SignUp";
import Login from "../Sign/Login";
// import { Link } from "react-router";
import { Link, useNavigate } from 'react-router-dom'; 

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


  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the navigation when an option is selected
  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);  // Navigate to the selected route
    }

  };

  return (
    <div className="pt-7">
      <div className="px-25 ">
        <nav className=" flex justify-between items-center font-normal z-10  ">
          <Link to="/">
            <h1 className="text-3xl text-blue-900 font-extrabold cursor-pointer">
              Blue <span className="text-2xl font-bold">Hospital</span>
            </h1>
          </Link>

          <div>
            <ul className="flex justify-between gap-14 items-center">
              <li className="text-blue-900 cursor-pointer">
                <Link to="/"> Home</Link>
              </li>
              {/* <li>
                <label
                  htmlFor="list"
                  className="hover:text-blue-800 cursor-pointer"
                >
                  Services
                </label>
                <select id="list" className="outline-none">
                  <option value="">patient</option>
                  <option value="">doctor</option>
                  <option value="">ambulance </option>
                </select>
              </li> */}

<li className="flex items-center space-x-3 p-3">
            {/* <label htmlFor="services" className="hover:text-blue-800 cursor-pointer">
              Services
            </label> */}
            <select
              id="services"
              className="outline-none pl-2" // Add some padding to align the text
              onChange={handleSelectChange} // Handle change to navigate to selected option
            >
              <option value="/">Select a service</option>
              <option value="/patient">Patient</option>
              <option value="/doctor">Doctor</option>
              <option value="/ambulance">Ambulance</option>
              <option value="/appointment">Appointment</option>
              <option value="/consultation">Consultation</option>
              <option value="/emergency">Emergency</option>
            </select>
          </li>

          
              <li className="hover:text-blue-800 cursor-pointer">Doctors</li>
              <li className="hover:text-blue-800 cursor-pointer">
                <Link to="/AboutUs">About us</Link>{" "}
              </li>
              <li className="hover:text-blue-800 cursor-pointer">
                <Link to="/ContactUs">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-10 text-white">
            <button
              className="border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900 cursor-pointer"
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
