import React from "react";
import Body from "./Body";



const About = () => {


  return (
    <>
      <div className='container-fluid' >
        <div className="row justify-content-md-center" id='reverse'>
          <Body />
          <div className='col border mx-5 my-5' id='about'>
            <h2>About Me</h2>
            <hr />
            <h3 >Intro</h3>
            <p>Hi, My Name is Ravi Mathuriya. I belong to Aligarh city which is situated in Uttar Pradesh. I am an Electrical Engineer. I’m passionate about today’s topic because, I am aspiring frontend develpoer. I want to work in IT Sector because of my passion to learn and to work in the IT Sector. Recentely, I have  skilled in ReactJs and front-end development. Now, I am learning MERN stack development to became a full stack developer. I am fresher in IT sector but I have experienced 5+ years in various corporate sector. </p>
            <h3>I Like</h3>
            
              <ul>
                <li>Playing Cricket</li>
                <li>Keep Tracking Share Market</li>
                <li>Watching Movies</li>
                <li>Listing Movies</li>
                <li>Travelling New Cities</li>
              </ul>

              <h3>I Dream Of</h3>
            
              <ul>
                <li>Inspiring and feeling inspired.</li>
                <li>Enabling a brighter future for everyone, regardless of political or socioeconomic status.</li>
                <li>Treating every individual with genuine kindness and respect.</li>
                <li>Staying curious.</li>
                <li>Continually improving.</li>
                <li>You not checking the commit history for earlier drafts of this file.</li>
              </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
