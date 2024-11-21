import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Whyus from "./Components/Whyus";
import OtherSer from "./Components/OtherSer";
import AstroSer from "./Components/AstroSer";
import Testi from "./Components/Testi";
import Footer from "./Components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="Landing-container relative overflow-hidden ">
      <div className=" fixed bottom-3 left-5 p-4 rounded-t-xl rounded-br-xl bg-[blue] z-[999]">
        <IoIosCall className="text-2xl text-[white]" />
      </div>
      <div className="fixed bottom-3 right-5 p-4 rounded-t-xl rounded-bl-xl bg-[green] z-[999]">
        <RiWhatsappLine className="text-2xl text-[white]" />
      </div>
      <div
        className={`sideMenubar fixed  right-0 top-0 w-full sm:w-[40%] md:w-[30%]  bg-[#621308] text-white  origin-right   duration-300 ${
          isOpen ? "scale-x-[1] " : "scale-x-[0] "
        }  z-[9999] px-5  h-screen`}
      >
        <div className="max-w-[1200px] mx-auto px-10">
          {" "}
          <div className="flex justify-between items-center py-5">
            <img
              src="./img/logo.png"
              alt=""
              className="w-32 scale-[1] sm:scale-0 origin-center sm:opacity-0"
            />
            <MdClose onClick={toggleMenu} className="text-3xl" />
          </div>
          <ul className="flex flex-col gap-5 text-center">
            <li className="font-semibold ">
              <a
                onClick={toggleMenu}
                href="#about"
                className="hover:text-[#ffcc00]"
              >
                About
              </a>
            </li>
            <li className="font-semibold ">
              <a
                onClick={toggleMenu}
                href="#services"
                className="hover:text-[#ffcc00]"
              >
                Services
              </a>
            </li>
            <li className="font-semibold  text-center">
              <span className="text-gray-400">Contact us</span>
            </li>
            <li className="font-semibold flex items-center gap-5 md:gap-5 justify-center ">
              <a
                onClick={toggleMenu}
                href="tel:+91-8690869291"
                className="hover:bg-[#0000ff] p-2 rounded-full"
              >
                <IoIosCall className="text-xl hover:text-[#fff] " />
              </a>
              <a
                onClick={toggleMenu}
                href="tel:+918690869291"
                className="hover:bg-[#00ff00] p-2 rounded-full"
              >
                <RiWhatsappLine className="text-xl hover:text-[#fff] " />
              </a>
            </li>
            <li className="font-semibold hover:text-[#ffcc00]"></li>
          </ul>
        </div>
      </div>
      <nav className="Navbar  top-0 flex items-center h-[80px] bg-[#621308]">
        <div className="max-w-[1200px] mx-auto flex gap-4 justify-between items-center p-2">
          <div className="logo hidden sm:block">
            <img src="./img/logo.png" alt="" className="w-60 p-2" />
          </div>
          <div className=" w-full sm:w-[60%]  py-2 rounded-full text-nowrap overflow-hidden bg-[#ffcc00] ">
            <marquee className="sm:lext-lg lg:text-xl flex items-center text-nowrap">
              <p>
                Video Call पर अपना Work देखें, Call Us For Love Matter,
                Relationship, Breakup, Divorce. Watch Live Work On Video Call.
              </p>
            </marquee>
          </div>
          <div className="menu">
            <div className=" text-white pr-3">
              {isOpen ? (
                <MdMenuOpen onClick={toggleMenu} className="text-3xl" />
              ) : (
                <MdOutlineMenu onClick={toggleMenu} className="text-3xl" />
              )}
            </div>
          </div>
        </div>
      </nav>
      <Hero />
      <About />
      <Services />
      <Whyus />
      <OtherSer />
      <AstroSer />
      <Testi />
      <Footer />
    </div>
  );
};

export default App;
