import React, { useState } from "react";
import Navbar from "../Header/Navbar/Navbar";
import Menu from "./Menu/Menu";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../img/logo.jpg";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header__logo__title">
        <div className="header__logo">
          <img src={Logo} width="100" height="100" alt="logo" />
          <h1>
            ĐẠI HỌC ĐÀ NẴNG <br />
            TRƯỜNG ĐẠI HỌC KINH TẾ
          </h1>
        </div>
        <div className="search__account">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <AiOutlineSearch size="1.3em" />
          </div>
          <div className="account">
            <p>Tài Lê</p>
            <AiOutlineUser size="1.5em" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
export default Header;
