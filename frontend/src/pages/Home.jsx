import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi, Chinmayee</h2>
        <div className="flex items-center gap-x-1">
          <div className="inputBox mt-[30px] lw-[350px]">
            <input type="text" placeholder="Search now..."/>
          </div>
          <button className="btnBlue rounded-[5px]">+</button>
        </div>
      </div>
    </>
  );
};

export default Home;
