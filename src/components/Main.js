import React from "react";
import { Link } from 'react-router-dom';
import me from '../images/Myself.png';
import arrow from '../images/right-arrow.png';
import github from '../images/github.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';

const Main = () => {
    return (
        <div className="main-container">
            <img className="main-image" src={me}></img>
            <div className="vl"></div>
            <div className="main-text">
                <h1 className="main-text-h1">Hi, I'm <span>Robert Smith!</span></h1>
                <h2 className="main-text-h2">Junior Frontend Developer</h2>
                <button className="main-text-button"><Link className="main-text-link" to="/work">See My Projects <img src={arrow} className="main-arrow"></img></Link></button>
                 {/* icons by Icons8 https://icons8.com */}
                <div className="main-icons"> 
                    <a href="https://github.com/RobSmithDevelopment"><img className="main-icons-links" src={github}></img></a> 
                    <a href="mailto:roba.smith@hotmail.com "><img className="main-icons-links" src={email}></img></a> 
                    <a href="https://www.linkedin.com/in/robert-smith-62928b214/"><img className="main-icons-links" src={linkedin}></img></a>
                </div>
            </div>
        </div>
           
           
    )
}

export default Main;