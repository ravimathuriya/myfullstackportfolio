import React from "react";
import Body from "./Body";
import ProjectCard from "./ProjectCard";


const Projects = () => {

  const projects = [
    {
      title: "Quiz App",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/tTws32B1/quiz.png",
      gitURL: "https://ravimathuriya.github.io/quizapp/"
    },
  {
      title: "qr code generator",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/9QDZ7wmN/qr.png",
      gitURL: "https://ravimathuriya.github.io/qrcodegenerator/"
    },
  {
      title: "Lyrics Finder",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/cJnsw08S/ly.png",
      gitURL: "https://ravimathuriya.github.io/lyricsfinder/"
    },
  {
      title: "Rock Paper Scissor",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/TY35m52v/rock.png",
      gitURL: "https://ravimathuriya.github.io/rockpaperscissor/"
    },
  {
      title: "Coin Flipping",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/KYRdgNw3/co.png",
      gitURL: "https://ravimathuriya.github.io/flipthecoin/"
    },
  {
      title: "Domain Name Finder",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/7YS0KpGM/dom.png",
      gitURL: "https://ravimathuriya.github.io/domainnamefinder/"
    },
  {
      title: "Text Converter",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/rpHNB58S/conver.png",
      gitURL: "https://ravimathuriya.github.io/home"
    },
  {
      title: "Avatar Generator",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/0NvspJg0/avatar.png",
      gitURL: "https://ravimathuriya.github.io/avatargenerator/"
    },
    {
      title: "Movie Mania",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/tTX7kkxZ/Screenshot-4.png",
      gitURL: "https://ravimathuriya.github.io/movieapp/"
    },
    {
      title: "Dictionary Application",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/502MJb2W/Screenshot-5.png",
      gitURL: "https://ravimathuriya.github.io/dictionaryapplication/"
    },
    {
      title: "Currency Converter",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/Bb8DP74F/cur.png",
      gitURL: "https://ravimathuriya.github.io/currencyconverter/"
    },
    {
      title: "US Intraday Charts",
      description: "to be updated",
      imageURL: "https://i.postimg.cc/L40Xckpp/Screenshot-6.png",
      gitURL: "https://ravimathuriya.github.io/usintradaycharts/"
    },
  ]

  

  return (
    < >
    
      <div className='container-fluid' >
        <div className="row justify-content-md-center" id='reverse'>
          <Body />
          <div className='col border mx-5 my-5' id='contact'>
            <div id="contact-sizing">
              <h2>Projects </h2>
              <hr />
              { projects.map((project, index)=>{
                return (<ProjectCard key={index} title={project.title} description={project.description} imageURL={project.imageURL} gitURL={project.gitURL}  />)
              }) }
            </div>
          </div>
        </div>
     </div>

    </>
  );
};

export default Projects;
