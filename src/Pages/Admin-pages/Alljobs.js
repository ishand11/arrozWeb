import React, { useEffect, useState } from "react";
import "./UserTable.css";
import Table from "./Table";
import axios from "axios";

const Alljobs = () => {
  const [users, setUsers] = useState([]);

  const alljobs = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios.get("http://localhost:8080/api/v1/admin/alljobs").then((res) => {
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
    alljobs();
  }, []);

  return (
    <div>
      <div className="head">
        <h1>All jobs</h1>
      </div>
      <table>
        <div className="thead">
          <th>Job-Id</th>
          <th>Job-Title</th>
          <th>Description</th>
          <th>Salary</th>
          <th>Delete-Button</th>
        </div>
        <tbody>
          <div className="Table">
            {users.map((curUser) => {
              const { _id, jobTitle, jobDescription, salary } = curUser;
              return (
                <tr>
                  <td>{_id}</td>
                  <td>{jobTitle}</td>
                  <td>{jobDescription}</td>
                  <td>{salary}</td>

                  <td>
                    <button>Delete Job</button>
                  </td>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Alljobs;
