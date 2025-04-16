"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
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

const COLORS = ["#FFCCCC", "#993333", "#333333", "#999"];

export default function SalesChart({ sales }: { sales: Sale[] }) {
  const [category, setCategory] = useState("Men");
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");

  const categories = getCategories(sales);
  const filtered = sales.filter((s) => s.category === category);

  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow p-6 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-xl font-semibold text-[#333333]">
          Sales by Category
        </h2>
        <div className="flex gap-2 flex-wrap">
          <select
            className="border border-[#FFCCCC] text-[#333333] p-2 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            className="border border-[#FFCCCC] text-[#333333] p-2 rounded-md"
            value={chartType}
            onChange={(e) => setChartType(e.target.value as "bar" | "pie")}
          >
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" ? (
          <BarChart data={filtered}>
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="unitsSold" fill="#993333" />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={filtered}
              dataKey="unitsSold"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#993333"
              label
            >
              {filtered.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
