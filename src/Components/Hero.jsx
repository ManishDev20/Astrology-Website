import React from "react";
import Slider from "./Slider";
const Hero = () => {
  return (
    <section id="home" className="w-full">
      <div className="w-full sm:flex justify-between items-center">
        <div className="p-5">
          <img src="./img/1.png" alt="" />
        </div>
        <div className="p-5">
          <img src="./img/2.png" alt="" />
        </div>
        <div className="p-5">
          <img src="./img/3.png" alt="" />
        </div>
      </div>
      <div className="">
        <div className="w-full bg-[#ffcc00] p-2">
          <p className="text-center text-lg sm:text-xl md:text-2xl font-semibold">
            समस्या कैसी भी घबराये नहीं तुरंत हमसे संपर्क करे और समाधान पाए !!
          </p>
        </div>
        <div className="w-full flex justify-center"></div>
        <Slider />
        <div className="bg-[#ffcc00] p-2">
          <marquee className="w-full px-3 sm:px-0 sm:w-[90%] md:w-[70%] block mx-auto ">
            <p className="text-center text-lg sm:text-xl md:text-2xl font-semibold">
              If You Are Facing Troubles In Your Life And You Feel Helpless Then
              You Can Contact With Astrologer Pt. M.K Shastri And You Get a
              Solution For Life Time.
            </p>
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
