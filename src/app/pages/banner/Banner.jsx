"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Carousel from "@/app/component/Carousel";
const Banner = () => {
  const headingheadTop = useAnimation();
  const headingheadBottom = useAnimation();
  const headingheadMiddle = useAnimation();
  const headingCalloutOne = useAnimation();
  const videoControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [state, setState] = useState(true);
  // useEffect(() => {
  //   setState(true);
  //   if (inView) {
  //     headingheadTop.start({
  //       y: "0rem",
  //       transition: {
  //         type: "spring",
  //         duration: 4,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     headingheadTop.start({ y: "-100vw" });
  //   }

  //   // ===================
  //   if (inView) {
  //     headingheadBottom.start({
  //       y: "0rem",
  //       transition: {
  //         type: "spring",
  //         duration: 4,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     headingheadBottom.start({ y: "100vh" });
  //   }

  //   // =============================
  //   if (inView) {
  //     headingheadMiddle.start({
  //       x: "0vw",
  //       transition: {
  //         type: "spring",
  //         duration: 5,
  //         bounce: 0.2,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     headingheadMiddle.start({ x: "-100vw" });
  //   }
  //   // ===========================

  //   if (inView) {
  //     headingCalloutOne.start({
  //       y: "0vh",
  //       scale: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 7,
  //         bounce: 0.4,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     headingCalloutOne.start({ y: "-50rem", scale: 0 });
  //   }
  //   //video controll
  //   if (inView) {
  //     videoControls.start({
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //     // Play the video here if needed
  //   } else {
  //     videoControls.start({ opacity: 0 });
  //     // Pause or stop the video here if needed
  //   }
  // }, [inView]);

  return (
    <>
      <div className="w-full h-fit ">
        <div className="w-full h-[15vh] " ref={ref}></div>
        <div className="   w-full h-[80vh] bg-red-400 ">
          <Carousel />
        </div>
        {/* /second page/ */}
        <div className="w-full flex p-2">
          <Link className="ms-auto" href={"/product-lisiting"}>
            <p> See all</p>
          </Link>
        </div>
        <div className="w-full h-[70vh]  flex gap-3 p-3 ">
          <Link
            className=" w-1/3 border h-full  overflow-hidden rounded-lg"
            href={"/product-details/facial-tissue"}
          >
            <div className="showcase">
              <img
                src="https://i5.walmartimages.com/asr/e1fee03c-81a6-43e7-b9ce-279fbdcc60b6_1.1b34a33ced7720220e629cac6222d1ae.jpeg"
                alt=""
              />
              <p className="text-center font-bold text-[2rem] text-neutral-500">
                Facial Tissue
              </p>
            </div>
          </Link>

          <Link
            className=" w-1/3 border h-full  overflow-hidden rounded-lg"
            href={"/product-details/facial-tissue"}
          >
            <div className="showcase">
              <img
                src="https://m.media-amazon.com/images/I/81+sWKCtJ8L.jpg"
                alt=""
              />
              <p className="text-center font-bold text-[2rem] text-neutral-500">
                Facial Tissue
              </p>
            </div>
          </Link>

          <Link
            className=" w-1/3 border h-full  overflow-hidden rounded-lg"
            href={"/product-details/facial-tissue"}
          >
            <div className="showcase">
              <img
                src="https://i5.walmartimages.com/asr/e1fee03c-81a6-43e7-b9ce-279fbdcc60b6_1.1b34a33ced7720220e629cac6222d1ae.jpeg"
                alt=""
              />
              <p className="text-center font-bold text-[2rem] text-neutral-500">
                Facial Tissue
              </p>
            </div>
          </Link>

          <Link
            className=" w-1/3 border h-full  overflow-hidden rounded-lg"
            href={"/product-details/facial-tissue"}
          >
            <div className="showcase">
              <img
                src="https://m.media-amazon.com/images/I/81+sWKCtJ8L.jpg"
                alt=""
              />
              <p className="text-center font-bold text-[2rem] text-neutral-500">
                Facial Tissue
              </p>
            </div>
          </Link>
        </div>

        <div className="w-full h-[70vh] border">
          <img
            className="w-full h-full"
            src="https://images.ctfassets.net/0gqf8nju6pz6/1tpNYTJKc4iK00i3p4Pxfo/a4cfb9fcc885a7125e0a3af794e6973f/how-to-unclog-toilet-hero.jpg?fit=scale&w=965"
            alt=""
          />
        </div>

        {/* thied section */}

        <div className="w-[70%]  mx-auto h-[85vh]  flex justify-around p-5 relative ">
          <div className="w-[50%] bg-transparent   my-auto z-20  text-justify h-fit text-black">
            <p className="text-[2rem]">Eco-friendly</p>

            <p>it is the only way forward.</p>
            <p className="text-[1.2rem] bg-transparent">
              At Just in case, we firmly believe that eco-friendly practices
              aren't just an option; they're the imperative path forward. We are
              committed to sourcing pulp and other raw materials exclusively
              from certified timberlands. These timberlands represent a
              conscious choice towards environmentally-friendly forestry
              practices, ensuring that our wood products are sourced from
              forests managed with long-term environmental health and social
              responsibility in mind. By prioritizing eco-friendly practices in
              our procurement processes, we aim to set a standard for
              responsible resource management in the industry.
            </p>
          </div>
          <img
            className="w-[30%] h-[60%]  my-auto  "
            src="https://cdn.vectorstock.com/i/preview-1x/06/91/eco-green-tree-leaf-ecology-vector-29130691.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
