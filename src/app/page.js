"use client";
import React, { useState } from "react";
import Header from "../components/header.jsx";
import Dashboard from "../components/dashboard.jsx";
import Sidebar from "../components/sidebar.jsx";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100"} pt-[72px]`}>
      {/* Header */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <div
            className={`w-[18%] h-[calc(100vh-72px)] fixed top-[72px] left-0 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            } shadow-md transition-all duration-300`}
          >
            <Sidebar />
          </div>
        )}

        {/* Main content */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "ml-[18%] w-[82%]" : "ml-0 w-full"
          } px-4 py-4`}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Page;
