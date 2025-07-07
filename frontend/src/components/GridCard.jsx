import React from "react";
import img from "../images/code.png";
import del from "../images/delete.png";

const GridCard = () => {
  return (
    <>
      <div className="gridcard bg-[#141414] w-[300px] h-[180px] rounded-lg shadow-black cursor-pointer hover:bg-[#202020]">
        <div>
          <img className="w-[28%]" src={img} />
          <h3 className="text-[20px] w-[90%] line-clamp-1">My first project</h3>
          <div className="flex justify-between px-[20px]">
            <p className="text-[gray] -mt-1 text-[14px]">
              Created on 9 Jan 2025
            </p>
            <img className="w-[30px] cursor-pointer" src={del} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GridCard;
