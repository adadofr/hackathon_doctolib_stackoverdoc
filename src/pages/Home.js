import React, { Component } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import "../styles/Home.scss";
import docTech from "../images/doc-tech.png";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <main className="home-main">
          <h1 className="Welcome">
            Join the best community of healthcare Practitians !
          </h1>
        </main>

        <div className="Sub-home-container-button">
          <NavLink to="/sign-up">
            <Button outline>Create a free account</Button>
          </NavLink>
          <NavLink to="/login">or login &rarr; </NavLink>
        </div>
        <img src={docTech} alt="stackOverDoc" className="background-img-home" />
        <p>
          Share your knowledge with your peers and find the answers to your
          questions. StackOverDoc ranks responses in order of relevance, using
          an upvote system.
        </p>
      </div>
    );
  }
}
export default Home;
