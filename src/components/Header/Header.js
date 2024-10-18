import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div className="lineLinks">
        <div className="line"></div>
        
          <nav className="navbarHeader">
            <ul className="navlinks">
              <li className="linkHeader">
                <Link to="/">
                  <span className="nbrHeader">00</span> HOME
                </Link>
              </li>
              <li className="linkHeader">
                <Link to="/destination">
                  <span className="nbrHeader">01</span> DESTINATION
                </Link>
              </li>
              <li className="linkHeader">
                <Link to="/crew">
                  <span className="nbrHeader">02</span> CREW
                </Link>
              </li>
              <li className="linkHeader">
                <Link to="/technology">
                  <span className="nbrHeader">03</span> TECHNOLOGY
                </Link>
              </li>
            </ul>
          </nav>
        
      </div>
    </header>
  );
};

export default Header;
