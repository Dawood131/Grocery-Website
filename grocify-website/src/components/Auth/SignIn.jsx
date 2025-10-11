import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      // Login success
      localStorage.setItem("isAuthenticated", "true");
      navigate("/"); // redirect to website home
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-zinc-800">
          Welcome Back
        </h2>
        <p className="text-center text-zinc-600 mt-2">
          Sign in to continue with{" "}
          <span className="text-orange-500 font-bold">Gr<span className="text-zinc-800">O</span>cify</span>
        </p>

        <form onSubmit={handleSignIn} className="mt-8">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-zinc-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
<div className="mb-4">
  <label className="block text-zinc-700 font-medium mb-2">Password</label>
  <div className="flex items-center border border-zinc-300 rounded-lg focus-within:ring-2 focus-within:ring-orange-500">
    <input
      type={showPassword ? "text" : "password"}
      className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="px-3 text-sm text-orange-500 font-medium hover:text-orange-600"
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
</div>


          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-zinc-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-500 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
