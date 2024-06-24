import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        
        <li className="sidenavLi">AcciTracker</li>
        <li className="sidenavLi">Wine Quality Prediction</li>
        <li className="sidenavLi">Analyzing HCHO Quality</li>
        <li className="sidenavLi">Census Income Prediction</li>
        <li className="sidenavLi">Fuzzy Logic-Based Error Detection and Correction for Data Storage</li>
        <li className="sidenavLi">MANS Fitness</li>
        <li className="sidenavLi">RallyFX</li>
        <li className="sidenavLi">SCAMS Club Management System</li>
        
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">077-115-5995</li>
        <li className="sidenavLi">samritha.20221530@iit.ac.lk</li>
      </ul>
    </div>
  );
}

export default Sidenav