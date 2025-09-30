import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-bold tracking-wide">📝 Todo App</h1>
      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
       
        <li className="hover:text-gray-200 cursor-pointer">Completed</li>
      </ul>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";

// function ChipsInput() {

//   return (
//     <div style={{display:"flex", flexDirection:"column",          alignItems:"center", margin:"40px 0"}}>
//       <h2>Chips Input</h2>
//       <input
//         type="text"     
//         placeholder="Type a chip and press tag"
//         style={{ padding: "8px", width: "200px" }}
//       />
      
//     </div>
//   );
// }

// export default ChipsInput;


