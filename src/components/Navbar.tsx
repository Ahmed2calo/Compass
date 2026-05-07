import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-800 fixed w-full top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          My Portfolio
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 items-center">

          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#work" className="hover:text-blue-600 transition">
            Work
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;