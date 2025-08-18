"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [showBy, setShowBy] = useState("");

  return (
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
          <h2 className="text-2xl font-semibold">Login to Hotash</h2>
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Email
          </label>
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
          <label className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <RiLockPasswordFill className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
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

        {/* Sign in button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mb-4">
          SIGN IN
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
        
       <div className="mt-5 text-sm text-gray-600 flex justify-center">
          <span className="mr-1">Remember the password?</span>
          <Link
            href="/components/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
