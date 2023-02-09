import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar">
      <h1>SkateBoard</h1>
      <hr />
      <div className="menu">
        <h4>Menu</h4>
        <button className="samll_s">S</button>
        <ul>
          <li>
            <Link className="navItem"  to="/">
              <button className="button">
                <i class="fa-solid fa-house"></i>
              </button>
              <p className="nav-links">Discover</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/trending">
              <button to="/trending" className="button">
                <i class="fa-solid fa-fire-flame-curved"></i>
              </button>
              <p className="nav-links">Trending</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/streaming">
              <button className="button">
                <i class="fa-solid fa-tv"></i>
              </button>
              <p className="nav-links">Streaming</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/playlist">
              <button className="button">
                <i class="fa-solid fa-file-arrow-down"></i>
              </button>
              <p className="nav-links">Playlist</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem"  to="/bookmark">
              <button className="button">
                <i class="fa-solid fa-sim-card"></i>
              </button>
              <p className="nav-links">Bookmark</p>
              
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="category">
        <h4>category</h4>
        <ul>
          <li>
            <Link className="navItem"  to="/livestream">
              <button className="button">
                <i class="fa-solid fa-tv"></i>
              </button>
              <p className="nav-links">Livestream</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/competition">
              <button className="button">
                <i class="fa-brands fa-slack"></i>
              </button>
              <p className="nav-links" >Competition</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/tutorial">
              <button className="button">
                <i class="fa-solid fa-film"></i>
              </button>
              <p className="nav-links">Tutorial</p>
              
            </Link>
          </li>
          <li>
            <Link className="navItem"  to="/community">
              <button className="button">
                <i class="fa-solid fa-users"></i>
              </button>
              <p className="nav-links">Community</p>
              
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
