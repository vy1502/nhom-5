import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { ImHome } from "react-icons/im";

const Navbar = () => {
    return (
        <nav className='mainmenu-area'>
            <div className="grid wide"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                <div className='container'>
                    <div className='row-nav'>
                        <div className="navbar-list">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <Link to='/'></Link>
                                </li>
                                <li className="active">
                                    <Link to='/home'>Trang chủ</Link>
                                </li>
                                <li className="active">
                                    <Link to='/logout'>Đăng xuất</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;