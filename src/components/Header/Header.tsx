import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <h1 className="text-white text-2xl font-bold">My Movie App</h1>
        </Link>
        <nav>
          <ul className="flex">
            <li>
              <Link className="text-white hover:text-gray-300 px-3 py-2" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-300 px-3 py-2"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-300 px-3 py-2"
                to="/plans"
              >
                Plans
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
