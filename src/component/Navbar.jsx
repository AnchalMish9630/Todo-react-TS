import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Brand Logo / App Name */}
      <h1 className="text-xl font-bold tracking-wide">📝 Todo App</h1>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">My Todos</li>
        <li className="hover:text-gray-200 cursor-pointer">Completed</li>
      </ul>

      {/* Profile / Login Button */}
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
