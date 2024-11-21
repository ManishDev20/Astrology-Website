import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { MdTitle } from "react-icons/md";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Love Marriage Specialist",
      img: "./img/service1.jpg",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Love Problem Solution",
      img: "./img/service2.avif",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Family Problem Solution",
      img: "./img/service3.jpg",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Get Lost Love Back",
      img: "./img/service4.avif",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Husband Wife Problems",
      img: "./img/service5.jpg",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Divorce Problem Solution",
      img: "./img/service6.png",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Family Problem Solution",
      img: "./img/service7.jpg",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Relationship Problems",
      img: "./img/service8.jpg",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
    {
      title: "Extra Marital Affairs",
      img: "./img/service9.jpg",
      desc: "Astrology can offer insights and remedies for love marriage issues, aligning planetary influences for harmonious relationships and resolving conflicts.",
    },
  ];
  return (
    <section id="services" className="min-h-screen bg-[#621308] py-5 sm:py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center py-5 sm:px-10 md:py-16">
        <motion.h1
          ref={ref}
          style={{
            translateX: isInView ? 0 : "-100%",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative text-[#fff] duration-300 px-5 text-center sm:text-left"
        >
          OUR ASTROLOGY SERVICES
        </motion.h1>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5 px-5 sm:px-10 ">
        {services.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col col-span-12 sm:col-span-6 lg:col-span-4  shadow-[1px_2px_8px_2px_rgba(30,24,39,0.8)] hover:shadow-[2px_4px_10px_3px_rgba(30,24,39,0.8)] text-gray-900 rounded-lg border-2 sm:border-[5px] bg-[white] hover:scale-[1.03]"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full rounded-tl-[6px] rounded-tr-[6px] "
              />
              <div className="p-2">
                <h1 className="text-xl my-2 font-bold text-[#621308] text-center sm:text-left">
                  {item.title}
                </h1>
                <p className="text-center sm:text-left  ">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
