import { TIcon } from "../icons/SvgCollection";
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
    <div className="bg-moncq-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-moncq-black">
        Top Selling Products
      </h2>
      <ul className="space-y-3">
        {topProducts.map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-between bg-[#f9f9f9] p-3 rounded-xl"
          >
            <div className="flex items-center space-x-3">
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-moncq-pink">
                <span className="text-lg">
                  <TIcon />
                </span>
              </div>
              {/* Product info */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-moncq-black">
                  {item.product}
                </span>
                <span className="text-xs text-gray-500">
                  {item.unitsSold.toLocaleString()} sales
                </span>
              </div>
            </div>
            {/* Price */}
            <span className="text-sm font-semibold text-moncq-black">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
