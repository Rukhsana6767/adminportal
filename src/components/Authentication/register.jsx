"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Checkbox from '@mui/material/Checkbox';

const Page = () => {
    const [showBy, setShowBy] = useState("");

    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex gap-8 p-5">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-gray-50 w-[900px] h-[800px] rounded-lg shadow-md p-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold">BEST UX/UI FASHION</h1>
          <h1 className="text-4xl font-extrabold">ECOMMERCE DASHBOARD</h1>
          <h1 className="text-4xl font-extrabold">& ADMIN PANEL</h1>
        </div>

        <div className="text-gray-700 text-lg space-y-2 mb-6 text-center">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, inventore illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, inventore illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat.</p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
        >
          <IoMdHome size={24} />
          Go to Home
        </Link>
      </div>

      {/* Right Section */}
      <div className="  w-[500px] h-[800px] rounded-lg shadow-md flex justify-center items-center">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Outer card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo and heading */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/download.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="mb-2"
          />
          <h2 className="text-2xl font-semibold">Register a new account</h2>
        </div>

        {/* Email input */}
         <div className="mb-4">
          
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <MdOutlineEmail className="text-gray-500 mr-2" />
            <input
              type="name"
              placeholder="Enter your name"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
         
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <MdOutlineEmail className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-4">
          
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <RiLockPasswordFill className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <RiLockPasswordFill className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>


        {/* Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Gender
          </label>
          <select
            value={showBy}
            onChange={(e) => setShowBy(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 outline-none"
          >
          
            <option value="10">Male</option>
            <option value="20">Female</option>
            <option value="30">Both</option>
          </select>
        </div>

        <div className="flex ">
             <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <p className="mt-2" >I agree to all the terms & conditions</p>

        </div>

        {/* Sign in button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mb-4">
          SIGN Up
        </button>

        {/* Forget password link */}
        <div className="text-center mb-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Forget Password?
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social buttons */}
        <button className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition mb-2">
          <FaTwitter />
          Continue with Twitter
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
          <IoLogoFacebook />
          Continue with Facebook
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Page;
