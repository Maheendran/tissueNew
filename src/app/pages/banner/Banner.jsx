"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CarouselComponent from "@/app/component/Carousel";
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
      <div className="w-fit h-fit ">
        <div className="w-full h-[15vh] "></div>
        <div
          className="   w-full h-fit "
          ref={ref}
        >



<CarouselComponent/>







        </div>
        {/* /second page/ */}
<div className="w-full flex p-2">
  <Link  className="ms-auto" href={'/product-lisiting'} >
  <p> See all</p>
  </Link>

</div>
        <div className="w-full h-[70vh]  flex gap-3 p-3 ">
          <div className="w-1/3 border h-full showcase overflow-hidden rounded-lg">
            <img
              src="https://www.premiertissues.com/images/facial-tissues/black-gold.png"
              alt=""
            />
          </div>
          <div className="w-1/3 border h-full showcase overflow-hidden rounded-lg">
            <img
              src="https://www.premiertissues.com/images/facial-tissues/black-gold.png"
              alt=""
            />
          </div>

          <div className="w-1/3 border h-full showcase overflow-hidden rounded-lg">
            <img
              src="https://www.premiertissues.com/images/facial-tissues/black-gold.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[70vh] border">
          <img
            className="w-full h-full"
            src="https://www.premiertissues.com/images/product/product.png"
            alt=""
          />
        </div>
        {/* thied section */}

        <div className="w-full h-[85vh] border flex p-5 relative ">
          <div className="w-[30%] my-auto text-justify h-fit text-black">
            <p className="text-[2rem]">Sustainability is not a choice;</p>

            <p>it is the only way forward.</p>
            <p className="text-[1.2rem]">
              Premier ensures that it procures pulp and other related raw
              materials from certified timberlands that are consciously
              harvested. These timberlands are forests that can be managed for
              the sustainable production of wood products.
            </p>
          </div>
          <img
            className="w-[50%] h-[85vh]  absolute right-0"
            src="https://static.wixstatic.com/media/30eb3f_9bbb752bf54648ccba6ad8451c605daa~mv2.png/v1/fill/w_735,h_1257,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/30eb3f_9bbb752bf54648ccba6ad8451c605daa~mv2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
