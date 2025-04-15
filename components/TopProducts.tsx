type Sale = {
  product: string;
  category: string;
  unitsSold: number;
  revenue: number;
  price: string;
};

export default function TopProducts({ sales }: { sales: Sale[] }) {
  const topProducts = [...sales]
    .sort((a, b) => b.unitsSold - a.unitsSold)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-2">Top Selling Products</h2>
      <ul>
        {topProducts.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <span>{item?.product}</span>
            <span className="font-semibold">{item?.price}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}
