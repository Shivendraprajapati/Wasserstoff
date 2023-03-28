import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-name">
        <div className="outer">
          <img src={logo} alt="" />
        </div>
        <p>WASSERSTOFF</p>
      </div>
      <div className="search-navlist">
        <div className="search-box">
          <input type="text" name="search" id="search" />
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <ul className="navlist">
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/Overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard">Analytics</Link>
          </li>
        </ul>
      </div>
      <div className="profile-option">
        <span>
          <i class="fa-regular fa-user"></i>
        </span>
        <span>
          <i className="fa-solid fa-list"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
