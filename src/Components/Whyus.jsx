import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { IoIosCall } from "react-icons/io";
const Whyus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefit = [
    {
      img: "./img/happyclient.png",
      title: "Happy Clients",
      description:
        "We have an expert that provides a genuine solution to the problem by keeping your information confidential and every astrological remedy you will get here at affordable prices for a better future.",
    },
    {
      img: "./img/timesaver.png",
      title: "Time Saver Solutions",
      description:
        "Quick and effective remedies tailored to your needs, saving time while delivering impactful results for life's challenges.",
    },
    {
      img: "./img/expert.png",
      title: "Expert Astrologers",
      description:
        "Our experienced astrologers provide precise guidance, blending expertise and intuition for insightful solutions to your questions and concerns.",
    },
    {
      img: "./img/happyclient.png",
      title: "Affordable Solutions",
      description:
        "Get quality astrology services at budget-friendly prices, ensuring everyone can access reliable guidance without financial stress.",
    },
  ];

  return (
    <div className="my-20">
      <div className="max-w-[1200px] mx-auto ">
        <motion.h1
          ref={ref}
          style={{
            translateX: isInView ? 0 : "-100%",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="block font-bold text-3xl sm:text-5xl relative text-[#621308] duration-300 text-center"
        >
          Why Choose us?
        </motion.h1>
        <div className="my-10 text-center">
          <p className="text-xl md:font-semibold px-5 ">
            We have an expert that provides a genuine solution to the problem by
            keeping your information confidential and every astrological remedy
            you will get here at affordable prices for a better future.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-y-20 sm:gap-x-10 lg:gap-5 place-items-center items-stretch mt-28  px-10">
          {benefit.map((item, i) => {
            return (
              <div className="col-span-12 sm:col-span-6 lg:col-span-3  w-full hover:scale-[1.03] rounded-tr-[40px] border-[3px] border-[#d43122]  ">
                <div className="icon py-5 relative ">
                  <span className="absolute left-2 -top-[60px] bg-[#fff] p-3 rounded-full border-[3px] border-red-500 shadow-xl ">
                    <img src={item.img} alt="" className="w-16" />
                  </span>
                </div>
                <div className="px-3 py-2 h-full ">
                  <h1 className="text-xl md:text-2xl font-semibold text-[#d43122]">
                    {item.title}
                  </h1>
                  <p className="py-2">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center my-10">
          <a
            href="tel:+91-8690869291"
            className="px-4 py-2 rounded-xl bg-[#ffcc00bc] hover:bg-[#ffbb29] text-[#621308] hover:text-[#621308] text-xl"
          >
            <IoIosCall className="inline text-xl" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
