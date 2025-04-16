"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import CommonTable from "@/components/CommonTable";
import { Modal } from "antd";
import CusstomModal from "@/components/CustomModal";

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const openModal = () => {
    setIsEditing(false);
    setCurrentProduct(null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentProduct(null);
    setIsEditing(false);
  };

  const addProduct = (product: string) => {
    setProducts([...products, product]);
  };

  const editProduct = (product: string) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)));
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setIsOpen(true);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 p-6">
          <Header />
          <div className="flex justify-end mt-2 mb-2">
            <div
              onClick={openModal}
              className="w-[200px] border p-2 bg-moncq-maroon text-moncq-white rounded-lg flex justify-center align-middle cursor-pointer"
            >
              + Add New Product
            </div>
          </div>
          <CusstomModal
            isOpen={isOpen}
            closeModal={closeModal}
            addProduct={addProduct}
            editProduct={editProduct}
            isEditing={isEditing}
            productData={currentProduct}
          />
          <CommonTable
            data={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
