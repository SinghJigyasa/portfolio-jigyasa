import React from "react";
import MainPage from "./main";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <MainPage />
      <main className="container">
        <p>Hi My name is</p>
        <h1>Jigyasa Singh. </h1>
        <br />
        <h1> I am Frontend and MERN <br/>Stack Developer.</h1>
        <NavLink className='align-item-center' to="https://drive.google.com/file/d/1rYiwTbjljc7m0XnCGPMvcILx2tUVAvCB/view?usp=drive_link">
          <button className="btn m-2 p-2 btn-lg">Resume</button>
        </NavLink>
      </main>
    </div>
  );
};

export default Home;
