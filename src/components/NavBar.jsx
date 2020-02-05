import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = (props) => {
  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleMoveOutside);
    document.addEventListener("keydown", handleMoveOutside);
    return () => {
      document.removeEventListener("mousedown", handleMoveOutside);
      document.removeEventListener("keydown", handleMoveOutside);
    };
  }, []);
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
    <nav id="navbar" className="navbar is-mobile is-spaced is-clearfix" ref={node}>
      <div className="navbar-brand">
        <div className="navbar-item" id="brand">
          <strong>
            <Link className="link" to="/">
              Greenfield
            </Link>
          </strong>
        </div>
        <div className="navbar-burger nav-toggle" onClick={toggleNavBar}>
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
            <Link className="link" to="/example-list">
              Example List
            </Link>
          </div>
          <div className="navbar-item is-hoverable" onClick={toggleNavBar}>
            <Link className="link" to="/example-form">
              Example Form
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
