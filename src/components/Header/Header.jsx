import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-header-bg h-20 flex items-center justify-between px-32">
      <img src={logo} alt="" />
      <div className="flex space-x-5 text-[#fff]">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  );
};

export default Header;