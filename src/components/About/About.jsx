import "./About.css";
import AboutAvatar from "../../assets/images/avatar-2.svg";
import MainTec from "./MainTec.jsx";
import CV from "../../../public/tabellarischer_Lebenslauf_omarrisha.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Who am I?</h2>
      <div className="about__container">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a tenacious problem-solver who started recently his journey
              in programming through web development world. 👨‍💻
            </p>
            <a href={CV} target="_blank" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend Development</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend Development</h3>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainTec />
    </section>
  );
};

export default About;
