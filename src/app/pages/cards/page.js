"use client";
import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Page = () => {

  const [showBy, setshowBy] = useState("");
  const [categoryBy, setcategoryBy] = useState("");
  const [brandBy, setbrandBy] = useState("");
  const [searchBy, setsearchBy] = useState("");

  const handleChange = (event) => {
    setshowBy(event.target.value);
  };

   const handleChang = (event) => {
    setcategoryBy(event.target.value);
  };

   const handleChan = (event) => {
    setbrandBy(event.target.value);
  };

   const handleCha = (event) => {
    setsearchBy(event.target.value);
  };


  return (
    <div className="shadow border-0 p-3 mt-3  rounded-[10px]">
      <div>
        <h3 className="text-[18px] font-[600]">Best Selling Product</h3>
      </div>

      <div className="flex gap-50">
        <div>
          <h4 className="text-[15px]  mt-5 font-[550]">Show By</h4>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBy}
          label="Age"
          onChange={handleChange}
          className="w-[250%] mt-2"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </div>
        
         <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div>
          <h4 className="text-[15px]  mt-5 font-[550]">Category By</h4>
            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={categoryBy}
          label="Age"
          onChange={handleChang}
          className="w-[250%] mt-2"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div>
          <h4 className="text-[15px]  mt-5 font-[550]">Brand By</h4>
            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={brandBy}
          label="Age"
          onChange={handleChan}
          className="w-[250%] mt-2"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>
        </FormControl>
        

        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div>
          <h4 className="text-[15px]  mt-5 font-[550]">Search By</h4>
            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={searchBy}
          label="Age"
          onChange={handleCha}
          className="w-[250%] mt-2"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>
        </FormControl>
      </div>

<div className="flex">
  <table className="table-auto w-full border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
    <thead className="bg-gray-600 text-white">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">UID</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">PRODUCT</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">CATEGORY</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">BRAND</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">PRICE</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">STOCK</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">RATING</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">ORDER</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">SALE</th>
        <th className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">ACTION</th>
      </tr>
    </thead>
    <tbody className="text-gray-600">
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-4 py-2 border border-gray-200">1</td>
        <td className="px-4 py-2 border border-gray-200">iPhone 14</td>
        <td className="px-4 py-2 border border-gray-200">Electronics</td>
        <td className="px-4 py-2 border border-gray-200">Apple</td>
        <td className="px-4 py-2 border border-gray-200">$999</td>
        <td className="px-4 py-2 border border-gray-200">20</td>
        <td className="px-4 py-2 border border-gray-200">4.8</td>
        <td className="px-4 py-2 border border-gray-200">150</td>
        <td className="px-4 py-2 border border-gray-200">$120k</td>
        <td className="px-4 py-2 border border-gray-200">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
            Edit
          </button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-4 py-2 border border-gray-200">2</td>
        <td className="px-4 py-2 border border-gray-200">Samsung S23</td>
        <td className="px-4 py-2 border border-gray-200">Electronics</td>
        <td className="px-4 py-2 border border-gray-200">Samsung</td>
        <td className="px-4 py-2 border border-gray-200">$899</td>
        <td className="px-4 py-2 border border-gray-200">35</td>
        <td className="px-4 py-2 border border-gray-200">4.6</td>
        <td className="px-4 py-2 border border-gray-200">120</td>
        <td className="px-4 py-2 border border-gray-200">$95k</td>
        <td className="px-4 py-2 border border-gray-200">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
            Edit
          </button>
        </td>
      </tr>

      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-4 py-2 border border-gray-200">3</td>
        <td className="px-4 py-2 border border-gray-200">Samsung S23</td>
        <td className="px-4 py-2 border border-gray-200">Electronics</td>
        <td className="px-4 py-2 border border-gray-200">Samsung</td>
        <td className="px-4 py-2 border border-gray-200">$899</td>
        <td className="px-4 py-2 border border-gray-200">35</td>
        <td className="px-4 py-2 border border-gray-200">4.6</td>
        <td className="px-4 py-2 border border-gray-200">120</td>
        <td className="px-4 py-2 border border-gray-200">$95k</td>
        <td className="px-4 py-2 border border-gray-200">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
            Edit
          </button>
        </td>
      </tr>

      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-4 py-2 border border-gray-200">4</td>
        <td className="px-4 py-2 border border-gray-200">Samsung S23</td>
        <td className="px-4 py-2 border border-gray-200">Electronics</td>
        <td className="px-4 py-2 border border-gray-200">Samsung</td>
        <td className="px-4 py-2 border border-gray-200">$899</td>
        <td className="px-4 py-2 border border-gray-200">35</td>
        <td className="px-4 py-2 border border-gray-200">4.6</td>
        <td className="px-4 py-2 border border-gray-200">120</td>
        <td className="px-4 py-2 border border-gray-200">$95k</td>
        <td className="px-4 py-2 border border-gray-200">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
            Edit
          </button>
        </td>
      </tr>

      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-4 py-2 border border-gray-200">5</td>
        <td className="px-4 py-2 border border-gray-200">Samsung S23</td>
        <td className="px-4 py-2 border border-gray-200">Electronics</td>
        <td className="px-4 py-2 border border-gray-200">Samsung</td>
        <td className="px-4 py-2 border border-gray-200">$899</td>
        <td className="px-4 py-2 border border-gray-200">35</td>
        <td className="px-4 py-2 border border-gray-200">4.6</td>
        <td className="px-4 py-2 border border-gray-200">120</td>
        <td className="px-4 py-2 border border-gray-200">$95k</td>
        <td className="px-4 py-2 border border-gray-200">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
            Edit
          </button>
        </td>
      </tr>

      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-4 py-2 border border-gray-200">6</td>
        <td className="px-4 py-2 border border-gray-200">NOKIA S23</td>
        <td className="px-4 py-2 border border-gray-200">Electronics</td>
        <td className="px-4 py-2 border border-gray-200">Samsung</td>
        <td className="px-4 py-2 border border-gray-200">$699</td>
        <td className="px-4 py-2 border border-gray-200">30</td>
        <td className="px-4 py-2 border border-gray-200">2.6</td>
        <td className="px-4 py-2 border border-gray-200">220</td>
        <td className="px-4 py-2 border border-gray-200">$55k</td>
        <td className="px-4 py-2 border border-gray-200">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Page;
