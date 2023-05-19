import React from "react";
import "./AboutUS.css";

const AboutUS = () => {
  return (
    <div>
      <section id="about-us">
        <div className="main-img">
          <img src="./assets/aboutUs.png" alt="" />
        </div>

        <div className="text">
          <h4>About Us</h4>
          <h1>
            We Gaurantee The Success <br />
            of your Bussiness
          </h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            ipsa alias animi dicta quidem quos fugiat, voluptates officia, porro
            placeat aliquam dolorum! Totam rem, cupiditate quisquam harum sit
            quidem qui?
          </p>
          <div className="last-text">
            <div className="text1">
              <h3>500+</h3>
              <h5>Projects Done</h5>
            </div>
            <div className="text2">
              <h3>20</h3>
              <h5>Happy Clients</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
