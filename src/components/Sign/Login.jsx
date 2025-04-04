import React from "react";
import image from "./doctor_img-removed.png";

function Login({ isLoginOpen, setIsLoginOpen }) {
  if (!isLoginOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-5 flex justify-center items-center ">
      <div
        className="flex w-4xl h-140 rounded-xl shadow-2xl bg-white "
        // onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-3xl hover:text-4xl cursor-pointer font-bold text-gray-700"
          onClick={() => setIsLoginOpen(false)}
        >
          &times;
        </button>
        {/* leftSide */}
        <div className="relative py-25 bg-blue-800 text-white w-xl rounded-l-xl flex flex-col items-center ">
          <h1 className=" font-extrabold text-3xl text-center">
            Blue Hospital
          </h1>
          <img src={image} alt="Doctor" className="absolute bottom-0" />
        </div>

        {/* rightSide */}
        <div className="w-full py-15 px-15 ">
          <h3 className="text-2xl font-semibold text-center">
            Welcome on Blue Hospital
          </h3>
          <p className="text-gray-500 text-center">Please enter your details</p>
          <form>
            <div className="flex flex-col items-center ">
              {/* First Name & Last Name */}
              <div className="pt-7 gap-3 flex flex-col w-70">
                <label htmlFor="firstName" className="">
                  Email / Phone no.
                </label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="Your Email / Phone no."
                  id="firstName"
                  className="text-center border px-4 py-2 rounded-xl "
                  pattern="/^[0-9]{10}$/"
                  required
                />
              </div>

              {/* Password & Confirm Password */}
              <div className=" gap-3 mt-3 w-70">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  className="text-center border px-4 py-2 rounded-xl w-full"
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="pt-3 pb-5 px-22">
              <input
                type="checkbox"
                name="termsCondition"
                id="termsAndCondition"
                className="mr-2"
                required
              />
              <label htmlFor="termsAndCondition">Remember me</label>
            </div>
            {/* Login Button */}
            <div className="text-center text-md text-white mb-10">
              <button
                className="border px-15 py-2 rounded-xl bg-blue-800 hover:bg-blue-900 "
                onClick={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    setIsLoginOpen(false);
                  }, 1000);
                }}
              >
                Login
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <p className="text-center">
            Don’t have an account{"  "}
            <a href="#" className="text-blue-800">
              ? Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
