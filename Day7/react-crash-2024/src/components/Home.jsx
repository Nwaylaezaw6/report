import React from "react";
import "./Navbar.css";
const Home=(props)=>{
    const {name,age,job}=props;
    return(
        <div className="container">
        <div className="profile-div">
            <h3>Name:{name}</h3>
            <h3>Age:{age}</h3>
            <h3>Job:{job? job:"Unknow"}</h3>
        </div></div>
    );
}

export default Home;