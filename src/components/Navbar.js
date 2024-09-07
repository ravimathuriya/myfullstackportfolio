import React, {useEffect}  from "react";
import "../Static/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {

  let location = useLocation();

  useEffect(() => {

    const urllocation = location.pathname;
    const newlocation = urllocation.charAt(1).toUpperCase()+urllocation.slice(2);
    document.title = `${newlocation} | MyProfile`;
  });

  const hambergertoggle = () => {
    document.getElementById("openhamburgermenu").classList.add("openmenu");
    document.getElementById("openhamburgermenu").classList.remove("closemenu");
  };

  const closebutton = () => {
    document.getElementById("openhamburgermenu").classList.remove("openmenu");
    document.getElementById("openhamburgermenu").classList.add("closemenu");
  };

  return (
    <>
      <div className="nav">
        <nav className="navbar navbar-expand-lg " data-bs-theme="light">
          <div className="container-fluid">
            <Link className="navbar-brand new" to="/">
              {props.title}
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hamburger-icon" onClick={hambergertoggle}>
              <div id="hamburger">☰</div>
            </div>
          </div>
        </nav>

        <div id="openhamburgermenu" className="hamburgermenu">
          <ul>
            {/* <img onClick={closebutton} src={close} alt="close" /> */}
            <div id="close" onClick={closebutton}>
              ✕
            </div>
            <li>
              <Link to="/">{props.title}</Link>
            </li>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
     
    </>
  );
}
