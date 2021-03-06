import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Layout from "../components/Layout";
import Resume from "../components/Resume";

function Resumes() {
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then(response => {
      setInformation(response.data);
    });
    axios.get("/api/experience").then(response => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
      setProjects(response.data.projects);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Mark Rivera</title>
        <meta name="description" content="Mark Rivera's Resume Page" />
      </Helmet>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="resume-title-container">
            <Sectiontitle title="Resume" />
            <a
              href={information.cvfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mi-button"
            >
              Download CV
            </a>
          </div>
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Projects" icon="code" />
          <div className="mi-resume-wrapper">
            {projects.map(project => (
              <Resume key={project.id} resumeData={project} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
