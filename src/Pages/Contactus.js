import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znx2ked",
        "template_h9v5jqm",
        form.current,
        "TonF8GBb9cNnafMih"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container  contactus">
      <div className="ApplyForm m-4">
        <div className="container">
          <div className=" ApplyForm-header m-5">
            <h1
              style={{ color: "#0e385f" }}
              className="text-dark  p-2 text-center"
            >
              Arroz Solutions
            </h1>
            <h6
              style={{ color: "#0e385f" }}
              className="text-dark  p-2 text-center"
            >
              IT Services & IT Consulting
            </h6>
            <h2
              style={{ color: "#0e385f" }}
              className="text-dark  p-2 text-center"
            >
              Contact Us
            </h2>
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className=" form">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              autoComplete="off"
              name="name"
              required
              // // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // pattern="(?=.*\s)(?=.*[a-z])(?=.*[A-Z]).{5,}"
              minlength="5"
              id="Name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              autoComplete="off"
              name="email"
              id="email"
              // pattern=".{13,}"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="Subject"
              autoComplete="off"
              id="Subject"
              // pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              cols="30"
              rows="8"
              placeholder="message"
              name="message"
              autoComplete="off"
              id="message"
              // pattern="(?=.*[a-z])(?=.*[A-Z]).{25,}"
              minlength="25"
              required
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className=" text-white btn btn-primary"
              value="Send Message"
            ></input>
          </div>
        </div>
        <br></br>
      </form>
    </div>
  );
};

export default Contactus;
