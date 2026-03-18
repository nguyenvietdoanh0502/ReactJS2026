import React from "react";
import './Header.css';

const Header = () => {

  return (
    <>
        <header className="site-header">
            <div className="container">
                <a href="#" className="logo">SoftLand</a>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li className="dropdown">
                            <a href="#">
                                Dropdown <i className="fas fa-chevron-down arrow"></i>
                            </a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown deep-dropdown">
                                <a href="#" className="deep">
                                    Deep Dropdown <i className="fas fa-chevron-down arrow"></i>
                                </a>
                                <ul>
                                    <li><a href="#">Deep Dropdown 1</a></li>
                                    <li><a href="#">Deep Dropdown 2</a></li>
                                    <li><a href="#">Deep Dropdown 3</a></li>
                                    <li><a href="#">Deep Dropdown 4</a></li>
                                    <li><a href="#">Deep Dropdown 5</a></li>
                                </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                            </li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  );
};

export default Header; 