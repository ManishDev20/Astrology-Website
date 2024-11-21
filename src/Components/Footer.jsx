import React from "react";
import { IoIosCall } from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";
const Footer = () => {
  return (
    <section id="footer" className="bg-black pt-10 px-10">
      <div className="max-w-[1200px] mx-auto ">
        <div className="grid grid-cols-12 gap-5 mb-10 items-stretch">
          <div className="col-span-12 lg:col-span-4">
            <h1 className="text-xl font-semibold text-[#ffcc00] my-2">
              About Us
            </h1>
            <p className="text-white">
              Astrology Is All About Ending The Troubles Of The Life. There Are
              Many People Those Who Wish To Solve All The Troubles Soon. Thus To
              Help Such People Astrologer Pt. M.K Shastri Is Here.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h1 className="text-xl font-semibold text-[#ffcc00] my-2 ">
              Best Services
            </h1>
            <ul className="mt-5 text-white flex flex-col gap-5">
              <li className="border-b-2 lg:w-[60%]">Love Back Specialist</li>
              <li className="border-b-2 lg:w-[60%]">
                Othercaste Love Marriage
              </li>
              <li className="border-b-2 lg:w-[60%]">Ex Love Back</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h1 className="text-xl font-semibold text-[#ffcc00] my-2">
              have any queries?
            </h1>
            <ul className="text-white">
              <header className="text-xl font-semibold bg-white text-black text-center px-10 py-1 ">
                Contact Us
              </header>
              <a
                href="tel:+91-8690869291"
                className="pt-5 block w-max hover:text-blue-300"
              >
                <IoIosCall className="inline" /> +91-8690869291
              </a>
              <hr className="my-2" />
              <a
                href="https://wa.me/918690869291/?text=Please%20Help%20Me"
                className=" block w-max hover:text-green-600"
              >
                <RiWhatsappLine className="inline" /> +91-8690869291
              </a>
            </ul>
          </div>
        </div>
        <div className="text-center text-[#fff] my-5 px-5">
          Disclaimer: There Are No Guarantees That Every Person Using This
          Service Will Get Their Desired Results For Sure. Astrological Results
          Depend On A Lot Of Factors And The Results May Vary From Person To
          Person
        </div>
        <div className="text-center text-[#ffcc00]">
          Copyright © All Rights Reserved 2024-2025
        </div>
      </div>
      ;
    </section>
  );
};

export default Footer;
