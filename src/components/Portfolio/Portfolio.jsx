import React, { useState } from "react";
import Projects from "./Projects";
import "./Portfolio.css";

const Portfolio = () => {
  const [items, setItems] = useState(Projects);
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">What have I done so far?</h2>
      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, url } = item;
          return (
            <div className="work__card paper-box" key={id}>
              <div className="work__thumnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__title">{title}</h3>
              <a href={url} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
