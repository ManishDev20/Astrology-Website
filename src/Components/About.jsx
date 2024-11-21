import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="about" className="min-h-screen">
      <div className="max-w-[1200px] h-full  mx-auto block px-5 py-5 sm:py-10 ">
        <div className="py-5">
          <motion.h1
            ref={ref}
            style={{
              translateX: isInView ? 0 : "-100%",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative text-[#621308] duration-300"
          >
            Astrologer Pt. M.K Shastri
          </motion.h1>
        </div>
        <div className="my-5 w-full ">
          <p className="about-dec my-5 leading-7 sm:leading-8 sm:text-lg text-justify min-[400px]:text-left">
            Astrologer Pt. M.K Shastri Indian Astrologer Pt. M.K Shastri is one
            of the best astrologers in the world, he has solved many cases of
            love back, love problems, love marriage, husband-wife disputes and
            many more in a short span of time. He has great experience and
            contribution in the astrology field and he has provided his
            astrology services for many years all over India as well as all over
            the world.
          </p>
          <p className="about-dec my-5 leading-7 sm:leading-8 sm:text-lg text-justify min-[400px]:text-left">
            He is an expert in love marriage and intercaste marriage solutions,
            love problem solutions, love back, family problem solutions,
            relationship problem solutions, business/job problem solutions,
            career problem solutions, divorce problem solutions, husband-wife
            problem solutions etc.
          </p>
          <p className="about-dec my-5 leading-7 sm:leading-8 sm:text-lg text-justify min-[400px]:text-left">
            If you are facing any love or marriage problems in your life then
            feel free to call famous Indian Astrologer Pt. M.K Shastri at
            +91-8690869291 he will solve your problem very soon and provide you
            a happy life. Pt. M.K Shastri is very expert in Love Back, if you
            love someone and due to any misunderstanding, you lost him/her then
            don't worry about it, just contact Love Back Specialist Indian
            Astrologer Pt. M.K Shastri he will solve your problem very easily
            and you will get your love in your life forever.
          </p>
        </div>
        <div className="my-5 flex flex-col md:flex-row gap-5 md:gap-10 justify-center px-10 py-5 sm:py-10">
          <img src="./img/wa1.png" alt="" className="md:h-[500px] " />
          <img src="./img/wa1.png" alt="" className="md:h-[500px] " />
          <img src="./img/wa1.png" alt="" className="md:h-[500px] " />
        </div>
      </div>
    </section>
  );
};

export default About;
