import React from 'react'
import Body from './Body'

const Resume = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="row justify-content-md-center" id='reverse'>
          <Body />
          <div className='col border mx-5 my-5' id='resume'>
            <div id="contact-sizing">
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
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    Diploma In Electrical Engineering
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Board of Technical (U.P) - 2014
                  </span>
                </p>

                <p>
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    Higher Secondary Education From Indian Public Inter College
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Uttar Pradesh Board - 2011
                  </span>
                </p>

                <p>
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    Secondary School Education From Indian Public Inter College
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Uttar Pradesh Board - 2009
                  </span>
                </p>
              </div>

              <hr />
              <div id="experience">
                <h3>Experience</h3>
                <div className="company-section">
                  <h4>Technology Kart  - Front end Developer</h4>
                  <span style={{ fontSize: "13px" }}>Jan'2023 - Till Now</span>
                  <p>I have the privilege of serving as a Front-end Developer for 1.5+ years. As a Front End Developer, I have prior experience creating and maintaining interactive web applications, utilizing modern web technologies such as React.js, JavaScript, and HTML/CSS, as well as an understanding of optimization techniques and user experience principles. 
                  I have resulted in an improved website performance, decreased page load speeds, and an overall positive impact on the company's performance. 
                  </p>
                  <ul>
                    <li>I have experienced with 1.5+ years in designing, developing and maintaining front-end web applications.</li>
                    <li>Utilize modern web technologies such as React.js and best practices for user experience and accessibility.</li>
                    <li>Transform app designs into front-end code with React.js, HTML, CSS, and JavaScript.</li>
                    <li>Work with back-end developers to integrate UI components with APIs and databases.</li>
                    <li>Debug errors, troubleshoot issues, and perform routine performance optimizations.</li>
                    <li>Basic understanding of server-side CSS pre-processing platforms, such as SASS.</li>
                    <li>Good understanding of asynchronous request handling, partial page updates.</li>
                  </ul>
                </div>

                <div className="company-section">
                  <h4>Delhivery Limited - Associate</h4>
                  <span style={{ fontSize: "13px" }}>Jan'2022 - July'2022</span>
                  <p>I have had served as a Associate for 7 months, where I played a pivotal role in ensuring the successful delivery of warehouse projects. My experience encompasses managing projects from initiation to completion, overseeing all aspects of project planning, execution, and delivery.</p>
                  <ul>
                    <li>Responsible for project coordination and taking care of all project aspects like data validation, scheduling, quality checks and regular status updation with the client and internal teams.</li>
                    <li>Supervise and oversee all aspects of procurement and warehouse activities.</li>
                    <li>Monitoring the effectiveness of the application and implementation of Company policies and procedures applicable to the Procurement & Warehouse Department.</li>
                    <li>Guide the selection, development, and management of suppliers to meet commodity cost and performance goals, with emphasis placed on ability to identify cost targets for relevant technology and product roadmaps.</li>
                    <li>Assisting and developing changes needed to improve the effectiveness of the Company Management System Procurement and warehouse area.</li>
                  </ul>
                </div>

                <div className="company-section">
                  <h4>Larsen & Toubro Ltd. - AutoCAD Designer & Site Engineer</h4>
                  <span style={{ fontSize: "13px" }}>Sept'2018 - Nov'2021</span>
                  <p>I have had worked as a AutoCAD Designer & Site Engineer for 3+ Years. My experience encompasses managing projects from initiation to completion, overseeing all aspects of project planning, execution, and delivery.</p>
                  <ul>
                    <li>Execution & Commissioning of 33 Kv Lines ,11Kv Lines, LT AB Cable, Installation of distribution transformers, Energy  meters connection works etc. either which is related to civil or electrical as per REC drawings.</li>
                    <li>Ensure Quality and safety at Site.and ensure availability PPEs ,tools etc during Audit.</li>
                    <li>Ensuring 100% accuracy check done in all the installed meter at site and same mentioned in service order </li>
                    <li>JMS preparation & Certification from client  and also handing over the same.</li>
                    <li>Preparation of Autocad drawings  of all survey as well as final site work.</li>
                    <li>BOQ Preparation & finalization from client.</li>
                    <li>Preparing weekly as well as monthly projection of job completion, inspection & handover.</li>
                    <li>Management of Sub-Contractor for completion of work, Finalization of MB with proper material reconciliation.</li>
                    <li>Also physical site verification of balance material at contractor store to avoid theft or misuse of material on monthly basis.</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div id="skills">
                <h3>Skills</h3>
                <div class="progress" style={{height:"30px" }}>
                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: "75%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>ReactJs</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-primary" role="progressbar" style={{ width: "70%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>jQuery</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-success" role="progressbar" style={{ width: "90%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>Git</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>JavaScript</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-info" role="progressbar" style={{ width: "90%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>HTML & CSS</span></div>
                </div>

                <div class="progress" style={{height:"30px" }}>
                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>Microsoft Excel</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-primary" role="progressbar" style={{ width: "70%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>AutoCAD</span></div>
                </div>
              </div>

              <hr />
              <div id="courses">
                <h3>Courses</h3>
                <div className="course-section">
                  <h4>Certification in complete web design (HTML, CSS, Javascript, jQuery, React, Git)</h4>
                  <span style={{ fontSize: "13px" }}>Certified from Udemy</span>
                  <ul className='my-2'>
                    <li>
                    Complete HTML5 & CSS3 with 2 projects
                    </li>
                    <li>jQuery basics including learning material & 1 project</li>
                    <li>TYPESCRIPT Basics</li>
                    <li>Complete VUE JS 3 with 5 projects including Vue Router</li>
                    <li>GIT branching system & workflows for software releases</li>
                    <li>Reponsive Design with CSS Media Queries</li>
                    <li>Complete JAVASCRIPT including learning material, 5 lists of exercises & 2 projects</li>
                    <li>Use Ajax & JSON to work with external APIs</li>
                  </ul>
                </div>

                <div className="course-section my-4">
                  <h4>Certificate in MEP Design</h4>
                  <span style={{ fontSize: "13px" }}>Certified from CADD Centre</span>
                  <ul className='my-2'>
                    <p>Certificate program in MEP design is to train mechanical engineers in the process of designing the mechanical, electrical, and plumbing systems such as heating, ventilation, air conditioning (HVAC), lighting, power, water supply and drainage. This MEP Design course offers training in CAD tools highly suitable for creating detailed MEP drawings and specifications for the installation of the systems, including the selection of equipment and materials, sizing of components, and layout of ducts, pipes, and wiring.</p>
                    <li>Create design and digital models of HVAC systems, electrical layouts, and plumbing systems</li>
                    <li>Carry out design analysis, and documentation</li>
                    <li>Optimize the layout of building systems</li>
                  </ul>
                </div> 
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
