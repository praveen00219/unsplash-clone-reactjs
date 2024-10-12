import React from "react";

const Nav = ({ activeCategory, onCategoryClick }) => {
  const categories = [
    "all",
    "coding",
    "illustration",
    "nature",
    "mountain",
    "forest",
    "river",
    "beach",
    "animals",
    "film",
    "unsplash+",
  ];

  return (
    <nav className="space-x-5 overflow-auto">
      {categories.map((category) => (
        <a
          key={category}
          href="#"
          className={`cursor-pointer ${
            activeCategory === category
              ? "text-blue-600 underline"
              : "text-gray-600 hover:text-blue-600 hover:underline"
          }`}
          onClick={(e) => {
            e.preventDefault();
            onCategoryClick(category);
          }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
