import React from "react";
import "./Admin.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Alljobs from "./Alljobs";
import Allaplicant from "./Allaplicant";
import Alluser from "./Alluser";
import Allemp from "./Allemp";
import Addjobs from "./Addjobs";

const Admin = () => {
  const [jobNo, setjobNo] = useState("");
  const [userNo, setuserNo] = useState("");
  const [employeeNo, setemployeeNo] = useState("");
  const [applicantNo, setapplicantNo] = useState("");
  const [page, setPage] = useState("");

  const ALlEmployee = async () => {
    // console.log("hn hn chal rha hai ");
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
    <div className="admin-body">
      <div class="side-menu">
        <div class="brand-name">
          <h1>Super Admin</h1>
        </div>
        <ul>
          <NavLink>
            <li onClick={() => clickHander("Dashboard")}>
              {/* <img src="dashboard (2).png" alt="" /> */}
              &nbsp; <span>Dashboard</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Allemp")}>
              {/* <img src="reading-book (1).png" alt="" /> */}
              &nbsp;<span>All Employees</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Alluser")}>
              {/* <img src="teacher2.png" alt="" /> */}
              &nbsp;<span>All Users</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Allaplicant")}>
              {/* <img src="school.png" alt="" /> */}
              &nbsp;<span>All Applicants</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Alljobs")}>
              {/* <img src="payment.png" alt="" /> */}
              &nbsp;<span>All Jobs</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Addjobs")}>
              {/* <img src="payment.png" alt="" /> */}
              &nbsp;<span>Add Jobs</span>{" "}
            </li>
          </NavLink>
        </ul>
      </div>
      <div class="admincontainer">
        <div class="header">
          <div class="nav">
            <div class="search">
              <input type="text" placeholder="Search.." />
              <button type="submit">
                <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
                  alt=""
                />
              </button>
            </div>
            <div class="user">
              <a href="/" class="btn">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          {page === "Dashboard" ? (
            <Dashboard />
          ) : page === "Alljobs" ? (
            <Alljobs />
          ) : page === "Allaplicant" ? (
            <Allaplicant />
          ) : page === "Alluser" ? (
            <Alluser />
          ) : page === "Allemp" ? (
            <Allemp />
          ) : page === "Addjobs" ? (
            <Addjobs />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
