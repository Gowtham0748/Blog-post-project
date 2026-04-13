import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EditBlog = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    content: "",
  });

  useEffect(() => {
    // fetch blog by id (temporary mock)
    const blog = {
      title: "AI is changing the world",
      category: "Technology",
      image: "https://via.placeholder.com/300",
      description: "Short description here",
      content: "Full blog content here",
    };

    setForm(blog);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated:", form); // later API call
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Edit Blog
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            rows="3"
            required
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            rows="6"
            required
          />

          <button
            type="submit"
            className="bg-violet-500 text-white py-2 rounded"
          >
            Update
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditBlog;