import React from "react";

import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import {Web,JavaFX, JavaFX2} from '../../assets/index'

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <ProjectsCard
            title="AcciTracker"
            category="A Road Accident Prediction App"
          />
          
          
          <ProjectsCard
            title="HCHO Insight"
            category="Analyzing Air Quality & Climate in Sri Lanka"
            
          />
          <ProjectsCard
            title="Predicting Income Using Census Data"
            category="Classification project using census data to predict income"

          />
          <a href="https://github.com/SamrithaaJeeva/JavaFX---Rally-Championship-Management-System">
          <ProjectsCard
            image={JavaFX}
            title="Rally FX Championship"
            category="JavaFX software"

          />
          </a>
        </div>
        <div className="px-6">
          <a href="https://github.com/MadhunishaBala/Fitness-Assistant-Website">
          <ProjectsCard
          image = {Web}
            title="MANS Fitness Web Application"
            category="Fitness E-commerce website"
          />
          </a>
           <a href="https://github.com/SamrithaaJeeva/SCAMS---Club-Management-System">
          <ProjectsCard
          image={JavaFX2}
            title="SCAMS Club Management System"
            category="School activity club management system. by JavaFX"
          />
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
