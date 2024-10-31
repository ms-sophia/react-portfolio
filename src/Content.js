import React from "react";
import {experiences} from "./data/experienceList"
import {projects} from "./data/projectList"
const Content = () => {
  // ** random emoji changes
  // const handleEmojiChange = () => {
  // }
  return (
    <main>
      <article id="heroSection">
        <img id="profile-picture" src="" alt="" />
        <div id="intro-hero"></div>
        <h1>
          Hi <span style={{ fontSize: "1.75rem" }}>ಥ_ಥ</span>
        </h1>
        <h2>I'm Sophia Gabrielle S. Jardeleza</h2>
        <p></p>
        <ul id="social-media-links">
          <li>
            Github
            {/* <a href="#"></a> */}
          </li>
          <li>
            Linkedin
            {/* <a href="#"></a> */}
          </li>
          <li>
            Google mail
            {/* <a href="#"></a> */}
          </li>
        </ul>
      </article>

      <article id="experiencesSection">
        <ul>
          {experiences.map((experience) => (
            <li key={experience.title}>
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p className="date">{experience.jobDate}</p>
              <p>{experience.description}</p>
              <ul>
                {experience.skills.map((skill, index) => (
                  <li className="skill-list" key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <h2>Experiences of Sophia</h2>
        <p>(¬_¬")</p>
      </article>

      <article id="projectSection">
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill, index) => (
                  <li className="skill-list" key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <h2>Projects of Sophia</h2>
        <p>✍️(◔◡◔)</p>
      </article>
    </main>
  );
};

export default Content;
