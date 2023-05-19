import { React, useState, useEffect, useRef } from "react";
import "./AddJob.css";
import axios from "axios";

const AddJob = () => {
  const jobTitle = useRef("");
  const jobDescription = useRef("");
  const salary = useRef("");
  const jobLocation = useRef("");
  const clickHandler = async (e) => {
    const data = {
      jobTitle: jobTitle.current.value,
      jobDescription: jobDescription.current.value,
      salary: salary.current.value,
      jobLocation: jobLocation.current.value,
    };
    console.log(data);

    try {
      axios
        .post("http://localhost:8080/api/v1/admin/addJobs", {
          data: data,
        })
        .then((res) => {
          console.log(res);
          alert("Job Added SuccessFully");
        });
    } catch (error) {
      console.log(error);
      alert("There is something wrong ");
    }
    jobTitle.current.value = "";
    jobDescription.current.value = "";
    salary.current.value = "";
    jobLocation.current.value = "";
  };
  return (
    <div className="addjobbody">
      <div class="addjobwrapper">
        <div class="title">Add Job Form</div>
        <div class="form">
          <div class="inputfield">
            <label>Job Title</label>
            <input ref={jobTitle} type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>Job Location</label>
            <input ref={jobLocation} type="data" class="input" />
          </div>

          {/* <div class="inputfield">
            <label>Opening Date</label>
            <input type="date" class="input" />
          </div> */}
          {/* <div class="inputfield">
            <label>Closing Date</label>
            <input type="date" class="input" />
          </div> */}
          <div class="inputfield">
            <label>Job Description</label>
            <textarea ref={jobDescription} class="textarea"></textarea>
          </div>
          <div class="inputfield">
            <label>Salary</label>
            <input ref={salary} type="number" class="input" />
          </div>
          <div class="inputfield" onClick={clickHandler}>
            <input type="submit" value="Add Job" class="btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
