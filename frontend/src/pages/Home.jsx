import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";
import Loader from "../components/Loader";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(blogs);
            setLoading(false);
        }, 1000);
        }, []);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  const filteredBlogs = data.filter((blog) => {
  return (
    (selectedCategory === "All" ||
      blog.category === selectedCategory) &&
    blog.title.toLowerCase().includes(search.toLowerCase())
  );
});

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center mt-10 px-4">

        <h1 className="text-3xl font-semibold">
          Your own blogging platform
        </h1>

        <SearchBar
          value={search}
          onChange={setSearch}
          onSearch={() => {}}
        />

        <Categories
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Blog List */}
       {loading ? (
        <Loader />
        ) : (
        <div className="flex gap-6 flex-wrap justify-center mt-10">
            {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
            ))}
        </div>
        )}

      </div>

    </div>
  );
};

export default Home;