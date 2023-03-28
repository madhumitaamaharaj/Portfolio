import React from "react";
import styled from "./AboutMe.module.css";
import Navbar from "./Navbar";
const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className={styled.mainContainer}>
        <h1> About Me </h1>
        

        <section className={styled.wrapper}>
          <div className={styled.first}>
            <img
              src="https://media.licdn.com/dms/image/D4D03AQGRAJ-pR1HBzw/profile-displayphoto-shrink_800_800/0/1675424142006?e=2147483647&v=beta&t=i_3VD3nLnYjJ6vofiY-pnl0Lr-VaIvCN_-REEKHtX9M"
              alt=""
            />
            <small>Age : 26</small>
            <small>Location : Kolkata,West Bengal,India</small>
          </div>
          <div>
            <h1>Madhumita Chaudhuri</h1>
            <h2> Front End Developer </h2>
            <p>
              I have completed my B.Tech in CSE and Masters of Public Health from MAKAUT. 
            </p>
            <div className={styled.container}>
              <div className={styled.skill}>
                <h4>What are my Skills ? </h4>
                <ol className={styled.list}>
                  <li>HTML 5</li>
                  <li>Css 3</li>
                  <li>Javascript</li>
                  <li>React Js</li>
                </ol>
              </div>
              <div className={styled.skill}>
                <h4>What are my Hobbies ? </h4>
                <ol className={styled.list}>
                  <li>Dance</li>
                  <li>Fashion Illustration</li>
                  <li>Travelling</li>
                  <li>watching old Cricket Matches</li>
                </ol>
              </div>
              <div className={styled.skill}>
                <h4>What are my Learning ? </h4>
                <ol className={styled.list}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT JS</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
