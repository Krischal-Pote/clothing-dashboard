"use client";

import React from "react";
import { Space, Table, Spin } from "antd";
import type { TableProps } from "antd";
import { DeleteIcon, EditIcon } from "@/icons/SvgCollection";

export interface ProductType {
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
  price: string;
  currency: string;
  stock: string;
  releaseDate: string;
}

interface CommonTableProps {
  data: ProductType[];
  onEdit: (record: ProductType) => void;
  onDelete: (id: string) => void;
}

const CommonTable: React.FC<CommonTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  const formatSizes = (sizes: any) => {
    return Object.entries(sizes)
      .filter(([_, isSelected]) => isSelected)
      .map(([size]) => size)
      .join(", ");
  };

  const columns: TableProps<ProductType>["columns"] = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product",
      dataIndex: "productName",
      key: "product",
      render: (text, record) => (
        <div className="flex items-center">
          <div className="font-medium">{text}</div>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      render: (color) => (
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{
              backgroundColor: color.startsWith("#") ? color : undefined,
              background: !color.startsWith("#") ? color : undefined,
            }}
          ></div>
          {color}
        </div>
      ),
    },
    {
      title: "Size",
      key: "sizes",
      dataIndex: "sizes",
      render: (sizes) => {
        const availableSizes = formatSizes(sizes);
        return <span>{availableSizes}</span>;
      },
    },
    {
      title: "Price",
      key: "price",
      render: (_, record) => <span>${record.price}</span>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      key: "releaseDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => onEdit(record)}
            className="text-[#993333] hover:text-[#7a2929] transition-colors cursor-pointer"
          >
            <EditIcon />
          </button>
          <button
            onClick={() => onDelete(record.id)}
            className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
          >
            <DeleteIcon />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="relative">
      <Table<ProductType>
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{ pageSize: 5, position: ["bottomRight"] }}
        className="product-table"
      />
    </div>
  );
};

export default CommonTable;
