"use client";

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#f8e9dd]">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-[#b23a2b]">
          Dakingo
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Search Bar (original style) */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[280px]">
            <Search className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Cart Icon */}
          <button className="p-2 hover:bg-white rounded-full transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-[#b23a2b]"
            >
              <path d="m23.433,4.915c-.477-.582-1.182-.915-1.934-.915H4.49l-.256-1.843c-.17-1.229-1.234-2.157-2.476-2.157H.5C.224,0,0,.224,0,.5s.224.5.5.5h1.259c.745,0,1.383.556,1.485,1.294l1.781,12.825c.308,2.212,2.225,3.881,4.457,3.881h10.018c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-10.018c-1.73,0-3.214-1.289-3.462-3h12.64c2.138,0,3.993-1.521,4.412-3.617l.879-4.393c.147-.738-.042-1.494-.519-2.075Zm-.462,1.879l-.879,4.393c-.326,1.63-1.77,2.813-3.432,2.813H5.879l-1.25-9h16.87c.451,0,.874.2,1.16.549.286.349.399.803.312,1.245Zm-15.971,13.206c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Zm10-3c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1-1,1-1,1,.449,1,1,.449,1,1-.448,1-1,1Z"/>
            </svg>
          </button>

          {/* Login */}
          <button className="text-sm text-[#5a2d2d] hover:text-[#b23a2b]">
            Login / Signup
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-t">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#5a2d2d] overflow-x-auto">
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Cakes</a>
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Theme Cakes</a>
            <a href="#" className="hover:text-[#b23a2d] whitespace-nowrap">Desserts</a>
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Birthday</a>
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Hampers</a>
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Anniversary</a>
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Occasions</a>
            <a href="#" className="hover:text-[#b23a2b] whitespace-nowrap">Occasions</a>
          </div>

          {/* Order Now (moved here) */}
          <button className="bg-[#b23a2b] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#922f23] transition whitespace-nowrap">
            ORDER NOW
          </button>
        </div>
      </nav>
    </header>
  );
}