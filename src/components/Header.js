import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import {FaLanguage} from 'react-icons/fa'
import {BsFillMoonFill} from 'react-icons/bs'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div style={{display:"flex", alignItems:"center"}}>
          <GiHamburgerMenu />
          <Link to="/">
            <img src="https://dog55574plkkx.cloudfront.net/storelogo/web/gaana.png" />
          </Link>
          <input placeholder="Search Artists, Songs, Albums" />
        </div>
        <div>
          <FaLanguage />
          <BsFillMoonFill />
          <HiOutlineUserCircle />
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/new-songs">New Songs</Link>
          </li>
          <li>
            <Link to="/old-songs">Old Songs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;