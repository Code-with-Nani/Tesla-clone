import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import close from "../assets/images/close.svg";
import arrow from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { list } from "../assets/data/data";
import { icons } from "../assets/data/data";
import { upper } from "../assets/data/data";
import { center } from "../assets/data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="main overflow-hidden select-none">
      <div className="nav-lg h-[60px] w-[100vw] medium hidden lg:flex justify-between items-center px-12 bg-transparent absolute inset-0 z-50 text-white overflow-hidden">
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

        <div className="center list-none flex justify-center items-center gap-6">
          {list.map((e, index) => (
            <Link to={e.path}>
              <li key={index} className="cursor-pointer">
                {e.li}
              </li>
            </Link>
          ))}
        </div>

        <div className="right flex justify-center items-center gap-2">
          {icons.map((val, index) => (
            <img
              key={index}
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
    </div>
  );
};

export default Header;
