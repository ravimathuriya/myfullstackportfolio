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
                  <h4>Ecom Express Ltd. - Associate (Web Developer)</h4>
                  <span style={{ fontSize: "13px" }}>May'2023 - Till Now</span>
                  <p>As an Associate Web Developer at Ecom Express Ltd., I leverage my expertise in the MERN stack (MongoDB, Express.js, React, Node.js) to build and maintain robust, scalable, and user-centric web applications. I am responsible for developing dynamic, real-time features and improving the performance of our web-based platforms. My role includes designing both front-end and back-end systems, integrating APIs, and ensuring a seamless user experience. I collaborate with cross-functional teams to deliver high-quality web applications while continuously optimizing performance and ensuring security standards are met. 
                  </p>
                  <ul>
                    <li>Designed and developed full-stack web applications with React, Node, and MongoDB.</li>
                    <li>Integrated REST APIs with front-end applications for real-time data handling.</li>
                    <li>Enhanced application performance with optimized server-side code and database queries.</li>
                    <li>Supported full-stack development projects from concept through delivery.</li>
                    <li>Built responsive interfaces using React.js, and Bootstrap.</li>
                    <li>Developed backend APIs and database schemas using Node.js and MongoDB.</li>
                    <li>Assisted in bug fixing, testing, and UI/UX improvements across web platforms.</li>
                  </ul>
                </div>

                <div className="company-section">
                  <h4>Delhivery Limited - Associate (Procurement) </h4>
                  <span style={{ fontSize: "13px" }}>Dec'2021 - Mar'2023</span>
                  <p>I have had served as a Associate for 1.5 years, where I played a pivotal role in ensuring the successful delivery of warehouse projects. My experience encompasses managing projects from initiation to completion, overseeing all aspects of project planning, execution, and delivery.</p>
                  <ul>
                    <li>Created and managed Purchase Orders (POs) for inventory replenishment, packaging materials, and operational supplies, ensuring timely stock availability.</li>
                    <li>Processed Goods Receipt Notes (GRNs) upon delivery of items, verifying quantity, condition, and vendor accuracy in warehouse management systems (WMS/ERP).</li>
                    <li>Performed invoice quantity checks by matching received goods against PO and GRN to ensure consistency before forwarding to finance for payment processing.</li>
                    <li>Coordinated with suppliers and internal teams to resolve discrepancies related to delivery, documentation, or invoicing.</li>
                    <li>Responsible for project coordination and taking care of all project aspects like data validation, scheduling, quality checks and regular status updation with the client and internal teams.</li>
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
                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: "85%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>ReactJs</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>NodeJs</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-success" role="progressbar" style={{ width: "95%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>Git</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>JavaScript</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-info" role="progressbar" style={{ width: "90%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>HTML & CSS</span></div>
                </div>

                <div class="progress" style={{height:"30px" }}>
                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}> MongoDB</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-primary" role="progressbar" style={{ width: "85%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>Express.js</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>  Mongoose</span></div>
                </div>

                <div class="progress my-3" style={{height:"30px" }}>
                  <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%", height:"30px", textAlign:"start" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span style={{paddingLeft:"10px", fontWeight:"600"}}>  RESTful APIs</span></div>
                </div>

              </div>

              <hr />
              <div id="courses">
                <h3>Courses</h3>
                <div className="course-section">
                  <h4>Certification in complete web design (HTML, CSS, Javascript, React, Git, NodeJs, ExpressJs, MongoDB)</h4>
                  <span style={{ fontSize: "13px" }}>Certified from Udemy</span>
                  <ul className='my-2'>
                    <li>
                    Proficient in HTML (structure of web pages) and CSS (styling and layout design).
                    </li>
                    <li>Knowledge of JavaScript for interactive and dynamic web content.</li>
                    <li>Expertise in React for building responsive and efficient user interfaces.</li>
                    <li>Familiar with Responsive Design techniques for mobile-first websites using CSS frameworks like Bootstrap.</li>
                    <li>Experience building server-side applications and handling requests efficiently.</li>
                    <li>Knowledge in setting up web servers, routing, and middleware for RESTful API development.</li>
                    <li>Proficient in using MongoDB as a NoSQL database for data storage, along with schema design.</li>
                    <li>Building and integrating RESTful APIs to communicate between the front-end and back-end.</li>
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


