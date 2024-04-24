import React from "react";
import Navbar from "../component/Navbar";
import MianFooter from "@/app/pages/Footer/Page";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="h-[15vh]"></div>
      <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
            <p className="mb-6 text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, modi accusantium ipsum corporis quia asperiores dolorem nisi corrupti eveniet dolores ad maiores repellendus enim autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p className="mb-2 text-neutral-500">New York, 94126, United States</p>
            <p className="mb-2 text-neutral-500">+ 01 234 567 89</p>
            <p className="mb-2 text-neutral-500">info@gmail.com</p>
          </div>
          <div className="mb-12 border p-5 rounded-3xl w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                  className=""
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
                 <input
                  type="text"
                  className=" w-full rounded border bg-transparent py-[0.45rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                 
                  placeholder="Name"
                />
               
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                  className=""
                  htmlFor="exampleInput90"
                >
                Email
                </label>
                 <input
                  type="email"
                  className=" w-full rounded border bg-transparent py-[0.45rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                 
                  placeholder=" Email
                  "
                />
               
              </div>
           
              <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                  className=""
                  htmlFor="exampleInput90"
                >
                  Message
                </label>
                 <textarea
                  type="text"
                  className=" w-full rounded border bg-transparent py-[0.45rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                 
                  placeholder="Message"
                />
               
              </div>
              <div className="w-full flex">
                   <button
                type="button"
                className="w-[60%] py-3 bg-black text-white mx-auto text-center "
              >
                Send
              </button>
              </div>
           
            </form>
          </div>
        </div>
      </section>
    </div>
      <MianFooter />
    </>
  );
};

export default page;
