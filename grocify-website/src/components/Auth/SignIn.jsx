import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/"); // redirect to home
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
          Sign in to continue with <span className="text-orange-500 font-bold">GrOcify</span>
        </p>

        <form onSubmit={handleSignIn} className="mt-8">
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

          <div className="mb-4">
            <label className="block text-zinc-700 font-medium mb-2">Password</label>
            <div className="flex items-center border border-zinc-300 rounded-lg px-2 focus-within:ring-2 focus-within:ring-orange-500">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-2 py-2 focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-orange-500 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-zinc-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
