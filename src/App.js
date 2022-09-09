import React from 'react';
import About from "./components/About";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
