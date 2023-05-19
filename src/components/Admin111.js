import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
const Admin = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/admin/alluser">alluser</Link>
          <Link to="/admin/allemployee">employee</Link>
          <Link to="/admin/allapplicant">applicant</Link>

          <Routes>
            <Route to="/admin/alluser">all users with routes</Route>
          </Routes>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
