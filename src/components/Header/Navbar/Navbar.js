import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ImHome } from "react-icons/im";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-nav">
        <li className="active">
          <Link to="/home">Trang chủ</Link>
        </li>
        <li className="active">
          <Link to="/home">Sách</Link>
        </li>
        <li className="active">
          <Link to="/home">Mượn sách</Link>
        </li>
        <li className="active">
          <Link to="/logout">tài khoản</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
