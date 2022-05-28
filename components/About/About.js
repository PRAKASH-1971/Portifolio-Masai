import React from "react";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";
import pakku from "../images/pakku.png";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="abt-container">
        <div className="media">
          <a href="https://www.instagram.com/prakashdsouza1/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/prakash-dsouza-50570a228/">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/Prakash83893080">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://github.com/PRAKASH-1971">
            <i className="fab fa-github" />
          </a>
        </div>
        <div className="image">
          <div className="frame"></div>
          <img src={pakku} alt="My pic" />
        </div>
        <div className="text">
          <h1>ABOUT ME</h1>

          <div className="image-last">
            <img src={pakku} alt="My pic" />
          </div>

          <h2>Hi, I’m Prakash Dsouza</h2>
          <p>
            I am a UX / UI designer and developer with hands-on experience in
            building web apps and websites from scratch from initial designs to
            development and all the way to hosting a complete production-ready
            software in a custom-configured server.
          </p>

          <a href="https://docs.google.com/document/d/12tU5sSIWeIwk1tIdorHBP8Q-aK6rp8HchntWTEtx-9s/edit?usp=sharing">
            {/* <div class="main_btn"><a href="/Chat-bot codes/chatbot-codes.html">Download Resume</a></div> */}

            <button className="resume">
              <a href="https://docs.google.com/document/d/12tU5sSIWeIwk1tIdorHBP8Q-aK6rp8HchntWTEtx-9s/edit?usp=sharing">
                Download Resume
              </a>
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
