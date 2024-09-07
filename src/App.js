import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Msgstate from "./Context/Msgstate";


function App() {
  const title = "RAVI MATHURIYA";

  


  return (
    <>
    <Msgstate>
      <BrowserRouter>
        <Navbar title={title} />
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="resume" element={<Resume/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      </Msgstate>
    </>
  );
}

export default App;
