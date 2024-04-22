import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-[15vh] "></div>
      <div className="w-full h-fit bg-red-300 flex flex-wrap">
      
        <Link
	className="w-1/2 h-[80vh]  gap-3 p-3 "
    href={"/product-detail/facial-tisssue"}
                >
  <div  className="w-full h-full relative">
          <img
          className="mx-auto w-full h-full rounded-lg"
            src="/tissue.jpg"
            alt=""
          />
          <p className="text-[2rem] bg-transparent text-center mt-3 absolute bottom-[1rem] left-[1rem] ">Facial tissue</p>
        </div>

                </Link>
{/* /================ */}
<Link
	className="w-1/2 h-[80vh]  gap-3 p-3 "
    href={"/product-detail/facial-tisssue"}
                >
  <div  className="w-full h-full relative">
          <img
          className="mx-auto w-full h-full rounded-lg"
            src="/tissue.jpg"
            alt=""
          />
          <p className="text-[2rem] bg-transparent text-center mt-3 absolute bottom-[1rem] left-[1rem] ">Facial tissue</p>
        </div>

                </Link>
                {/* ================= */}
                <Link
	className="w-1/2 h-[80vh]  gap-3 p-3 "
    href={"/product-detail/facial-tisssue"}
                >
  <div  className="w-full h-full relative">
          <img
          className="mx-auto w-full h-full rounded-lg"
            src="/tissue.jpg"
            alt=""
          />
          <p className="text-[2rem] bg-transparent text-center mt-3 absolute bottom-[1rem] left-[1rem] ">Facial tissue</p>
        </div>

                </Link>
                {/* ================ */}
                <Link
	className="w-1/2 h-[80vh]  gap-3 p-3 "
    href={"/product-detail/facial-tisssue"}
                >
  <div  className="w-full h-full relative">
          <img
          className="mx-auto w-full h-full rounded-lg"
            src="/tissue.jpg"
            alt=""
          />
          <p className="text-[2rem] bg-transparent text-center mt-3 absolute bottom-[1rem] left-[1rem] ">Facial tissue</p>
        </div>

                </Link>
      </div>


      <Footer />
    </>
  );
};

export default page;
