import React, { useEffect, useState, useRef } from "react";
import "./UserTable.css";
import Table from "./Table";

import axios from "axios";

const Allaplicant = () => {
  const [users, setUsers] = useState([]);

  const ALlapplicant = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios
        .get("http://localhost:8080/api/v1/admin/allApplicant")
        .then((res) => {
          console.log(res.data.data);
          var result = res.data.data;

          if (result.length > 0) {
            setUsers(result);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ALlapplicant();
  }, []);

  return (
    <div>
      <div className="head">
        <h1>All Applicant</h1>
      </div>
      <table>
        <div className="thead">
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Delete-Button</th>
        </div>
        <tbody>
          <Table users={users} />
        </tbody>
      </table>
    </div>
  );
};

export default Allaplicant;
