import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { TbHandFinger } from "react-icons/tb";

const OtherSer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-[#ffbf00] pb-5">
      <img src="./img/banner2.png" alt="" />
      <div className="max-w-[1200px] mx-auto my-10 md:my-20">
        <motion.h1
          ref={ref}
          style={{
            translateX: isInView ? 0 : "-100%",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="block font-bold text-3xl sm:text-5xl lg:text-5xl relative text-[#621308] duration-300 text-center"
        >
          Other Services
        </motion.h1>
        <div className="my-10 text-center">
          <p className="text-xl md:font-semibold px-2">
            Consultation To Your All Types Of Problems With Pure Astrology
          </p>
        </div>
        <div className="my-10 grid grid-cols-12 gap-5  p-5">
          <div className="col-span-12 md:col-span-4 border-2 border-[#621308] rounded-t-lg">
            <div className="text-center text-xl sm:text-2xl md:text-3xl font-semibold p-2 rounded-t-[6px] bg-[#621308] text-white">
              Other Services
            </div>
            <div className="py-5 px-2">
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Intercaste Marriage
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Relationship Problems
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Extra Marital Affair
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Lost Love Back
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Business Problems
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Ex Love Back
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 border-2 border-[#621308] rounded-t-lg">
            <div className="text-center text-xl sm:text-2xl md:text-3xl font-semibold p-2 rounded-t-[6px] bg-[#621308] text-white">
              Other Services
            </div>
            <ul className="py-5 px-2">
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Breakup Problems
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Vedic Astrology
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" /> Career
                Problems
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Kundli Dosh
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Married Life Issue
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Jobless Solution
              </a>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 border-2 border-[#621308] rounded-t-lg">
            <div className="text-center text-xl sm:text-2xl md:text-3xl font-semibold p-2 rounded-t-[6px] bg-[#621308] text-white">
              Other Services
            </div>
            <ul className="py-5 px-2">
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Delay Marriage
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Court Case Problem
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Health Problem Solutions
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Online Love Back Specialist
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Married Life Issue
              </a>
              <a
                href="tel:+91-8690869291"
                className="my-2 block hover:font-semibold cursor-pointer"
              >
                <TbHandFinger className="inline rotate-90 mr-2" />
                Financial Problems
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSer;
