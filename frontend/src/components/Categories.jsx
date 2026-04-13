import React from 'react'

const Categories = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex gap-3 mt-6 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-1 rounded-full text-sm ${
            selected === cat
              ? "bg-violet-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default Categories