import React, { useState } from "react";
import Navbar from "../components/Navbar";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    content: "",
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

      <div className="max-w-2xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Create Blog
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            rows="3"
            required
          />

          <textarea
            name="content"
            placeholder="Full Content"
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
            Publish
          </button>

        </form>
      </div>

    </div>
  );
};

export default CreateBlog;