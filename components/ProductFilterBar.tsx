"use client";

import { Product } from "@/types/Product";
import React, { useEffect, useState } from "react";

interface FilterBarProps {
  originalProducts: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const ProductFilterBar: React.FC<FilterBarProps> = ({
  originalProducts,
  onFilter,
}) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  useEffect(() => {
    let filtered = [...originalProducts];

    if (search) {
      filtered = filtered.filter((p) =>
        p.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedColor !== "All") {
      filtered = filtered.filter((p) => p.color === selectedColor);
    }

    onFilter(filtered);
  }, [search, selectedCategory, selectedColor, originalProducts]);

  const getUnique = (key: "category" | "color") => {
    const values = originalProducts.map((p) => p[key]);
    return ["All", ...Array.from(new Set(values))];
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full sm:w-auto border border-gray-300 rounded-md px-3 py-2 text-sm"
      >
        {getUnique("category").map((cat) => (
          <option key={cat} value={cat}>
            {cat === "All" ? "All Categories" : cat}
          </option>
        ))}
      </select>

      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        className="w-full sm:w-auto border border-gray-300 rounded-md px-3 py-2 text-sm"
      >
        {getUnique("color").map((color) => (
          <option key={color} value={color}>
            {color === "All" ? "All Colors" : color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilterBar;
