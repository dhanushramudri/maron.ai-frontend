import React, { useState } from "react";
import Logo from "./logo.svg";
import Account from "../../Account";
import { Link } from "react-router-dom";
import { SignUpButton, SignedOut } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="logo-content">
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 852.19 512.45"
            width="46"
            height="auto"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                <path
                  fill="#3b82f6"
                  d="m773.24,284.1v101.77c0,6.68-1.33,12.85-3.73,18.53-3.58,8.5-9.68,15.85-17.3,20.99-7.65,5.14-16.6,8.09-26.6,8.11-6.69,0-12.85-1.33-18.53-3.73-8.5-3.58-15.85-9.68-20.99-17.3-5.14-7.65-8.09-16.6-8.11-26.6V0h-78.95v385.87c0,17.37,3.54,34.12,9.96,49.28,9.64,22.77,25.64,42.01,45.82,55.65,20.15,13.64,44.72,21.66,70.8,21.64,17.37,0,34.12-3.54,49.28-9.96,22.77-9.64,42.01-25.63,55.66-45.82,13.64-20.15,21.66-44.72,21.64-70.8v-101.77h-78.95Z"
                ></path>
                <path
                  fill="#3486ed"
                  d="m525.37,512.45v-.04h-38.54c-14.41-23.27-31.01-64.65-31.23-131.68v-212.29L111.63,512.41H0L512.39.02h22.15v388.95c.39,25.07,5.69,49.26,15.04,71.34,8.16,19.27,19.42,36.78,33.02,52.14h-57.23Z"
                ></path>
              </g>
            </g>
          </svg>
          <p className="logoname">Maron</p>
        </div>
      </div>
      <div className={`menu-wrapper ${isMenuOpen ? "open" : ""}`}>
        <div className="menu" style={{ marginRight: "150px" }}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "dashboard/create-job";
              }}
            >
              Create Job
            </li>
            <li>Savings Calculator</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="buttons" style={{ marginRight: "100px" }}>
          <ul>
            <li>
              <Account />
            </li>
            <SignedOut>
              <li>
                <SignUpButton className="signup_btn" />
              </li>
            </SignedOut>
          </ul>
        </div>
      </div>
      <div
        id="hamburger"
        onClick={toggleMenu}
        className={isMenuOpen ? "open" : ""}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/savings">Savings Calculator</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Account />
          </li>
          <SignedOut>
            <li>
              <SignUpButton className="signup_btn" />
            </li>
          </SignedOut>
        </ul>
      </div>
    </div>
  );
};

export default Header;
