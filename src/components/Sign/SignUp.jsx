import React, { useState } from "react";
import image from "./doctor_img-removed.png";
import { auth, provider, signInWithPopup } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUp({ isModalOpen, setIsModalOpen, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(result.user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });
      setIsModalOpen(false);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login.");
      } else {
        setError("Sign up failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
      setIsModalOpen(false);
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex w-11/12 max-w-3xl rounded-xl shadow-2xl bg-white overflow-hidden">
      <button
        className="absolute top-3 right-3 text-3xl cursor-pointer font-bold text-gray-700 hover:text-black z-10"
        onClick={() => setIsModalOpen(false)}
      >
        ×
      </button>

      <div className="relative py-16 bg-blue-800 text-white w-64 flex-shrink-0 rounded-l-xl flex flex-col items-center">
        <h1 className="font-extrabold text-2xl text-center px-4">Blue Hospital</h1>
        <img src={image} alt="Doctor" className="absolute bottom-0 w-full object-contain" />
      </div>

      <div className="w-full py-8 px-8 overflow-y-auto max-h-[90vh]">
        <h3 className="text-2xl font-semibold mb-1">Create an Account</h3>
        <p className="text-gray-500 text-sm mb-4">Fill in your details to get started</p>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 rounded-lg px-4 py-2 mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-sm font-medium">First Name</label>
              <input type="text" name="firstName" placeholder="First Name"
                value={formData.firstName} onChange={handleChange}
                className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name"
                value={formData.lastName} onChange={handleChange}
                className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input type="email" name="email" placeholder="your@email.com"
              value={formData.email} onChange={handleChange}
              className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input type="password" name="password" placeholder="Min. 6 characters"
                value={formData.password} onChange={handleChange}
                className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Repeat password"
                value={formData.confirmPassword} onChange={handleChange}
                className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="accent-blue-800" required />
            <label htmlFor="terms" className="text-sm">
              I accept the <a href="#" className="text-blue-800 hover:underline">terms and conditions</a>
            </label>
          </div>
          <button type="submit" disabled={loading}
            className="border px-6 py-2 rounded-xl bg-blue-800 hover:bg-blue-900 text-white disabled:opacity-60">
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <button onClick={handleGoogleSignIn}
          className="w-full mt-3 flex items-center justify-center bg-white border border-gray-300 text-black rounded-xl py-2 hover:shadow-md transition">
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <button className="text-blue-800 font-medium hover:underline"
            onClick={() => { setIsModalOpen(false); onSwitchToLogin?.(); }}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
