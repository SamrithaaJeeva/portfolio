import React from "react";

import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="HCHO Insight"
            category="Analyzing Air Quality & Climate in Sri Lanka"

          />
          <ProjectsCard
            title="Predicting Income Using Census Data"
            category="Classification project using census data to predict income"

          />
          <ProjectsCard
            title="Rally FX Championship"
            category="JavaFX software"

          />
          
        </div>
        <div className="px-6">
          <ProjectsCard
            title="MANS Fitness Web Application"
            category="Fitness E-commerce website"
          />
          <ProjectsCard
            title="SCAMS Club Management System"
            category="School activity club management system. by JavaFX"
          />
          <ProjectsCard
            title="AcciTracker"
            category="A Road Accident Prediction App"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
