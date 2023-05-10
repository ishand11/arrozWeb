import React from "react";
import GlobalStyle from "../globalStyles";
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import AboutUS from "../components/AboutUS";
import { Content } from "../components/Content/Content";
import { heroOne } from "../data/HeroData";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import Nav from "./Nav";

export const Home = () => {
  return (
    <>
      <GlobalStyle />

      <Hero />
      <AboutUS />
      <Content {...heroOne} />

      <Testimonials />
      <Footer />
    </>
  );
};
