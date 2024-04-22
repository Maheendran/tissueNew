"use client";
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const Page = () => {

  return (
    <>
    {/* bg-green-300 sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-gray-500   */}
      <div id="products" className="
      w-full h-fit  relative ">
        <h1 class="text-3xl md:text-4xl font-bold text-center  text-gray-600">
           Our Product Collection
        </h1>

        <h3 class="  sm:w-[50%] md:w-[50%] lg:w-[30%] mx-auto text-sm mt-5 font-light text-center">
          Eco-friendly products made from recycled or biodegradable materials,
          perfect for sustainable living.
        </h3>


        <div className=" w-full  mx-auto flex  flex-wrap items-center  justify-center">
          {/* Product 1 */}

          <div className=" w-[80%] sm:w-fit card_box  bg-orange-500 z-[10000000000] cursor-pointer flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
            <svg
              className="svg_box absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10  flex items-center justify-center">
              <div
                className=" absolute w-48 h-48 bottom-0 left-0 -mb-10 ml-3"
                style={{
                  background: "radial-gradient(white, transparent 40%)",
                  transform: "rotate3d(0, 0, 1, 30deg) scale3d(2, 2.6, 1)",
                  opacity: 1.7,
                }}
              ></div>
              <img
                className="relative w-[80%] h-[9rem] tissue_box "
                src="https://www.premiertissues.com/images/facial-tissues/black-gold.png"
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Box</span>

              <div className="block font-semibold text-xl">
                virgin facial tissues
              </div>
              <div className="block text-neutral-200 text-xs">
                100 pulls(2ply) and 200 sheets
              </div>
              <div className="flex justify-center gap-2 mt-5">
                <div className="px-4 order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-600 text-xs font-bold leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo"
                      src="https://logolook.net/wp-content/uploads/2022/10/Flipkart-Logo-500x281.png"
                      alt=""
                    />
                  </a>
                </div>

                <div className="order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-500 text-xs font-bold px-4 py-2 leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo "
                      src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[80%] sm:w-fit card_box  bg-teal-500 z-[10000000000] cursor-pointer flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
            <svg
              className="svg_box absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10  flex items-center justify-center">
              <div
                className=" absolute w-48 h-48 bottom-0 left-0 -mb-10 ml-3"
                style={{
                  background: "radial-gradient(white, transparent 40%)",
                  transform: "rotate3d(0, 0, 1, 30deg) scale3d(2, 2.6, 1)",
                  opacity: 1.7,
                }}
              ></div>
              <img
                className="relative w-[80%] h-[9rem] tissue_box "
                src="https://www.premiertissues.com/images/facial-tissues/silver.png"
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Box</span>

              <div className="block font-semibold text-xl">
                virgin facial tissues
              </div>
              <div className="block text-neutral-200 text-xs">
                100 pulls(2ply) and 200 sheets
              </div>
              <div className="flex justify-center gap-2 mt-5">
                <div className="px-4 order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-600 text-xs font-bold leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo"
                      src="https://logolook.net/wp-content/uploads/2022/10/Flipkart-Logo-500x281.png"
                      alt=""
                    />
                  </a>
                </div>

                <div className="order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-500 text-xs font-bold px-4 py-2 leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo "
                      src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className=" w-[80%] sm:w-fit card_box  bg-purple-500 z-[10000000000] cursor-pointer flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
            <svg
              className="svg_box absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10  flex items-center justify-center">
              <div
                className=" absolute w-48 h-48 bottom-0 left-0 -mb-10 ml-3"
                style={{
                  background: "radial-gradient(white, transparent 40%)",
                  transform: "rotate3d(0, 0, 1, 30deg) scale3d(2, 2.6, 1)",
                  opacity: 1.7,
                }}
              ></div>
              <img
                className="relative w-[80%] h-[9rem] tissue_box "
                src="https://www.premiertissues.com/images/facial-tissues/silver.png"
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Pouch</span>

              <div className="block font-semibold text-xl">
                virgin facial tissues
              </div>
              <div className="block text-neutral-200 text-xs">
              200 pulls(2ply) and 400 sheets

              </div>
              <div className="flex justify-center gap-2 mt-5">
                <div className="px-4 order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-600 text-xs font-bold leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo"
                      src="https://logolook.net/wp-content/uploads/2022/10/Flipkart-Logo-500x281.png"
                      alt=""
                    />
                  </a>
                </div>

                <div className="order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-500 text-xs font-bold px-4 py-2 leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo "
                      src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Product 4 */}
          <div className="w-[80%] sm:w-fit card_box  bg-yellow-500 z-[10000000000] cursor-pointer flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
            <svg
              className="svg_box absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10  flex items-center justify-center">
              <div
                className=" absolute w-48 h-48 bottom-0 left-0 -mb-10 ml-3"
                style={{
                  background: "radial-gradient(white, transparent 40%)",
                  transform: "rotate3d(0, 0, 1, 30deg) scale3d(2, 2.6, 1)",
                  opacity: 1.7,
                }}
              ></div>
              <img
                className="relative w-[80%] h-[9rem] tissue_box "
                src="https://www.premiertissues.com/images/facial-tissues/red.png"
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Pouch</span>

              <div className="block font-semibold text-xl">
             virgin paper hand towels

              </div>
              <div className="block text-neutral-200 text-xs">
              100 pulls(1ply)

              </div>
              <div className="flex justify-center gap-2 mt-5">
                <div className="px-4 order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-600 text-xs font-bold leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo"
                      src="https://logolook.net/wp-content/uploads/2022/10/Flipkart-Logo-500x281.png"
                      alt=""
                    />
                  </a>
                </div>

                <div className="order_card  h-[2rem] bg-white overflow-hidden rounded-full text-gray-500 text-xs font-bold px-4 py-2 leading-none flex items-center">
                  <a
                    target="_blank"
                    href="https://www.flipkart.com/aidleaf-premium-face-tissue-2-ply-100-pulls-3-box/p/itmd3f2c335ed9cf?pid=FLTGQYFUUJ2UEE9J&lid=LSTFLTGQYFUUJ2UEE9JH35QDF&marketplace=FLIPKART&q=tissue+papers&store=g9b%2Fffi&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_SXiqFGRfsAffECBUHWHnvqhA7oXKerZUVyJCcMpKweVq5ZRAHi6sHAxLTtsVeC14gNevv3fz7n98L3qqHxmBlg%3D%3D&ppt=sp&ppn=sp&ssid=38h70xztxc0000001710228426567&qH=db302b2134b69ec6"
                  >
                    <img
                      className="w-[3rem] flip_logo "
                      src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <span className="absolute opacity-20  top-[20vh] sm:top-0 right-0  " >
                      <svg
                        className="w-[10rem] h-[10rem] "
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#867f81"
                        />
                      </svg>
                    </span>
                    <span className="absolute opacity-20 bottom-0 left-0  " >
                      <svg
                        className="w-[10rem] h-[10rem] "
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#867f81"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#867f81"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#867f81"
                        />
                      </svg>
                    </span>
      </div>
    </>
  );
};

export default Page;
