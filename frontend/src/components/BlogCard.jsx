import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, category, title, description }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

        <img
          src={image}
          alt="blog"
          className="w-full h-40 object-cover"
        />

        <div className="p-4">
          <span className="text-xs text-violet-600 font-semibold">
            {category}
          </span>

          <h2 className="text-lg font-bold mt-1">
            {title}
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default BlogCard;