import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow">

        <h1 className="text-xl font-bold">QuickBlog</h1>
        <button className="bg-violet-500 text-white px-4 py-1 rounded">
          Login
        </button>
    </div>
  )
}

export default Navbar