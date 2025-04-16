import CommonTable from "@/components/CommonTable";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 p-6">
          <Header />
          <div className="flex justify-end mt-2 mb-2">
            <div className="w-[200px] border p-2 bg-moncq-maroon text-moncq-white rounded-lg flex justify-center align-middle cursor-pointer">
              + Add New Product
            </div>
          </div>
          <CommonTable />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
