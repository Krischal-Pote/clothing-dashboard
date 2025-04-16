"use client";
import { CloseIcon } from "@/icons/SvgCollection";
import React, { useState, useEffect } from "react";

interface ProductData {
  id: string;
  productName: string;
  category: string;
  color: string;
  sizes: {
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
  };
  price: string | number;
  currency: string;
  stock: string | number;
  releaseDate: string;
}

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  addProduct: (product: ProductData) => void;
  editProduct: (product: ProductData) => void;
  isEditing?: boolean;
  productData: ProductData | null;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  closeModal,
  addProduct,
  editProduct,
  isEditing = false,
  productData = null,
}) => {
  const categories = [
    "Clothing",
    "Shoes",
    "Accessories",
    "Electronics",
    "Home & Kitchen",
  ];

  const initialFormState: ProductData = {
    id: "",
    productName: "",
    category: "",
    color: "",
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
    },
    price: "",
    currency: "AUD",
    stock: "",
    releaseDate: "",
  };

  const [formData, setFormData] = useState<ProductData>(initialFormState);

  useEffect(() => {
    if (isEditing && productData) {
      setFormData(productData);
    } else {
      setFormData(initialFormState);
    }
  }, [isEditing, productData, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSizeChange = (size: string) => {
    setFormData({
      ...formData,
      sizes: {
        ...formData.sizes,
        [size]: !formData.sizes[size as keyof typeof formData.sizes],
      },
    });
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      ...formData,
      id: isEditing ? formData.id : Date.now().toString(),
    };

    if (isEditing) {
      editProduct(product);
    } else {
      addProduct(product);
      resetForm(); // Reset the form after successful addition
    }

    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-[#333333]">
            {isEditing ? "Edit Product" : "Add New Product"}
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-moncq-black mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  placeholder="e.g., Red or #FF0000"
                  className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Available Sizes
                </label>
                <div className="flex items-center space-x-4">
                  {(["S", "M", "L", "XL"] as const).map((size) => (
                    <div key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`size-${size}`}
                        checked={formData.sizes[size]}
                        onChange={() => handleSizeChange(size)}
                        className="h-4 w-4 text-[#993333] focus:ring-[#993333] border-moncq-pink rounded"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="ml-1 text-sm text-moncq-black"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Currency
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                >
                  <option value="AUD">AUD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-moncq-black mb-1">
                  Release Date
                </label>
                <input
                  type="date"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-moncq-pink rounded-md focus:outline-none focus:ring-1 focus:ring-[#993333]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#993333] text-white rounded-md hover:bg-[#7a2929] transition-colors"
            >
              {isEditing ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomModal;
