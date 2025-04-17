"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import CommonTable from "@/components/CommonTable";
import CusstomModal from "@/components/CustomModal";
import { Spin } from "antd";
import ProductFilterBar from "@/components/ProductFilterBar";
import { Product } from "@/types/Product";

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (error) {
        console.error("Error parsing products from localStorage:", error);
        setProducts([]);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded && products.length >= 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products, isLoaded]);

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

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const editProduct = (product: Product) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)));
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setIsOpen(true);
  };

  const handleDelete = (productId: string) => {
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
          {!isLoaded ? (
            <div className="flex justify-center items-center h-[60vh]">
              <Spin size="large" />
            </div>
          ) : (
            <>
              <ProductFilterBar
                originalProducts={products}
                onFilter={setFilteredProducts}
              />
              <CommonTable
                data={filteredProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
                loading={false}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
