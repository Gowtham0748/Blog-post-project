import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later API call
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center mt-16 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Signup
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded mb-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded mb-4"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-violet-500 text-white py-2 rounded"
          >
            Signup
          </button>
        </form>
      </div>

    </div>
  );
};

export default Signup;