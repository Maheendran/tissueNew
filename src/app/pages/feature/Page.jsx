"use client";
import { BiSolidSprayCan } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Page = () => {
  const headingheadTop = useAnimation();
  const headingsubHead = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
 
    if (inView) {
      headingheadTop.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      headingheadTop.start({
        scale: 2,
        transition: {
          duration: 1,
        },
      });
    }

    // sub heading
    if (inView) {
      headingsubHead.start({
        scale: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      headingsubHead.start({
        scale: 1.5,
        transition: {
          duration: 1,
        },
      });
    }
    
  }, [inView]);

  return (
    <div
      ref={ref}
      id="feature"
      className=" pb-10  relative  w-full h-fit mx-auto "
    >
      <div class="min-w-screen  rounded-xl  flex items-center justify-center ">
        <div class="w-full z-50  border-gray-200 px-5   text-gray-800">
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
              <motion.h1
                animate={headingheadTop}
                class="text-3xl md:text-4xl font-bold  text-gray-600"
              >
                Product feature
              </motion.h1>

              <motion.h3 animate={headingsubHead} class="sm:w-[60%] mx-auto text-sm mt-5 font-light">
                Eco-friendly products made from biodegradable
                materials, perfect for sustainable living.
              </motion.h3>
              <div class="text-center mb-10" >
                <span class="inline-block w-1 h-1 rounded-full bg-gray-500 ml-1"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
                <span class="inline-block w-40 h-1 rounded-full bg-gray-500 ml-1"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
                <span class="inline-block w-1 h-1 rounded-full bg-gray-500 ml-1"></span>
              </div>
            </div>
            <div   class=" -mx-3 md:flex items-start">
              <div class="px-3 md:w-1/3">
                <div  class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="relative overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <FaFeatherAlt className="absolute left-0 right-0 m-auto top-0 bottom-0" />
                      
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Softness
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-justify text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Emphasize the softness of the tissue paper, making it
                      gentle on the skin and suitable for various uses such as
                      facial tissue or for sensitive skin.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <div  class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="relative overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <BiSolidSprayCan className="absolute left-0 right-0 m-auto top-0 bottom-0" />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Fragrance
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Offer scented options to add a pleasant fragrance to the
                      tissue paper, providing a refreshing and enjoyable
                      experience during use.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <div   class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="relative overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <FaHandHoldingWater className="absolute left-0 right-0 m-auto top-0 bottom-0" />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                        Absorbency
                      </h6>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Showcase the high absorbency of the tissue paper, making
                      it effective for spills, cleaning, ensuring quick and
                      efficient absorption.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
