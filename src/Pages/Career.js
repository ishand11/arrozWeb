import React, { useRef, useState } from "react";
import "./Career.css";
import axios from "axios";
import Nav from "././../Pages/Nav";

const Career = () => {
  const inputref = useRef(null);
  const x = 1;
  const [jobTitle, setjobTitle] = useState("");

  const [job, setjob] = useState(null);
  console.log(job);

  const submitHandeler = (e) => {
    // console.log(inputref.current.value);
    e.preventDefault();
    const x = inputref.current.value;
    setjobTitle(x);
    axios
      .get("http://localhost:8080/api/v1/carrer/Searchjobs", {
        params: {
          jobTitle: x,
        },
      })
      .then((res) => {
        // console.log(res.data.message);
        // const j = res.data.data;
        setjob(res.data.data);
      });
  };
  // console.log(Skey);

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div id="search-container">
          <input
            ref={inputref}
            type="search"
            id="search-input"
            placeholder="Search Here"
          />
          <button id="search" onClick={submitHandeler}>
            Search
          </button>
        </div>
        <div id="buttons">
          <button className="button-value">All</button>
          <button className="button-value">Frontend</button>
          <button className="button-value">Backend</button>
          <button className="button-value">FullStack</button>
          <button className="button-value">Management</button>
        </div>
        {job ? (
          <>
            <div id="testimonials">
              <div className="inner">
                <h1>Results</h1>
                <div className="border"></div>

                <div className="row2">
                  <div className="col">
                    <div className="testimonial">
                      <img
                        src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                        alt=""
                      />
                      <div className="name">
                        <h3>{job.jobTitle} </h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsum ratione reprehenderit maiores, quia autem
                        fuga atque? Deleniti magni illo hic repudiandae laborum
                        nesciunt sunt?
                      </p>
                      <div className="apply-button">
                        <button>Apply Now </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Career;
