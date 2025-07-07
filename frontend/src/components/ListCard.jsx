import React from "react";
import img from "../images/code.png";
import del from '../images/delete.png'

const ListCard = () => {
  return (
    <>
      <div className="listcard mb-2 flex items-center justify-between w-full px-7 bg-[#141414] cursor-pointer rounded-lg  hover:bg-[#202020]">
        <div className="flex items-center gap-2">
          <img className="w-[15%]" src={img} />
          <div>
            <h3 className="text-[20px]">My first project</h3>
            <p className="text-[gray] -mt-1 text-[14px]">Created on 9 Jan 2025</p>
          </div>
        </div>
        <div>
            <img className="w-[35%] cursor-pointer" src={del}></img>
        </div>
      </div>
    </>
  );
};

export default ListCard;
