"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Page = () => {
  const headingheadTop = useAnimation();
  const headingheadBottom = useAnimation();
  const headingheadMiddle = useAnimation();
  const headingCalloutOne = useAnimation();
  const videoControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(true);
    if (inView) {
      headingheadTop.start({
        y: "0rem",
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      headingheadTop.start({ y: "-100vw" });
    }

    // ===================
    if (inView) {
      headingheadBottom.start({
        y: "0rem",
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      headingheadBottom.start({ y: "100vh" });
    }

    // =============================
    if (inView) {
      headingheadMiddle.start({
        x: "0vw",
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      headingheadMiddle.start({ x: "-100vw" });
    }
    // ===========================

    if (inView) {
      headingCalloutOne.start({
        y: "0vh",
        scale: 1,
        transition: {
          type: "spring",
          duration: 7,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      headingCalloutOne.start({ y: "-50rem", scale: 0 });
    }
    //video controll
    if (inView) {
      videoControls.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      // Play the video here if needed
    } else {
      videoControls.start({ opacity: 0 });
      // Pause or stop the video here if needed
    }
  }, [inView]);

  return (
    <>
   {/* */}
    <div className="mt-[8vh] md:mt-[0vh] relative w-full h-fit p-4 bg-[#131110]   flex flex-col md:flex-row">
    

      <div className="relative w-full md:h-screen  flex flex-col  justify-center text-start leading-[3.3rem] sm:leading-[5rem]">
        <div className="banner_shadow w-[4rem] h-[7rem] sm:w-[10rem] sm:h-[16rem] top-[5%] right-[10%] sm:top-[14%]  rounded-full "></div>

        <div className="banner_shadow  w-[4rem] h-[6rem] sm:w-[6rem] sm:h-[10rem] top-[50%] left-[9%]  sm:left-[15%] rotate-90 sm:top-[60%]  rounded-full "></div>

        <div className=" z-50 w-[80%] sm:w-[70%] md:w-[85%]  xl:w-[75%]     min-h-[35vh] sm:h-fit    m-auto  ">
          <h1 className="text-wrap text-shadow text-white text-[3.2rem] sm:text-[3.9rem] lg:text-[4.8rem] font-bold">
            Wrap Your World in Comfort..!
          </h1>
          <div className="h-fit w-fit  text-justify mt-2 ">
            <p className="text-gray-400 text-[0.9rem] leading-[1.1rem] text-justify ">
              Easily discover a range of tissue paper choices that fit your
              needs. Say goodbye to the hassle of finding the right one, as
              simple as picking your favorite.
            </p>
          </div>


        </div>
      </div>

      <div className="relative  w-full h-[62vh] mt-10 sm:mt-0 sm:h-[88vh]  md:h-screen">
        <div className=" overflow-hidden absolute top-0 bottom-0 md:bottom-[-10%] left-0 right-0  m-auto 
         sm:w-[60%]  md:w-[85%]  lg:w-[75%] xl:w-[65%]    h-[60vh] sm:h-[80vh] rounded-t-[30rem] border-[10px] border-gray-300">
        
        <img className="w-full h-full" src="./tissue1.jpg" alt="" />
        
      
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
