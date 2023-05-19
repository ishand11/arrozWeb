import React, { useEffect, useState } from "react";
import "./UserTable.css";
import Table from "./Table";
// const API = "https://jsonplaceholder.typicode.com/users";
import axios from "axios";
const Alluser = () => {
  const [users, setUsers] = useState([]);

  const allusers = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios.get("http://localhost:8080/api/v1/admin/allusers").then((res) => {
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
    allusers();
  }, []);

  return (
    <div className="maincontainer">
      <div className="head">
        <h1>All Users</h1>
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

export default Alluser;
