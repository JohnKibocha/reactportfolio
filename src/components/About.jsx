import React, { useEffect } from "react";
import pic from "../assets/pic1.jpeg";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-900 text-white pb-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic}
              alt=""
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-white">
              I am JOHN MUTURI KIBOCHA
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
              Focused and enthusiastic developer with a keen interest in web development. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domain came into being. I am a passionate individual who thrives to build softwares to solve real-world industry problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;