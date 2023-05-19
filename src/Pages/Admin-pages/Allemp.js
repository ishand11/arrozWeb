import React, { useEffect, useState } from "react";
import "./UserTable.css";
import Table from "./Table";
import axios from "axios";

const Allemp = () => {
  const [users, setUsers] = useState([]);

  const allEmploye = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios.get("http://localhost:8080/api/v1/admin/allEmploye").then((res) => {
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
    allEmploye();
  }, []);

  return (
    <div>
      <div className="head">
        <h1>All Employees</h1>
      </div>
      <table>
        <div className="thead">
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Resume</th>
          <th>Delete-Button</th>
        </div>
        <tbody>
          <div className="Table">
            {users.map((curUser) => {
              const {
                employeeId,
                firstName,
                lastName,
                Email,
                phoneNumber,
                resume,
              } = curUser;
              return (
                <tr>
                  <td>{employeeId}</td>
                  <td>{firstName + lastName}</td>
                  <td>{phoneNumber}</td>
                  <td>{Email}</td>
                  <td>{resume}</td>

                  <td>
                    <button>Delete User</button>
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

export default Allemp;
