"use client";
import React, { useState } from "react";
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

  const dropdownMenus = [
    {
      label: "Dashboard",
      icon: <MdDashboard />,
      menu: "dashboard",
      items: ["Dashboard 1", "Dashboard 2", "Dashboard 3"],
    },
    {
      label: "Authentication",
      icon: <MdLockOutline />,
      menu: "auth",
      items: ["Login", "Register", "Reset Password"],
    },
    {
      label: "Users",
      icon: <MdPeopleOutline />,
      menu: "users",
      items: ["All Users", "Add User", "User Profile"],
    },
  ];

  const staticMenuItems = [
    { label: "Product", icon: <MdShoppingCart /> },
    { label: "Invoices", icon: <MdReceiptLong /> },
    { label: "Orders", icon: <MdLocalShipping /> },
    { label: "Messages", icon: <MdMessage /> },
    { label: "Notifications", icon: <MdNotificationsNone /> },
    { label: "Settings", icon: <MdSettings /> },
    { label: "Blank Page", icon: <MdInsertDriveFile /> },
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
                <li
                  key={i}
                  className="hover:text-gray-900 cursor-pointer transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Static Buttons */}
      {staticMenuItems.map((item, idx) => (
        <button
          key={idx}
          className="w-full flex items-center gap-3 bg-white text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-base font-semibold shadow-sm transition-all"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
