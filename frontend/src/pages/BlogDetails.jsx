import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import blogs from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  return (
    <div>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 mt-10">

        {/* Image */}
        <img
          src={blog.image}
          alt="blog"
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Category */}
        <p className="text-violet-600 text-sm mt-4">
          {blog.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-2">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          {blog.description}
        </p>

        {/* Content */}
        <div className="mt-6 text-gray-700 leading-relaxed">
          {blog.content}
        </div>

      </div>

    </div>
  );
};

export default BlogDetails;