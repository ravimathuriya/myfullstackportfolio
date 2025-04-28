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
            <p>Hi, My name is Ravi Mathuriya, and I am from Aligarh, Uttar Pradesh. I hold a background in Electrical Engineering but have transitioned into the world of Web Development. With over 2 years of hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js), I’ve found my true passion in creating dynamic, scalable, and user-focused web applications. After spending 5 years in the electrical field, I decided to follow my interest in technology and software development, and now I am fully committed to advancing my career in web development. I am excited to contribute my skills and continue growing in a MERN stack-focused role, building innovative solutions and applications.</p>
            <h3>I Like</h3>
            
              <ul>
                <li>Playing Cricket</li>
                <li>Keep Tracking Share Market</li>
                <li>Watching Movies</li>
                <li>Listning Music</li>
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


