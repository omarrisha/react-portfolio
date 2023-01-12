import React from "react";
import "./About.css";

const MainTec = () => {
  return (
    <section className="about container section">
      <h2 className="section__title">What am I good at?</h2>
      <div className="">
        <div className="about__boxes grid paper-box">
          <div className="about__box">
            <span className="logos-tacs html">
              <i className="fa-brands fa-html5 html"></i>
              <span> HTML </span>
            </span>
          </div>

          <div className="about__box">
            <span className="logos-tacs css">
              <i class="fa-brands fa-css3 css"></i>
              <span> CSS </span>
            </span>
          </div>

          <div className="about__box">
            <span className="logos-tacs js">
              <i class="fa-brands fa-square-js js"></i>
              <span> JS </span>
            </span>
          </div>

          <div className="about__box">
            <span className="logos-tacs react">
              <i class="fa-brands fa-react react"></i>
              <span> React </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTec;
