import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-center text-gray-400">
          &copy; 2023 My Movie App. All rights reserved.
        </p>
        {pathname !== "/" && (
          <p className="text-center text-gray-400">{`You are in ${pathname}`}</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
