"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>
              <p className="text-sm text-gray-500">Welcome back, Admin</p>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="mt-4 sm:mt-0 px-4 py-2 border rounded w-full sm:w-64"
            />
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Revenue"
              value="$124,563.00"
              change="+20.1% from last month"
            />
            <StatCard
              title="Total Orders"
              value="1,463"
              change="+6.2% from last month"
            />
            <StatCard
              title="Average Order Value"
              value="$85.12"
              change="-2.4% from last month"
            />
            <StatCard
              title="Customer Satisfaction"
              value="94.8%"
              change="+3.1% from last month"
            />
          </div>

          {/* Product and category metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">
                Top Selling Products
              </h2>
              <ProductItem name="Premium Hoodie" price="$59.99" />
              <ProductItem name="Classic Cardigan" price="$79.99" />
              <ProductItem name="Sweatshirt" price="$46.99" />
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">Sales by Category</h2>
              <CategoryBar label="Women" percent={40} />
              <CategoryBar label="Men" percent={40} />
              <CategoryBar label="Accessories" percent={20} />
            </div>
          </div>

          {/* Engagement metrics */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Customer Engagement Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <EngagementStat label="Avg. Cart Size" value="68%" />
              <EngagementStat label="Website Visits" value="2,456" />
              <EngagementStat label="Avg. Product Rating" value="4.8/5.0" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-green-600 mt-1">{change}</p>
    </div>
  );
}

function ProductItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <span>{name}</span>
      <span className="font-semibold">{price}</span>
    </div>
  );
}

function CategoryBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

function EngagementStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-bold text-red-600 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
