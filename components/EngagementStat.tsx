import { CustomerIcon, HeartIcon, StarIcon } from "@/icons/SvgCollection";

const EngagementStat = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <h2 className="text-md sm:text-lg font-semibold mb-4 text-[#333333]">
        Customer Engagement Metrics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Return Rate */}
        <div className="bg-[#f9f9f9] rounded-xl flex flex-col items-center justify-center py-4 px-2">
          <div className="text-[#993333] mb-1">
            <CustomerIcon color={"#993333"} />
            <i className="fas fa-users text-xl"></i>
          </div>
          <p className="text-sm text-[#333333]">Return Rate</p>
          <p className="text-lg font-bold text-[#333333]">68%</p>
        </div>

        {/* Wishlist Items */}
        <div className="bg-[#f9f9f9] rounded-xl flex flex-col items-center justify-center py-4 px-2">
          <div className="text-[#993333] mb-1">
            <HeartIcon />
          </div>
          <p className="text-sm text-[#333333]">Wishlist Items</p>
          <p className="text-lg font-bold text-[#333333]">2,456</p>
        </div>

        {/* Average Rating */}
        <div className="bg-[#f9f9f9] rounded-xl flex flex-col items-center justify-center py-4 px-2">
          <div className="text-[#993333] mb-1">
            <StarIcon />
          </div>
          <p className="text-sm text-[#333333]">Average Rating</p>
          <p className="text-lg font-bold text-[#333333]">4.8/5.0</p>
        </div>
      </div>
    </div>
  );
};

export default EngagementStat;
