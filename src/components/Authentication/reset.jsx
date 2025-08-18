import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[320px] bg-white rounded-xl shadow-lg p-6">
        {/* Logo and heading */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/download.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="mb-3 rounded-full"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Login to Hotash
          </h2>
        </div>

        {/* Input field */}
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <MdOutlineEmail className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Home button */}
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 text-base font-medium"
        >
          <IoMdHome size={20} />
          Go to Home
        </Link>

        {/* Footer link */}
        <div className="mt-5 text-sm text-gray-600 flex justify-center">
          <span className="mr-1">Remember the password?</span>
          <Link
            href="/components/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
