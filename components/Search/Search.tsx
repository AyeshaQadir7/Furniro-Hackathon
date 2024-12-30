"use client";
import React, { useState } from "react";

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      alert(`Searching for: ${searchTerm}`); // Replace with your search logic
    } else {
      alert("Please enter a product name.");
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-[300px] bg-cover bg-center bg-no-repeat py-8 bg-opacity-40"
      style={{
        backgroundImage: "url('/assets/heroimg.png')",
      }}
    >
      <div className="w-full max-w-xl px-4 bg-Creame bg-opacity-70 rounded-lg shadow-sm py-6 mx-6">
        <h2 className="text-2xl font-semibold text-DarkBrown text-center mb-4">
          Search for Products
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
          />
          <button
            onClick={handleSearch}
            className="px-4 py-3 bg-Gold text-white font-medium rounded-md hover:bg-yellow-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductSearch;
