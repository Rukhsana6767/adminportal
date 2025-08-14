"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import {
  MdOutlineMenuOpen,
  MdMenu,
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineEmail,
} from "react-icons/md";
import { FaCartPlus, FaRegBell } from "react-icons/fa6";
import SearchBox from "../searchBox/page";
import Avatar from "@mui/material/Avatar";
import { Typography, Box } from "@mui/material";
import DropdownMenu from "../dropdown/page";
import sdata from "../Sdata";

const Header = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const currentData = sdata.find((item) => item.id === menuId);

  return (
    <header
      className={`w-full shadow-md fixed top-0 left-0 right-0 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/download.jpg" alt="Logo" width={40} height={40} />
            <span className="text-lg font-bold">HOTASH</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Toggle Sidebar Button */}
            <IconButton
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="!bg-blue-100 w-10 h-10 rounded-full hover:bg-blue-700"
            >
              {sidebarOpen ? (
                <MdOutlineMenuOpen size={22} />
              ) : (
                <MdMenu size={22} />
              )}
            </IconButton>
            <SearchBox />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 relative">
          {/* Theme Toggle Button */}
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            className="!bg-blue-100 w-10 h-10 rounded-full hover:bg-blue-700"
          >
            {darkMode ? (
              <MdOutlineDarkMode size={15} />
            ) : (
              <MdOutlineLightMode size={15} />
            )}
          </IconButton>

          <IconButton
            onClick={(e) => handleMenuClick(e, "cart")}
            className="!bg-blue-100 w-10 h-10 rounded-full hover:bg-blue-700"
          >
            <FaCartPlus size={15} />
          </IconButton>

          <IconButton
            onClick={(e) => handleMenuClick(e, "email")}
            className="!bg-blue-100 w-10 h-10 rounded-full hover:bg-blue-700"
          >
            <MdOutlineEmail size={15} />
          </IconButton>

          <IconButton
            onClick={(e) => handleMenuClick(e, "notifications")}
            className="!bg-blue-100 w-10 h-10 rounded-full hover:bg-blue-700"
          >
            <FaRegBell size={15} />
          </IconButton>

          {/* Profile */}
          <Box
            onClick={(e) => handleMenuClick(e, "profile")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Avatar alt="Cindy Baker" src="/download (1).jpg" />
            <div className="leading-tight text-left">
              <Typography variant="subtitle1" className="!font-medium">
                Rukhsana
              </Typography>
              <Typography variant="body2">rukhssana@</Typography>
            </div>
          </Box>

          {/* Dropdown */}
          {currentData && (
            <DropdownMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              handleClose={handleClose}
            >
              {currentData.content}
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
