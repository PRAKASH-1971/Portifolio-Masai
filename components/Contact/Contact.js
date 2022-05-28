import React, { useState } from "react";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const Contact = () => {
  const [text, setText] = useState("Click To Copy");
  function copyMail() {
    navigator.clipboard.writeText("prakashdsouza077@gmail.com");
    setText("Text Copied");
    setTimeout(() => {
      setText("Click To Copy");
    }, 2000);
  }
  function copyPhone() {
    navigator.clipboard.writeText("+916360243612");
    setText("Text Copied");
    setTimeout(() => {
      setText("Click To Copy");
    }, 2000);
  }
  return (
    <div>
      <Header />
      <div className="contact">
        <h1>INTERESTED IN HIRING ME FOR YOUR NEXT PROJECT ? </h1>

        <div className="contact-card">
          <h1>MAIL ME</h1>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}
          >
            <span onClick={() => copyMail()}>prakashdsouza077@gmail.com</span>
          </OverlayTrigger>
        </div>
        <div className="contact-card">
          <h1>CALL ME</h1>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}
          >
            <span onClick={() => copyPhone()}>+91 6360243612 </span>
          </OverlayTrigger>
        </div>
        <div className="contact-card">
          <h1>ADDRESS</h1>
          <p>
            Dsouza Compound Near Ramasamudra <br /> Karkala - 574104 <br />{" "}
            Udupi <br /> Karnataka, India
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
