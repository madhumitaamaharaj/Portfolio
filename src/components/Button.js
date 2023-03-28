import React from "react";
import styled from "./Button.module.css";
const Button = ({ name, btnclick }) => {
  return (
    <div>
      <button className={styled.button} onClick={btnclick}>
        {name}
      </button>
    </div>
  );
};
export default Button;
