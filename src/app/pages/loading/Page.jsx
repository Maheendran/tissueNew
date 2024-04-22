import React from "react";

const Page = () => {
  return (
    <div
      className="w-full h-screen
  relative
bg-[#131110]
"
    >
        <div className="loading_logo flex absolute top-0 bottom-0 left-0 right-0 m-auto w-[10rem] h-[10rem] rounded-full  z-50"></div>
      <div className=" flex absolute top-0 bottom-0 left-0 right-0 m-auto w-[10rem] h-[10rem] rounded-full  z-50">
      <img className=" m-auto  w-[5rem] h-[5rem] " src="/logo.png" alt="" />    
      </div>

    </div>
  );
};

export default Page;
