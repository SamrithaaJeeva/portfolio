import React from "react";

import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import {Acci,Git,Web,JavaFX, JavaFX2} from '../../assets/index'

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        
        <a href="https://github.com/Inupa6677/DSGP-GROUP-9/tree/main">
          <ProjectsCard
          image = {Acci}
            title="AcciTracker"
            category="A Road Accident Prediction App"
          />
        </a>

        <a href="https://github.com/SamrithaaJeeva/Wine-Quality-Prediction">
          <ProjectsCard
          image = {Git}
            title="Wine Prediction"
            category="Machine learning model to predict wine quality"
          />
        </a>


          <a href="https://github.com/SamrithaaJeeva/.HCHO-Insight-Analyzing-Air-Quality-Climate-in-Sri-Lanka">
           <ProjectsCard
           image = {Git}
            title="HCHO Insight"
            category="Analyzing Air Quality & Climate in Sri Lanka"
            
          />
          </a>

          <a href="https://github.com/SamrithaaJeeva/Predicting-Income-Based-on-Census-Data---Machine-Learning">
           <ProjectsCard
           image = {Git}
            title="Predicting Income Using Census Data"
            category="Analyzing Income Data and Modelling"
            
          />
          </a>

          <a href="https://github.com/SamrithaaJeeva?tab=repositories">
           <ProjectsCard
           image = {Git}
            title="Fuzzy Logic-Based Error Detection and Correction for Data Storage"
            category=" Developed a domain-specific ontologyDeveloped a fuzzy logic-based error detection and correction system for a data storage company"
            
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
          <a href="https://github.com/SamrithaaJeeva/JavaFX---Rally-Championship-Management-System">
          <ProjectsCard
            image={JavaFX}
            title="Rally FX Championship"
            category="JavaFX software"

          />
          </a>

          
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
