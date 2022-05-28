import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";
import slide1 from "../images/1920x600 (2).jpg";
import slide2 from "../images/1920x600 (3).jpg";
import slide3 from "../images/poster-netflix.png";
import cmlogo from "../images/fastrackk-removebg-preview.png";
import tvlogo from "../images/neetflix-removebg-preview.png";
import logo from "../images/logopakku.png";
import project1 from "../images/fastrack-site.png";
import project2 from "../images/neeetflixx.png";
import smart from "../images/frazzooo-removebg-preview.png"
import sm from "../images/frazzo-site-poster.png";

const Projects = () => {

  return (
    <div>
      <Header />
      <div className="pro-container">
        <div className="slider">
          <Carousel variant="dark">
            <Carousel.Item interval={900}>
              <img className="d-block w-100" src={slide2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={slide1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="box">
          <img src={cmlogo} alt="country music" id="cm" />
          <p>
            An web app featuring with variety of Fastrack watches, backpacks, sunglasses.
          </p>
          <a href="https://graceful-seahorse-a6478e.netlify.app/">
            <div className="btn">View Live Project</div>
          </a>
          <span>-- Feb-2022 to March-2022 -- </span>

          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS and JavaScript</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>
        <img src={project1} alt="project country music" />


        <div className="box">
          <img src={tvlogo} alt="country music" id="tv"/>
          <p >
          A streaming service with variety of award-winning TV shows, movies, anime, documentaries.
          </p>
          <a href="https://creative-duckanoo-5d4807.netlify.app/">
            <div className="btn">View Live Project</div>
          </a>
          <span>-- August-2021 to September-2021 -- </span>

          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS and JavaScript</li>
              <li>React</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>


        <img src="https://st3.depositphotos.com/4168103/16488/i/600/depositphotos_164882046-stock-photo-bangkok-thailand-august-31-2017.jpg" alt="project Travel Vlog" />

        <div className="box">
          <img src={smart} alt="SmartHub" id="sh"/>
          <p >
          An e-commerce web app featuring with variety of Groceries. 
          </p>
          <a href="https://frazzo.netlify.app/">
            <div className="btn">View Live Project</div>
          </a>
          <span>-- March-2022 -- </span>

          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS and JavaScript</li>
              <li>React - Redux</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>

        <img src={sm} alt="The Smart Hub" />


        <div className="box">
          <img src={logo} alt="country music"/>
          <p>A portfolio website with brief details of me and my projects.</p>
          <span>-- September-2021 -- </span>
          <h3>Know more about the project...</h3>

          <div className="texts">
            <div className="rt">Technologies used: </div>
            <div className="lt">
              <li>HTML , CSS(SASS) and JavaScript</li>
              <li>React</li>
              <li>Firebase (Deployment)</li>
              <li>Figma (UI/UX Design)</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
