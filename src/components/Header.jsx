import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo copy.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import close from "../assets/images/close.svg";
import arrow from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { list } from "../assets/data/data";
import { icons } from "../assets/data/data";
import { copy } from "../assets/data/data";
import { upper } from "../assets/data/data";
import { center } from "../assets/data/data";
import { charge } from "../assets/data/data";
import { photo } from "../assets/data/data";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [hover , setHover] = useState(null)

  const handleHover = (index) => {
    setHover(index)
  }

  const closeHover = ()=>{
    setHover(null)
  }

  return (
    <div className="main overflow-hidden select-none">
      <div className={`nav-lg h-[60px] w-[100vw] medium hidden lg:flex justify-between items-center px-12 bg-transparent absolute inset-0 z-50 text-white overflow-hidden ${hover ? "hidden" : ""}`}>
        <div className="left ">
          <div className="logo ">
            <a href="/">
              <img
                className="w-[120px] h-[20px] cursor-pointer"
                src={logo}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="center list-none flex justify-center items-center gap-4">
          {list.map((e, index) => (
            <Link to={e.path}>
              <li onMouseEnter={handleHover} key={index} className={`cursor-pointer py-3 px-2 ${hover ? "text-black" : ""}`}>
                {e.li}
              </li>
            </Link>
          ))}
        </div>

       

        <div className="right flex justify-center items-center gap-2">
          {icons.map((val, i) => (
            <img
              key={i}
              src={val.i}
              alt=""
              className="h-[23px] cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="nav-sm h-[60px] w-[100vw] medium lg:hidden flex justify-between items-center px-6 bg-transparent absolute inset-0 z-50 text-white overflow-hidden">
        <div className="left ">
          <div className="logo ">
            <a href="/">
              <img
                className="w-[120px] h-[20px] cursor-pointer"
                src={logo}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="menu">
          <button
            onClick={handleMenu}
            className="bg-black bg-opacity-15 backdrop-blur-[2px] px-[13px] py-1 text-[14px] rounded-md"
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="menu h-[100vh] w-[100vw] bg-[#FFFFFF] fixed inset-0 px-5 py-5 z-50 lg:hidden">
          <div className="close flex justify-end items-center">
            <img
              onClick={handleMenu}
              src={close}
              alt=""
              className="h-[23px] cursor-pointer"
            />
          </div>

          <div className="upper">
            {upper.map((li, index) => (
              <div
                key={index}
                className="box mt-16 flex justify-between items-center"
              >
                <div className="left list-none">
                  <Link to={li.to}>
                    <li onClick={closeMenu} className="medium text-[17px]">
                      {li.up}
                    </li>
                  </Link>
                </div>
                <div className="right">
                  <Link to={li.to}>
                    <img
                      onClick={closeMenu}
                      src={arrow}
                      alt=""
                      className="h-[17px]"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="center">
            {center.map((cen) => (
              <div
                key={cen}
                className="box mt-10 flex justify-between items-center"
              >
                <div className="left list-none">
                  <li className="medium text-[17px]">{cen.ce}</li>
                </div>
              </div>
            ))}
          </div>

          <div className="box mt-10 flex justify-between items-center">
            <div className="left flex justify-start items-center gap-3 list-none">
              <img
                src={icon2}
                alt=""
                className="h-[23px] mix-blend-difference -translate-y-3"
              />{" "}
              <li className="medium text-[17px]">
                United States <br /> <span className="book">English</span>
              </li>
            </div>
            <div className="right">
              <img src={arrow} alt="" className="h-[17px] " />
            </div>
          </div>

          <div className="box mt-10 ">
            <div className="left flex justify-start items-center gap-3 list-none">
              <img
                src={icon3}
                alt=""
                className="h-[23px] mix-blend-difference"
              />{" "}
              <li className="medium text-[17px]">Account</li>
            </div>
          </div>
        </div>
      )}




{
          hover   && (
            <div onMouseLeave={closeHover}  className="bg-white min-h-[50vh] text-black overflow-hidden hidden transition-all duration-150  lg:block">
             
             <div className="nav-lg h-[60px] w-[100vw] medium hidden lg:flex justify-between items-center px-12 bg-transparent absolute inset-0 z-50 text-white overflow-hidden">
        <div className="left ">
          <div className="logo ">
            <a href="/">
              <img
                className="w-[120px] h-[20px] cursor-pointer"
                src={logo2}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="center list-none flex justify-center items-center gap-4">
          {list.map((e, index) => (
            <Link to={e.path}>
              <li onMouseEnter={handleHover} key={index} className={`cursor-pointer py-3 px-2 ${hover ? "text-black" : ""}`}>
                {e.li}
              </li>
            </Link>
          ))}
        </div>

       

        <div className="right flex justify-center items-center gap-2">
          {copy.map((val, i) => (
            <img
              key={i}
              src={val.i}
              alt=""
              className="h-[23px] cursor-pointer"
            />
          ))}
        </div>
      </div>
            


           <div className="lower  pt-32 xl:px-64 lg:px-10    flex justify-center items-center xl:gap-36 gap-5">
 
           <div className="left flex xl:gap-16 lg:gap-6">
            {
              photo.map((per,index) => (
                <div className="main flex flex-col justify-center items-center">
                  <img className={`h-[80px]  ${index === photo.length - 1 ? "mix-blend-difference" : "" }`} src={per.src} alt="" />
                  <h1 className="border-l-black pl-16 medium text-[17px] -translate-x-7 pt-3">{per.head}</h1>
                  <h1 className="border-l-black pl-16 medium text-[13px] -translate-x-7 cursor-pointer">{per.sub}</h1>
                </div>
              ))
            }
            </div>

            <div className="right list-none border-l-[1px] border-l-black pl-16 medium text-[15px] flex flex-col gap-2">
             {
              charge.map((val) => (
                <li className="border-b-2 border-b-transparent hover:border-b-black w-fit transition-all duration-[0.3s] delay-[0.1s] ease cursor-pointer">{val}</li>
              ))
             }
            </div>


           </div>


            </div>
          )
        }







    </div>
  );
};

export default Header;
