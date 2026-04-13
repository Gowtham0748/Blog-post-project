import React from 'react'

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Search blogs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />

      <button
        onClick={onSearch}
        className="bg-violet-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar