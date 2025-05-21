import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
           <Routes>
        <Route path="/" element={<Home name="Aung Aung" age={23} job="Developer"/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Home name="Zaw Zaw" age={22} job="Chef" />
      <Home name="Mg Mg" age={21} job=""/>
    </div>
  )
};

export default App;
