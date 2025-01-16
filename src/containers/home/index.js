import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigationToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Avinash Gupta
          <br />
          Front end developer
        </h1>
      </div>
      <div className="home__contact-me">
        <button onClick={handleNavigationToContactMePage}> Hire Me</button>
      </div>
    </section>
  );
};

export default Home;
