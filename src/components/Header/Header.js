import React, { useState } from 'react';
import Navbar from "../Header/Navbar/Navbar";
import Menu from './Menu/Menu';
import '../Header/Header.css';

function Header(props) {

    return (
        <div className="header">
            <div> <img src="https://d3av3o1z276gfa.cloudfront.net/images/place/AO1LivIblcTMcenXrN3K5qD3YSRQPXCe.jpeg" width="100" height="100" /></div>
            <div className="h"> <br />ĐẠI HỌC ĐÀ NẴNG <br />
                TRƯỜNG ĐẠI HỌC KINH TẾ </div> <br /> <br />

            <Navbar />

        </div>
    );

}
export default Header;