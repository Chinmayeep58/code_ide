import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";

const Home = () => {
  const [isGridLayout, setisGridLayout]=useState(true)
  return (
    <>
      <Navbar />
      <div className="search flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi, Chinmayee</h2>
        <div className="flex items-center gap-x-1">
          <div className="inputBox mt-[30px] lw-[350px]">
            <input type="text" placeholder="Search now..."/>
          </div>
          <button className="btnBlue rounded-[5px]">+</button>
        </div>
      </div>

      <div className="cards">
        {
          isGridLayout?
          <div className="grid"><GridCard/>
          <GridCard/>
          <GridCard/></div>: <div className="list"><ListCard/>
          <ListCard/>
          <ListCard/></div>
        }
      </div>
    </>
  );
};

export default Home;
