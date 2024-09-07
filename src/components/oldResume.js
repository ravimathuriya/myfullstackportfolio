import React from "react";
import Body from "./Body";
import "../Static/resume.css";

const Resume = () => {
  return (
    <>
      <Body />
      <div id="resume">
        <h2>Resume</h2>
        <div className="link-container">
          <h4>
            <a href="#education">Education</a>
          </h4>
          <h4>
            <a href="#experience">Experience</a>
          </h4>
          <h4>
            <a href="#skills">Skills</a>
          </h4>
          <h4>
            <a href="#courses">Courses</a>
          </h4>
        </div>
        <hr />

        <div id="education">
          <h3>Education</h3>
          <p>
          <span style={{ fontWeight: "500" }}>
            Diploma In Electrical Engineering
          </span>
          <br />
          <span style={{ fontSize: "13px" }}>
            Board of Technical (U.P) - 2014
          </span>
          </p>

          <p>
          <span style={{ fontWeight: "500" }}>
            Diploma In Electrical Engineering
          </span>
          <br />
          <span style={{ fontSize: "13px" }}>
            Board of Technical (U.P) - 2014
          </span>
          </p>

          <p>
          <span style={{ fontWeight: "500" }}>
            Diploma In Electrical Engineering
          </span>
          <br />
          <span style={{ fontSize: "13px" }}>
            Board of Technical (U.P) - 2014
          </span>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Resume;
