import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import data from "@/data/dataset.json";
import StatCard from "@/components/StatCard";
import TopProducts from "@/components/TopProducts";
import SalesChart from "@/components/SalesChart";
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <Header session={session} />
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">
                Top Selling Products
              </h2>
              <ProductItem name="Premium Hoodie" price="$59.99" />
              <ProductItem name="Classic Cardigan" price="$79.99" />
              <ProductItem name="Sweatshirt" price="$46.99" />
            </div> */}
            <TopProducts sales={data.sales} />
            <div className="bg-white p-4 rounded shadow">
              {/* <h2 className="text-lg font-semibold mb-4">Sales by Category</h2>
              <CategoryBar label="Women" percent={40} />
              <CategoryBar label="Men" percent={40} />
              <CategoryBar label="Accessories" percent={20} /> */}
              <SalesChart sales={data.sales} />
            </div>
          </div>

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
