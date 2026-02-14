
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const HomeLayOut = ({ children }) => {


  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayOut;
