import React from "react";
import "./Admin.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
export const Dashboard = () => {
  const [jobNo, setjobNo] = useState("");
  const [userNo, setuserNo] = useState("");
  const [employeeNo, setemployeeNo] = useState("");
  const [applicantNo, setapplicantNo] = useState("");
  const [page, setPage] = useState("");

  const ALlEmployee = async () => {
    console.log("hn hn chal rha hai ");
    axios.get("http://localhost:8080/api/v1/admin/allEmploye").then((res) => {
      // console.log(res.data.data);
      var result = res.data.data.length;
      setemployeeNo(result);
      console.log(employeeNo);
      // const j = res.data.data;
    });
  };
  const ALljobs = async () => {
    console.log("hn hn chal rha hai ");
    axios.get("http://localhost:8080/api/v1/admin/alljobs").then((res) => {
      // console.log(res.data.data);
      var result = res.data.data.length;
      setjobNo(result);
      console.log(employeeNo);
      // const j = res.data.data;
    });
  };
  const ALLusers = async () => {
    console.log("hn hn chal rha hai ");
    axios.get("http://localhost:8080/api/v1/admin/allusers").then((res) => {
      // console.log(res.data.data);
      var result = res.data.data.length;
      setuserNo(result);
      console.log(employeeNo);
      // const j = res.data.data;
    });
  };
  const ALlapplicant = async () => {
    console.log("hn hn chal rha hai ");
    axios.get("http://localhost:8080/api/v1/admin/allApplicant").then((res) => {
      // console.log(res.data.data);
      var result = res.data.data.length;
      setapplicantNo(result);
      console.log(employeeNo);
      // const j = res.data.data;
    });
  };

  const clickHander = (event) => {
    console.log(event);

    setPage(event);

    console.log(page);
  };

  useEffect(() => {
    ALlEmployee();
    ALljobs();
    ALLusers();
    ALlapplicant();
    // setemployeeNo(employeeNo);
  }, []);
  return (
    <div>
      <div class="cards">
        <div class="card">
          <div class="box">
            <h1>{applicantNo}</h1>
            <h3>Applicants</h3>
          </div>
          <div class="icon-case">{/* <img src="students.png" alt="" /> */}</div>
        </div>
        <div class="card">
          <div class="box">
            <h1>{jobNo}</h1>
            <h3>Jobs</h3>
          </div>
          <div class="icon-case">{/* <img src="teachers.png" alt="" /> */}</div>
        </div>
        <div class="card">
          <div class="box">
            <h1>{employeeNo}</h1>
            <h3>Employees</h3>
          </div>
          <div class="icon-case">{/* <img src="schools.png" alt="" /> */}</div>
        </div>
        <div class="card">
          <div class="box">
            <h1>{userNo}</h1>
            <h3>Users</h3>
          </div>
          <div class="icon-case">{/* <img src="income.png" alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};
