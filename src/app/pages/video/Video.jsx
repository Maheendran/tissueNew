"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaPlay } from "react-icons/fa";
// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};


const Video = () => {

  
const videoHead = useAnimation();
const { ref, inView } = useInView({
  threshold: 0.1,
});
const [state, setState] = useState(true);
useEffect(() => {
  setState(true);
  
  // dotSvg
  if (inView) {
    
    videoHead.start({
      transform: "translateX(0rem)",
      transition: {
        duration: 1.5,
      },
    });
  }
  if (!inView) {
    videoHead.start({
      transform: "translateX(10rem)",
      scale: "0rem",
      transition: {
        duration: 1.3,
      },
    });
  }
}, [inView]);

  const [videoOpen, setvideoOpen] = useState(false);
  const videoRef = useRef();
  let domNode = useClickOutside(() => {
    setvideoOpen(false);
  });

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
   <>
    <div className="w-full h-[15vh] " ></div>
        <section ref={ref} className=" h-[100vh]    relative overflow-hidden ">
      <motion.h1 animate={videoHead} className="  w-[60%] sm:leading-[2.6rem] sm:w-[60%] md:w-[70%] text-[1.9rem] sm:text-[2.5rem] text-3xl md:text-3xl font-bold  text-gray-600     ms-auto text-end block mb-4   text-primary  px-4  sm:px-20">
    
      Experience Our Story in Motion
      </motion.h1>

      <div ref={domNode} className="container m-auto ">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full  m-auto lg:w-10/12 ">
            <div
              className="mx-auto  mt-[2rem]  relative z-20 w-[88%] sm:w-[85%] h-[300px]
          overflow-hidden   rounded-[20px] md:h-[65vh] "
            >
              <div className=" z-10 absolute m-auto right-0 bottom-0 left-0 top-0 h-full w-full  ">
                <video
                  ref={videoRef}
                  initial={{ opacity: 0 }}
                  src="/video2.mp4"
                  loop
                  muted
                  className=" w-full mx-auto h-full video-banner  object-cover object-center"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    scale: 1.3,
                  }}
                ></video>
              </div>


              <div
                onClick={handleVideoToggle}
                className={`cursor-pointer absolute border left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-transparent`}
              >
                {!videoPlaying && (
                  <div className="absolute z-20 flex p-4  items-center justify-center rounded-full text-white   bg-transparent play_btn h-[6rem] w-[6rem]">
                    <span className="absolute  flex  right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-green-300 bg-opacity-20 delay-300 duration-1000"></span>
                    <FaPlay size={"3rem"} className="m-auto  bg-transparent"  />
                  </div>
                )}
              </div>
            </div>

            {/* ///// */}
            <div>
              <span className="  absolute left-0 sm:left-[-3.5rem] top-0">
                <svg
                  className="w-[10rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
         
                  viewBox="0 0 50 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="47.7119"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 47.7119 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="61.6385"
                    r="1.74121"
                    transform="rotate(180 47.7119 61.6385)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="46.3163"
                    r="1.74121"
                    transform="rotate(180 47.7119 46.3163)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="16.7159"
                    r="1.74121"
                    transform="rotate(180 47.7119 16.7159)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="31.3421"
                    r="1.74121"
                    transform="rotate(180 47.7119 31.3421)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="1.74121"
                    r="1.74121"
                    transform="rotate(180 47.7119 1.74121)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 32.3916 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3877"
                    cy="61.6384"
                    r="1.74121"
                    transform="rotate(180 32.3877 61.6384)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="46.3162"
                    r="1.74121"
                    transform="rotate(180 32.3916 46.3162)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="16.7161"
                    r="1.74121"
                    transform="rotate(180 32.3916 16.7161)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3877"
                    cy="31.342"
                    r="1.74121"
                    transform="rotate(180 32.3877 31.342)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="1.74145"
                    r="1.74121"
                    transform="rotate(180 32.3916 1.74145)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 17.0674 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="61.6384"
                    r="1.74121"
                    transform="rotate(180 17.0674 61.6384)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="46.3162"
                    r="1.74121"
                    transform="rotate(180 17.0674 46.3162)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="16.7161"
                    r="1.74121"
                    transform="rotate(180 17.0674 16.7161)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="31.342"
                    r="1.74121"
                    transform="rotate(180 17.0674 31.342)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="1.74145"
                    r="1.74121"
                    transform="rotate(180 17.0674 1.74145)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 1.74316 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="61.6384"
                    r="1.74121"
                    transform="rotate(180 1.74316 61.6384)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="46.3162"
                    r="1.74121"
                    transform="rotate(180 1.74316 46.3162)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="16.7161"
                    r="1.74121"
                    transform="rotate(180 1.74316 16.7161)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="31.342"
                    r="1.74121"
                    transform="rotate(180 1.74316 31.342)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="1.74145"
                    r="1.74121"
                    transform="rotate(180 1.74316 1.74145)"
                    fill="#867f81"
                  />
                </svg>
              </span>
              <span className="absolute  sm:bottom-[2rem] right-[-5vw] z-10">
                <svg
                  className="w-[10rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
                  // width="50"
                  // height="79"
                  viewBox="0 0 50 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="47.7119"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 47.7119 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="61.6385"
                    r="1.74121"
                    transform="rotate(180 47.7119 61.6385)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="46.3163"
                    r="1.74121"
                    transform="rotate(180 47.7119 46.3163)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="16.7159"
                    r="1.74121"
                    transform="rotate(180 47.7119 16.7159)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="31.3421"
                    r="1.74121"
                    transform="rotate(180 47.7119 31.3421)"
                    fill="#867f81"
                  />
                  <circle
                    cx="47.7119"
                    cy="1.74121"
                    r="1.74121"
                    transform="rotate(180 47.7119 1.74121)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 32.3916 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3877"
                    cy="61.6384"
                    r="1.74121"
                    transform="rotate(180 32.3877 61.6384)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="46.3162"
                    r="1.74121"
                    transform="rotate(180 32.3916 46.3162)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="16.7161"
                    r="1.74121"
                    transform="rotate(180 32.3916 16.7161)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3877"
                    cy="31.342"
                    r="1.74121"
                    transform="rotate(180 32.3877 31.342)"
                    fill="#867f81"
                  />
                  <circle
                    cx="32.3916"
                    cy="1.74145"
                    r="1.74121"
                    transform="rotate(180 32.3916 1.74145)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 17.0674 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="61.6384"
                    r="1.74121"
                    transform="rotate(180 17.0674 61.6384)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="46.3162"
                    r="1.74121"
                    transform="rotate(180 17.0674 46.3162)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="16.7161"
                    r="1.74121"
                    transform="rotate(180 17.0674 16.7161)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="31.342"
                    r="1.74121"
                    transform="rotate(180 17.0674 31.342)"
                    fill="#867f81"
                  />
                  <circle
                    cx="17.0674"
                    cy="1.74145"
                    r="1.74121"
                    transform="rotate(180 17.0674 1.74145)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="76.9617"
                    r="1.74121"
                    transform="rotate(180 1.74316 76.9617)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="61.6384"
                    r="1.74121"
                    transform="rotate(180 1.74316 61.6384)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="46.3162"
                    r="1.74121"
                    transform="rotate(180 1.74316 46.3162)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="16.7161"
                    r="1.74121"
                    transform="rotate(180 1.74316 16.7161)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="31.342"
                    r="1.74121"
                    transform="rotate(180 1.74316 31.342)"
                    fill="#867f81"
                  />
                  <circle
                    cx="1.74316"
                    cy="1.74145"
                    r="1.74121"
                    transform="rotate(180 1.74316 1.74145)"
                    fill="#867f81"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>



  );
};

export default Video;
