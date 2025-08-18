"use client";
import React, { useState } from "react";

const Page = () => {
  const [filters, setFilters] = useState({
    showBy: "",
    categoryBy: "",
    brandBy: "",
    searchBy: "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const products = [
    {
      id: 1,
      name: "iPhone 14",
      category: "Electronics",
      brand: "Apple",
      price: "$999",
      stock: 20,
      rating: 4.8,
      order: 150,
      sale: "$120k",
    },
    {
      id: 2,
      name: "Samsung S23",
      category: "Electronics",
      brand: "Samsung",
      price: "$899",
      stock: 35,
      rating: 4.6,
      order: 120,
      sale: "$95k",
    },
    {
      id: 3,
      name: "Samsung S23",
      category: "Electronics",
      brand: "Samsung",
      price: "$899",
      stock: 35,
      rating: 4.6,
      order: 120,
      sale: "$95k",
    },
    {
      id: 4,
      name: "Samsung S23",
      category: "Electronics",
      brand: "Samsung",
      price: "$899",
      stock: 35,
      rating: 4.6,
      order: 120,
      sale: "$95k",
    },
    {
      id: 5,
      name: "Samsung S23",
      category: "Electronics",
      brand: "Samsung",
      price: "$899",
      stock: 35,
      rating: 4.6,
      order: 120,
      sale: "$95k",
    },
    {
      id: 6,
      name: "Nokia S23",
      category: "Electronics",
      brand: "Samsung",
      price: "$699",
      stock: 30,
      rating: 2.6,
      order: 220,
      sale: "$55k",
    },
  ];

  const headers = [
    "UID",
    "PRODUCT",
    "CATEGORY",
    "BRAND",
    "PRICE",
    "STOCK",
    "RATING",
    "ORDER",
    "SALE",
    "ACTION",
  ];

  return (
    <div className="shadow border-0 p-3 mt-3 rounded-[10px]">
      <h3 className="text-[18px] font-[600]">Best Selling Product</h3>

      <div className="flex mt-3">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-600 text-white">
            <tr>
              {headers.map((head, idx) => (
                <th
                  key={idx}
                  className="px-4 py-2 text-left text-sm font-semibold border border-gray-200"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 border border-gray-200">{p.id}</td>
                <td className="px-4 py-2 border border-gray-200">{p.name}</td>
                <td className="px-4 py-2 border border-gray-200">{p.category}</td>
                <td className="px-4 py-2 border border-gray-200">{p.brand}</td>
                <td className="px-4 py-2 border border-gray-200">{p.price}</td>
                <td className="px-4 py-2 border border-gray-200">{p.stock}</td>
                <td className="px-4 py-2 border border-gray-200">{p.rating}</td>
                <td className="px-4 py-2 border border-gray-200">{p.order}</td>
                <td className="px-4 py-2 border border-gray-200">{p.sale}</td>
                <td className="px-4 py-2 border border-gray-200">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
                    Edit
                  </button>
                  <button className="bg-red-400 hover:bg-red-800 text-white ml-5 px-3 py-1 rounded text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
