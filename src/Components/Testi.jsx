import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Testi = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefit = [
    {
      img: "./img/testi1.jpg",
      name: "Surekha",
      description:
        "I Am Really Thankful To Pt. M.K Shastri His Assistance And Remedies Has Really Helped Me A Lot When My Business Was Going In Huge Debt, He Helps To Overcome It.",
    },
    {
      img: "./img/testi2.jpg",
      name: "Ashok",
      description:
        "Astrologer Pt. M.K Shastri is best astrologer. He helped me with my love issues. I was under stress and when I start following astrological remedies my relationship become better with loved one.",
    },
    {
      img: "./img/testi3.jpg",
      name: "Satish",
      description:
        "I am extremely thankful to Astrologer Pt. M.K Shastri . I was in depression just because of my divorce. He helped me to stop divorce and make me recover from depression.",
    },
  ];

  return (
    <div className="mt-20">
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
          What Our Customers Say?
        </motion.h1>

        <div className="w-full grid grid-cols-12 gap-y-20 sm:gap-x-10 lg:gap-5 place-items-center items-stretch mt-28  px-10">
          {benefit.map((item, i) => {
            return (
              <div className="w-full md:w-[60%] lg:w-full col-span-12  lg:col-span-4 relative hover:scale-[1.03] rounded-[20px]  border-[3px] border-[#2ab8ff]  pt-16">
                <div className="icon w-full py-5 absolute flex -top-[70px] ">
                  <span className=" block w-max mx-auto bg-[#fff]  rounded-full border-[5px] border-[#2ab8ff] shadow-xl ">
                    <img src={item.img} alt="" className="w-24 rounded-full" />
                  </span>
                </div>
                <div className="px-3 h-full ">
                  <h1 className="text-xl md:text-2xl font-semibold text-[#d43122] text-center">
                    {item.name}
                  </h1>
                  <p className="py-2 text-center">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <img src="./img/banner3.png" alt="" className="mt-20" />
    </div>
  );
};

export default Testi;
