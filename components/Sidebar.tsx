import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-screen">
      <aside className="w-full md:w-64 bg-white p-4 shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="logo.jfif"
            alt="logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
          />
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center p-2 rounded bg-red-100 text-red-700"
          >
            <span className="ml-2">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded hover:bg-gray-200"
          >
            <span className="ml-2">Products</span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded hover:bg-gray-200"
          >
            <span className="ml-2">Customers</span>
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
