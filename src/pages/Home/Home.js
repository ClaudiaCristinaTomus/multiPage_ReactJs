import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="contentHome">
        <div className="left">
          <h1 className="titleHome">SO, YOU WANT TO TRAVEL TO </h1>
          <h1 className="secondTitleHome">SPACE</h1>
          <p className="paragraphHome">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right">
          <button className="ctaHome">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
