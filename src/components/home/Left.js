import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import { FiMail } from "react-icons/fi";
import CV from "../../assets/Curriculum Vitae - Samrithaa.pdf.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Machine Learning Engineer", "Data Engineering Enthusiast", "Web Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Samrithaa J</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
          <a href="https://github.com/SamrithaaJeeva" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300 cursor-pointer">
            <span className="text-xl">
              <FaGithub />
              </span>
          </a>
          <a href="https://www.linkedin.com/in/samrithaa-jeevaratnam-974572251/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300 cursor-pointer">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
          </a>
          <a href="mailto:samritha.20221530@iit.ac.lk" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300 cursor-pointer">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
          </a>
          </div>
          <br></br>
          <div className="flex h-14 w-full">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border border-t border-r border-b border-l text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300 mx-auto"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
