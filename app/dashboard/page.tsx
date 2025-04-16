import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import data from "@/data/dataset.json";
import StatCard from "@/components/StatCard";
import TopProducts from "@/components/TopProducts";
import SalesChart from "@/components/SalesChart";
import EngagementStat from "@/components/EngagementStat";
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
              id="1"
              title="Total Revenue"
              value="$124,563.00"
              change="+20.1% from last month"
            />
            <StatCard
              id="2"
              title="Total Orders"
              value="1,463"
              change="+6.2% from last month"
            />
            <StatCard
              id="3"
              title="Average Order Value"
              value="$85.12"
              change="-2.4% from last month"
            />
            <StatCard
              id="4"
              title="Customer Satisfaction"
              value="94.8%"
              change="+3.1% from last month"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TopProducts sales={data.sales} />
            <div className="bg-white p-4 rounded shadow">
              <SalesChart sales={data.sales} />
            </div>
          </div>
          <EngagementStat />
        </main>
      </div>
    </div>
  );
}
