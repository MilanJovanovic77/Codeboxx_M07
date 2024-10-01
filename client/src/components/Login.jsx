import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rocketLogo from "../assets/images/rocketElevators/rocketLogo.png";  // Import the logo

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);  // Control for showing the modal
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/agents/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });     

      const data = await response.json();

      if (response.status === 404) {
        setError("Access Denied");
      } else if (response.status === 401) {
        setError("Wrong password, please try again.");
      } else if (!response.ok) {
        setError(data.error);
      } else {
        // If login is successful, redirect to /agents
        navigate("/agents");
      }

      setShowModal(true);  // Show the modal with the error message
    } catch (err) {
      console.error("Error logging in", err);
      setError("Server error");
      setShowModal(true);  // Show the modal for the server error
    }
  };

  return (
    <>
      {/* Display the Rocket Elevators logo at the top */}
      <div className="flex justify-center my-4">
        <img alt="Rocket Elevators logo" className="h-20" src={rocketLogo} />
      </div>

      {/* Center the login form */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
          <h3 className="text-lg font-semibold text-center">Login</h3>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-2 border w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2 p-2 border w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Modal for showing error */}
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      )}
    </>
  );
}
