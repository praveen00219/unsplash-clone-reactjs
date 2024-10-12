import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Header = ({ onSearch }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu
  const [isOpenFilter, setIsOpenFilter] = useState(false); // State to control filter toggle

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSearch(category);
    setIsMenuOpen(false); // Close menu on category click
    setIsOpenFilter(false); // Close filter on category click
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsOpenFilter(false); // Close filter if menu is toggled
  };

  const toggleFilter = () => {
    setIsOpenFilter((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div className="container1 mx-auto px-4 py-4 flex flex-col justify-between items-center">
        <div className="headerBar flex items-center justify-between w-full">
          <img
            src="https://cdn.icon-icons.com/icons2/3261/PNG/512/unsplash_logo_icon_206651.png"
            alt="Unsplash Logo"
            className="h-10"
          />
          <SearchForm onSearch={onSearch} />
          <div className="hidden md:flex space-x-6">
            <span className="cursor-pointer hover:text-blue-600">
              Get Unsplash+
            </span>
            <button className="bg-white border hover:border-gray-500 hover:text-blue-600 px-4 py-1 rounded-lg">
              Submit an image
            </button>
            <span>
              <svg
                className="cursor-pointer fill-gray-500 hover:fill-gray-800"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z" />
              </svg>
            </span>
            <span>
              <svg
                className="cursor-pointer fill-gray-500 hover:fill-gray-800"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <g>
                  <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
                  <path
                    fillRule="evenodd"
                    d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </span>
          </div>

          {/*Hamburger Filter Toggle Button */}
          <button
            className="md:hidden mr-4 cursor-pointer hover:text-blue-600"
            onClick={toggleFilter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.1em"
              height="1.1em"
              viewBox="0 0 16 16"
            >
              <path
                fill={isOpenFilter ? "blue" : "gray"}
                d="M6 1a3 3 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3 3 0 0 0 6 1M5 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5 5a3 3 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3 3 0 0 0 10 9m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0"
              />
            </svg>
          </button>

          {/* Hamburger Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill={isMenuOpen ? "blue" : "gray"}
                d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex text-center overflow-x-auto w-full mt-4">
          <Nav
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        {/* Mobile filter */}
        {isOpenFilter && (
          <div className=" mt-4">
            <Nav
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex justify-end w-full mt-4">
            <div className="text-left text-gray-600">
              <span className="block mb-2 cursor-pointer hover:text-blue-600">
                Get Unsplash+
              </span>
              <div className="mb-2 flex gap-2 hover:text-blue-600">
                <span>
                  <img
                    src="https://cdn.icon-icons.com/icons2/3261/PNG/512/unsplash_logo_icon_206651.png"
                    alt=""
                    className="w-6"
                  />
                </span>
                <span>Submit an image</span>
              </div>
              <div className="mb-2 flex gap-2">
                <span>
                  <svg
                    className="cursor-pointer fill-gray-500 hover:fill-gray-800"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z" />
                  </svg>
                </span>
                <span>Notifications</span>
              </div>
              <div className="mb-2 flex gap-2">
                <span>
                  <svg
                    className="cursor-pointer fill-gray-500 hover:fill-gray-800"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 48 48"
                  >
                    <g>
                      <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
                      <path
                        fillRule="evenodd"
                        d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </span>
                <span>Create Account</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
