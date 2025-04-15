import {
  CashIcon,
  OrderIcon,
  SmileIcon,
  ValueIcon,
} from "@/icons/SvgCollection";

export default function StatCard({
  id,
  title,
  value,
  change,
}: {
  id: string;
  title: string;
  value: string;
  change: string;
}) {
  const renderIcon = () => {
    switch (id) {
      case "1":
        return <CashIcon />;
      case "2":
        return <OrderIcon />;
      case "3":
        return <ValueIcon />;
      case "4":
        return <SmileIcon />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between">
        <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
        {renderIcon()}
      </div>
      <p className="text-xl font-bold">{value}</p>
      <p
        className={`text-xs mt-1 ${
          parseFloat(change) < 0 ? "text-[#EF4444]" : "text-green-600"
        }`}
      >
        {change}
      </p>
    </div>
  );
}
