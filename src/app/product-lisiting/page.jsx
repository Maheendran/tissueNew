import React from "react";
import Navbar from "../component/Navbar";
import MianFooter from '@/app/pages/Footer/Page'
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-[15vh] mb-2"></div>

      <p className="text-[3rem] text-center mb-[2rem] font-bold font-san text-neutral-600">Show casing Products</p>

      <div className="w-[60%] mx-auto h-fit   flex flex-wrap gap-3 justify-around mb-[3rem] ">
        <Link
          className="w-[47%] h-[55vh]  border-2 rounded-3xl"
          href={"/product-detail/facial-tisssue"}
        >
          <div className="w-[80%] mx-auto  h-[85%] relative ">
            <img
              className="mx-auto w-full h-full  rounded-3xl"
              src="https://i5.walmartimages.com/asr/e1fee03c-81a6-43e7-b9ce-279fbdcc60b6_1.1b34a33ced7720220e629cac6222d1ae.jpeg"
              alt=""
            />
          </div>
          <div className="w-fit h-fit flex  mx-auto">
            <p className="text-[2rem]  bg-transparent text-center  mx-auto ">
              Facial tissue
            </p>
          </div>
        </Link>
    
        <Link
          className="w-[47%] h-[55vh]  border-2 rounded-3xl"
          href={"/product-detail/facial-tisssue"}
        >
          <div className="w-[80%] mx-auto  h-[85%] relative ">
            <img
              className="mx-auto w-full h-full  rounded-3xl"
              src="https://m.media-amazon.com/images/I/81+sWKCtJ8L.jpg"

              alt=""
            />
          </div>
          <div className="w-fit h-fit flex  mx-auto">
            <p className="text-[2rem]  bg-transparent text-center  mx-auto ">
              Facial tissue
            </p>
          </div>
        </Link>
        {/* ============= */}
      
    
        <Link
          className="w-[47%] h-[55vh]  border-2 rounded-3xl"
          href={"/product-detail/facial-tisssue"}
        >
          <div className="w-[80%] mx-auto  h-[85%] relative ">
            <img
              className="mx-auto w-full h-full  rounded-3xl"
              src="https://m.media-amazon.com/images/I/81+sWKCtJ8L.jpg"

              alt=""
            />
          </div>
          <div className="w-fit h-fit flex  mx-auto">
            <p className="text-[2rem]  bg-transparent text-center  mx-auto ">
              Facial tissue
            </p>
          </div>
        </Link>
        <Link
          className="w-[47%] h-[55vh]  border-2 rounded-3xl"
          href={"/product-detail/facial-tisssue"}
        >
          <div className="w-[80%] mx-auto  h-[85%] relative ">
            <img
              className="mx-auto w-full h-full  rounded-3xl"
              src="https://i5.walmartimages.com/asr/e1fee03c-81a6-43e7-b9ce-279fbdcc60b6_1.1b34a33ced7720220e629cac6222d1ae.jpeg"
              alt=""
            />
          </div>
          <div className="w-fit h-fit flex  mx-auto">
            <p className="text-[2rem]  bg-transparent text-center  mx-auto ">
              Facial tissue
            </p>
          </div>
        </Link>
      </div>

      <MianFooter />
    </>
  );
};

export default page;
