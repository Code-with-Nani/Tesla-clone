import React from "react";
import video from "../assets/video/Tesla.webm";
import { arr } from "../assets/data/data";

const Home = () => {
  return (
    <div className="main overflow-hidden">
      <div className="section1 h-[100vh] w-[100vw] overflow-hidden bg-red-950 relative">
        <video
          className="h-full w-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        ></video>

        <div className="content absolute inset-0 text-white flex flex-col justify-end items-start medium mx-5 mb-32 lg:mx-16">
          <p className="md:text-4xl md:leading-[48px] text-2xl leading-[36px] lg:pb-2">
            Find the Tesla for You
          </p>
          <p className="text-base leading-[20px] pb-4 px-1 lg:text-lg">
            Discover which model is best for you based on your budget, driving
            habits <br className="hidden lg:block" /> and lifestyle.
          </p>
          <button className="bg-[#E2E3E3] px-6 py-2 text-black rounded-[5px]">
            Help Me Choose
          </button>
        </div>
      </div>

      <div className="section2 overflow-hidden">
        {arr.map((val, index) => (
          <div key={index} className="image h-[96vh] w-[100vw] relative">
            <img
              className="h-[96vh] w-[100vw] object-cover overflow-hidden"
              src={val.img}
              alt=""
            />

            <div className="content absolute inset-0 overflow-hidden">
              <div
                className={`upper mt-28 text-center ${
                  index === arr.length - 4 ? "text-white" : ""
                }`}
              >
                <h1 className="heading medium text-[40px] leading-[48px] tracking-tighter">
                  {val.heading}
                </h1>
                <h2 className="medium price text-[20px] leading-[20px] lg:translate-x-2">
                  {val.price}
                </h2>
                <h2 className="book tax text-[12px] leading-[20px]">
                  {val.tax}
                </h2>
              </div>

              <div className="lower flex flex-col lg:flex-row justify-center items-center gap-6 mt-[20rem]">
                <button className="bg-[#F7F7F6] lg:w-[15%] w-[350px] py-[10px] text-black  text-[14px] leading-[17px] medium rounded-[5px]">
                  {val.btn1}
                </button>
                <button
                  className={`bg-[#61605F] lg:w-[15%] w-[350px] py-[10px] text-white text-[14px] leading-[17px] medium    rounded-[5px] ${
                    index === arr.length - 1 ? "hidden" : ""
                  } `}
                >
                  {val.btn2}
                </button>
              </div>

              <div className="end text-center px-10 mt-6">
                <h2
                  className={`book para text-[12px] leading-[20px] ${
                    index === arr.length - 1 || index === arr.length - 7
                      ? "text-white cursor-pointer text-[14px] medium "
                      : ""
                  }  ${index === arr.length - 1 ? "pt-[85px]" : ""}`}
                >
                  {val.para}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
