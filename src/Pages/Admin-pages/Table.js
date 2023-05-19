import React from "react";
import "./UserTable.css";

const Table = ({ users }) => {
  return (
    <div className="Table">
      {users.map((curUser) => {
        const { _id, name, email, phone } = curUser;
        return (
          <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>

            <td>
              <button>Delete User</button>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default Table;
