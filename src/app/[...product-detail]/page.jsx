"use client";
import React from "react";
import Navbar from "../component/Navbar";
import MianFooter from '@/app/pages/Footer/Page'
import { IoIosFlower, IoMdCloseCircleOutline } from "react-icons/io";
import { SiAdguard } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
const Page = () => {
  const currentURL = window.location.href;
  const splitArray = currentURL.split("/");

  console.log(splitArray[splitArray.length - 1], "name");
  return (
    <>
      <Navbar />
      <div className="w-full h-[15vh] "></div>
      <div className="w-[70%] mx-auto h-fit border-2 mt-[2rem] rounded-3xl">
        <div className="w-[50%] mx-auto mt-[3rem]">
          <img
            src="https://i5.walmartimages.com/asr/e1fee03c-81a6-43e7-b9ce-279fbdcc60b6_1.1b34a33ced7720220e629cac6222d1ae.jpeg"
            alt=""
          />
        </div>
        <div className="w-[70%] mx-auto ">
          <p className="text-[1.8rem] text-center my-[1.2rem]">Facial Tissue</p>
          <p
            className="text-[1.3rem] text-justify
            "
          >
            Sanitizing Wipes Premier Sanitizing Wipes are made with highly
            evolved chemicals approved by the World Health Organisation to
            effectively fight against all known germs and viruses. While they
            provide absolute protection, they are enriched with Vitamin E to
            gently moisturise your skin making them completely safe to use on
            your face as well as your body.
          </p>
        </div>

        <div className="w-[80%] h-[15vh] mx-auto mt-[3rem]  flex justify-around">
         
          <div className=" my-auto text-center ">
            
            <div className="w-[4rem] mx-auto h-[4rem] border flex flex-col rounded-full ">
              <IoIosFlower size={"1.8rem"} className="m-auto" />
            </div>

            <p>Paraben Free</p>
          </div>

          <div className=" my-auto text-center ">
            
            <div className="w-[4rem] mx-auto h-[4rem] border flex flex-col rounded-full ">
              <IoMdCloseCircleOutline size={"1.8rem"} className="m-auto" />
            </div>

            <p>Alcohol Free</p>
          </div>
          <div className=" my-auto text-center ">
            
            <div className="w-[4rem] mx-auto h-[4rem] border flex flex-col rounded-full ">
              <SiAdguard size={"1.8rem"} className="m-auto" />
            </div>

            <p>pH balanced</p>
          </div>
          <div className=" my-auto text-center ">
            
            <div className="w-[4rem] mx-auto h-[4rem] border flex flex-col rounded-full ">
              <FaLayerGroup size={"1.8rem"} className="m-auto" />
            </div>

            <p>Germ Shield</p>
          </div>







        </div>

    <div>
      <p className="text-center my-[2rem] text-[2rem]">Order Now</p>
      <div className="flex  mb-[2rem] justify-center gap-2 mt-5">
              
                <div className="px-4 order_card border w-[10%] h-[6vh] bg-white overflow-hidden rounded-full text-gray-600 text-xs font-bold leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-full "
                      src="https://logolook.net/wp-content/uploads/2022/10/Flipkart-Logo-500x281.png"
                      alt=""
                    />
                  </a>
                </div>


                <div className="order_card border  w-[10%] h-[6vh] bg-white overflow-hidden rounded-full text-gray-500 text-xs font-bold px-4 py-2 leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-full "
                      src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
    </div>
      </div>
      <MianFooter />
    </>
  );
};

export default Page;
