import React from "react";
import Button from "./Button";
import styled from "./Register.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { BsLockFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className={styled.container}>
        <div className={styled.first}>
          <img
            src="https://assets-global.website-files.com/5f16d69f1760cdba99c3ce6e/60d1f520d2026b6719d613c1_UX%20Designer%20vs%20Front-end%20Developer-p-1600.png"
            alt="img_not_found"
          />
        </div>

        <div className={styled.second}>
          <form>
            <div className={styled.input_field}>
              <label className={styled.label}>
                {" "}
                <AiOutlineMail />{" "}
              </label>
              <input type="email" placeholder="Email" />
            </div>

            <div className={styled.input_field}>
              <label className={styled.label}>
                {" "}
                <FaUserAlt />{" "}
              </label>
              <input type="text" placeholder="Username" />
            </div>

            <div className={styled.input_field}>
              <label className={styled.label}>
                <BsLockFill />{" "}
              </label>
              <input type="password" placeholder="Password" />
            </div>
            <Button name="SIGNUP" />
          </form>
        </div>

        <div className={styled.last}>
          <p>
            Back to{" "}
            <span>
              {" "}
              <Link className={styled.link} to="/login">
                {" "}
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
