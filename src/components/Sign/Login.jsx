import React, { useState } from "react";
import image from "./doctor_img-removed.png";
import { auth, provider, signInWithPopup } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ isLoginOpen, setIsLoginOpen, onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isLoginOpen) return null;

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoginOpen(false);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
      setIsLoginOpen(false);
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex w-11/12 max-w-3xl rounded-xl shadow-2xl bg-white overflow-hidden">
      <button
        className="absolute top-3 right-3 text-3xl cursor-pointer font-bold text-gray-700 hover:text-black z-10"
        onClick={() => setIsLoginOpen(false)}
      >
        ×
      </button>

      <div className="relative py-16 bg-blue-800 text-white w-64 flex-shrink-0 rounded-l-xl flex flex-col items-center">
        <h1 className="font-extrabold text-2xl text-center px-4">Blue Hospital</h1>
        <img src={image} alt="Doctor" className="absolute bottom-0 w-full object-contain" />
      </div>

      <div className="w-full py-10 px-10">
        <h3 className="text-2xl font-semibold text-center">Welcome Back</h3>
        <p className="text-gray-500 text-center mb-6">Please enter your details</p>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 rounded-lg px-4 py-2 mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
          <div>
            <label htmlFor="loginEmail" className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="loginEmail"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="loginPassword" className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              id="loginPassword"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-4 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" id="remember" className="accent-blue-800" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 border px-6 py-2 rounded-xl bg-blue-800 hover:bg-blue-900 text-white disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 flex items-center justify-center bg-white border border-gray-300 text-black rounded-xl py-2 hover:shadow-md transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <button
            className="text-blue-800 font-medium hover:underline"
            onClick={() => { setIsLoginOpen(false); onSwitchToSignUp?.(); }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
