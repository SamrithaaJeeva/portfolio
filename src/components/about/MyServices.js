import React from "react";
import { FaApple } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { FaDatabase } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';



const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<AiOutlineRobot />}
        title="Machine Learning"
        subTitle="As a machine learning engineer, I collect, train, and deploy models to address real-world problems efficiently while staying abreast of the latest advancements in the field."
      />
      <ServicesCard
        icons={<FaDatabase />}
        title="Data Engineering"
        subTitle="As a data engineer, I design and maintain efficient data pipelines and infrastructure, ensuring reliable data storage and accessibility for stakeholders."
      />
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Developement"
        subTitle=" I design and implement user-friendly websites and applications, ensuring functionality, performance, and a seamless user experience."
      />
    </div>
  );
};

export default MyServices;
