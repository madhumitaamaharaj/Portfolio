import React from "react";
import styled from "./Navbar.module.css";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className={styled.container}>
        <h3>UI/UX DESIGN</h3>

        <nav className={styled.list}>
          <Link className={styled.navlink} to="/">
            HOME
          </Link>

          <Link className={styled.navlink} to="/about">
            ABOUT ME
          </Link>

          <Link className={styled.navlink} to="/login">
            LOGIN
          </Link>
        </nav>

        <h2>
          <FaUserCircle />
        </h2>
      </div>
    </>
  );
};
export default Navbar;
