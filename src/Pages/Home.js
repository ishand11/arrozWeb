import React, { useEffect } from "react";
import GlobalStyle from "../globalStyles";
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import AboutUS from "../components/AboutUS";
import { Content } from "../components/Content/Content";
import { heroOne } from "../data/HeroData";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import Nav from "./Nav";
import axios from "axios";

import UserTable from "./Admin-pages/UserTable";

export const Home = () => {
  //login user data

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/applicant/getApplicantData",
        {},
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* <Nav />
      <Hero />
      <AboutUS />
      <Content {...heroOne} />
      <Testimonials />
      <Footer /> */}
      <UserTable />
    </>
  );
};
