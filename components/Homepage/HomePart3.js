import React from "react";
import cmlogo from "../images/fastrackk-removebg-preview.png";
import tvlogo from "../images/neetflix-removebg-preview.png";
import Smart from "../images/frazzooo-removebg-preview.png"

const HomePart3 = () => {
  return (
    <div className="h3-container">
      <h1>MY WORKS</h1>
      <div className="box">
        <div className="main">
          <img src={cmlogo} alt="country music logo" />
          <p>
          An web app featuring with variety of Fastrack watches, backpacks, sunglasses.
          </p>
        </div>
        <div className="btn">
          <a href="/projects#cm">
            <button>Info</button>
          </a>
          <a href="https://graceful-seahorse-a6478e.netlify.app/">
            <button>View Project</button>
          </a>
        </div>
      </div>
      <hr />
      <br />
      <div className="box">
        <div className="main">
          <img src={tvlogo} alt="travel vlog logo" />
          <p>
          A streaming service with variety of award-winning TV shows, movies, anime, documentaries.
          </p>
        </div>
        <div className="btn">
          <a href="/projects#tv">
            <button>Info</button>
          </a>
          <a href="https://creative-duckanoo-5d4807.netlify.app/">
            <button>View Project</button>
          </a>
        </div>
      </div>
      <hr />
      <br />
      <div className="box">
        <div className="main">
          <img src={Smart} alt="The Smart Hub logo" />
          <p>
          An e-commerce web app featuring with variety of Groceries.           </p>
        </div>
        <div className="btn">
          <a href="/projects#tv">
            <button>Info</button>
          </a>
          <a href="https://frazzo.netlify.app/">
            <button>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePart3;
