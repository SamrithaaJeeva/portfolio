import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2024-2025"
          title="Informatics Institute of Technology affiliated with Robert Gordon University, Scotland"
          subTitle="Colombo, SriLanka"
          des="BSc (Hons) in Artificial Intelligence & Data Science"
        />
        <ResumeCard
          badge="2014-2022"
          title="Royal Institute International"
          subTitle="Colombo, Sri Lanka"
          des="Primary & Secondary Education"
        />
      </div>
    </div>
  );
};

export default Education;
