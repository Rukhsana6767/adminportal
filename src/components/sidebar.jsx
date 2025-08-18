"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdLockOutline,
  MdPeopleOutline,
  MdShoppingCart,
  MdReceiptLong,
  MdLocalShipping,
  MdMessage,
  MdNotificationsNone,
  MdSettings,
  MdInsertDriveFile,
  MdExpandMore,
} from "react-icons/md";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // ✅ Removed Dashboard from dropdownMenus
  const dropdownMenus = [
    {
      label: "Authentication",
      icon: <MdLockOutline />,
      menu: "auth",
      items: [
        { label: "Login", href: "/authentication/login" },
        { label: "Register", href: "/authentication/register" },
        { label: "Reset Password", href: "/authentication/reset" },
      ],
    },
    {
      label: "Users",
      icon: <MdPeopleOutline />,
      menu: "users",
      items: [
        { label: "All Users", href: "/users" },
        { label: "Add User", href: "/users/add" },
        { label: "User Profile", href: "/users/profile" },
      ],
    },
  ];

  // ✅ Added Dashboard as a static button
  const staticMenuItems = [
    { label: "Dashboard", icon: <MdDashboard />, href: "/dashboard" },
    { label: "Registration", icon: <MdShoppingCart />, href: "/authentication/registerForm" },
    { label: "Invoices", icon: <MdReceiptLong />, href: "/invoices" },
    { label: "Orders", icon: <MdLocalShipping />, href: "/orders" },
    { label: "Messages", icon: <MdMessage />, href: "/messages" },
    { label: "Notifications", icon: <MdNotificationsNone />, href: "/notifications" },
    { label: "Settings", icon: <MdSettings />, href: "/settings" },
    { label: "Blank Page", icon: <MdInsertDriveFile />, href: "/blank" },
  ];

  return (
    <div className="p-4 space-y-2 bg-white h-full w-full border-r border-gray-200 shadow-sm">
      {/* Dropdown Buttons */}
      {dropdownMenus.map((menu, idx) => (
        <div key={idx}>
          <button
            onClick={() => toggleDropdown(menu.menu)}
            className="w-full flex justify-between items-center bg-white text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-base font-semibold shadow-sm transition-all"
          >
            <span className="flex items-center gap-3 text-lg font-bold">
              {menu.icon}
              {menu.label}
            </span>
            <MdExpandMore
              className={`transition-transform duration-200 text-xl ${
                openDropdown === menu.menu ? "rotate-180" : ""
              }`}
            />
          </button>
          {openDropdown === menu.menu && (
            <ul className="ml-10 mt-1 space-y-1 text-sm text-gray-600 font-medium">
              {menu.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="block hover:text-gray-900 cursor-pointer transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Static Buttons */}
      {staticMenuItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="w-full flex items-center gap-3 bg-white text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-base font-semibold shadow-sm transition-all"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
