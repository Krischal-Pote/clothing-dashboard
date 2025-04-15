"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Sale = {
  product: string;
  category: string;
  unitsSold: number;
  revenue: number;
};

const getCategories = (sales: Sale[]) => [
  ...new Set(sales.map((s) => s.category)),
];

export default function SalesChart({ sales }: { sales: Sale[] }) {
  const [category, setCategory] = useState("Men");
  const categories = getCategories(sales);

  const filtered = sales.filter((s) => s.category === category);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Sales by Category</h2>
        <select
          className="border p-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filtered}>
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="unitsSold" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
