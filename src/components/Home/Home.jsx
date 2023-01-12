import "./Home.css";
import Me from "../../assets/images/meImg.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro paper-box">
        <img src={Me} alt="logo" className="home__img" />
        <h1 className="home__name ">Omar Risha</h1>
        <span className="home__education">Web Developer</span>
        <HeaderSocials />
        </div>
        <ScrollDown />
    </section>
  );
};

export default Home;
