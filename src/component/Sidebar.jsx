import React from "react";

export const Sidebar = () => {
  // Dummy todo list (can be replaced with props or API data)
  const todos = [
    "Finish React assignment",
    "Practice JavaScript DSA",
    "Work on portfolio",
    "Read Redux docs",
    "Push code to GitHub"
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">📌 Todo Sidebar</h2>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
