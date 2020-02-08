import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = (props) => {
  const node = useRef();
  const [search, setSearch] = useState();
  useEffect(() => {
    document.addEventListener("mousedown", handleMoveOutside);
    document.addEventListener("keydown", handleMoveOutside);
    return () => {
      document.removeEventListener("mousedown", handleMoveOutside);
      document.removeEventListener("keydown", handleMoveOutside);
    };
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const toggleNavBar = () => {
    let navToggle = document.querySelector(".nav-toggle");
    let navbarMenu = document.querySelector(".navbar-menu");
    navToggle.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  };
  const handleMoveOutside = (event) => {
    if (node.current.contains(event.target)) {
      return;
    } else {
      let navToggle = document.querySelector(".nav-toggle");
      let navbarMenu = document.querySelector(".navbar-menu");
      navToggle.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    }
  };
  return (
    <header>
      <nav
        id="navbar"
        className="navbar is-mobile is-spaced is-clearfix is-light"
        ref={node}
      >
        <div className="navbar-brand">
          <div className="navbar-item" id="brand">
            <strong>
              <Link className="link" to="/">
                Logo
              </Link>
            </strong>
          </div>
          <div className="navbar-burger nav-toggle" id="burger" onClick={toggleNavBar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item is-hoverable" onClick={toggleNavBar}>
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="navbar-item is-hoverable" onClick={toggleNavBar}>
              <Link className="link" to="/overview">
                Overview
              </Link>
            </div>
            <div className="navbar-item is-hoverable" onClick={toggleNavBar}>
              <Link className="link" to="/questions-and-answers">
                Q & A
              </Link>
            </div>
            <div className="navbar-item is-hoverable" onClick={toggleNavBar}>
              <Link className="link" to="/ratings-and-reviews">
                Ratings and Reviews
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="field" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
              <p className="control">
                <input
                  id="searchbar"
                  className="input is-rounded"
                  type="text"
                  placeholder="Search"
                  name="search"
                  value={search}
                  onChange={handleChange}
                />
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
