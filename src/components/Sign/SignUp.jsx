import React from "react";
import image from "./doctor_img-removed.png";
import { auth, provider, signInWithPopup } from "./firebase.js";

function SignUp({ isModalOpen, setIsModalOpen }) {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in as:", user.displayName, user.email);
      // Save user to your DB or redirect from here
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // const handleSignUp = (e) => {
  //     e.
  // }

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-5 flex justify-center items-center ">
      <div
        className="flex w-4xl h-140 rounded-xl shadow-2xl bg-white "
        // onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-3xl hover:text-4xl cursor-pointer font-bold text-gray-700"
          onClick={() => setIsModalOpen(false)}
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
        <div className="w-full py-15 px-15">
          <h3 className="text-2xl font-semibold">Sign up for an Account</h3>
          <form>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 pt-7 gap-3">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="Your First Name"
                  id="firstName"
                  className="text-center border px-4 py-2 rounded-xl w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Your Last Name"
                  id="LastName"
                  className="text-center border px-4 py-2 rounded-xl w-full"
                  required
                />
              </div>
            </div>
            {/* Email */}
            <div className="col-span-2 mt-3">
              <label htmlFor="emailAdd">Email Address</label>
              <input
                type="email"
                id="emailAdd"
                name="emailAdd"
                placeholder="Enter Your Email Address"
                className="text-center border px-4 py-2 rounded-xl w-full"
                required
              />
            </div>
            {/* Password & Confirm Password */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
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
              <div>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="ConfirmPassword"
                  name="Confirmpassword"
                  placeholder="Confirm Your Password"
                  className="text-center border px-4 py-2 rounded-xl w-full"
                  required
                />
              </div>
            </div>
            {/* Terms and Conditions */}
            <div className="pt-3 pb-5">
              <input
                type="checkbox"
                name="termsCondition"
                id="termsAndCondition"
                className="mr-2"
                required
              />
              <label htmlFor="termsAndCondition">
                I accept all{" "}
                <a href="#" className="text-blue-800">
                  terms and conditions
                </a>
              </label>
            </div>
            {/* Sign Up Button */}
            <div className="text-center text-md text-white mb-3">
              <button
                className="border px-15 py-2 rounded-xl bg-blue-800 hover:bg-blue-900 "
                onClick={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    setIsModalOpen(false);
                  }, 1000);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <p className="text-center">
            Already have an account{" "}
            <a href="#" className="text-blue-800">
              ? Login
            </a>
          </p>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-4 flex items-center justify-center bg-white border border-gray-300 text-black rounded py-2 hover:shadow-md transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
