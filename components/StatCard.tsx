export default function StatCard({
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