import React from "react";
import Body from "./Body";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Personal Expense Tracker",
      description:
        "The Personal Expense Tracker is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to track their personal expenses securely. The app enables users to log in, add, edit, update, and delete their expense entries with ease, providing a seamless experience for managing finances.",
      imageURL: "https://i.postimg.cc/wTBWsv20/Expense-Tracker.png",
      gitURL: "https://personal-expense-tracker-frontend-phi.vercel.app/",
    },
    {
      title: "Blogging platform",
      description:
        "The Blogging Platform is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to allow users to log in, create, edit, update, and delete their blog posts. The platform provides a user-friendly interface for bloggers to manage their content and interact with the community.",
      imageURL: "https://i.postimg.cc/SQgdq448/Blog-Platform.png",
      gitURL: "https://blog-platform-frontend-2x10.onrender.com/",
    },

    {
      title: "Quiz App",
      description:
        "The Quiz App is a web application designed to provide users with an interactive quiz experience. Built using React, it allows users to answer multiple-choice questions and see their results in real-time. The app dynamically loads questions and tracks the user's score, providing feedback at the end of the quiz.",
      imageURL: "https://i.postimg.cc/tTws32B1/quiz.png",
      gitURL: "https://ravimathuriya.github.io/quizapp/",
    },

    {
      title: "Avatar Generator",
      description:
        "The Avatar Generator App is a dynamic web application built using React that allows users to generate random avatars with the help of an external API. By clicking a button, users can generate and display a unique avatar image based on predefined characteristics",
      imageURL: "https://i.postimg.cc/0NvspJg0/avatar.png",
      gitURL: "https://ravimathuriya.github.io/avatargenerator/",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-md-center" id="reverse">
          <Body />
          <div className="col border mx-5 my-5" id="contact">
            <div id="contact-sizing">
              <h2>Projects </h2>
              <hr />
              {projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageURL={project.imageURL}
                    gitURL={project.gitURL}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;


