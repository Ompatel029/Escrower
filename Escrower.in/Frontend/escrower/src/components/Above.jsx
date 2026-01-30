import React from "react";
import "./About.css";
import MovingText from '../components/MovingText';
import Introduce from "../components/Introduce";
import Portfolio from "../components/Portfolio";
import Newsletter from "../components/Newlatter";
import Imagescroller from "../components/Imagescroller";
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <p className="about-welcome">WELCOME</p>

          <h1 className="about-title">
            Easy ways to use AI tools,
            <br />
            and tools to build AI.
          </h1>

          <p className="about-desc">
            Discover simple and powerful ways to use modern AI tools to
            build creative solutions and improve productivity.
          </p>

          <div className="about-images">
            <div className="img-card small">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
                alt=""
              />
            </div>

            <div className="img-card large">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="strength-section">
        <div className="strength-container">
          <div className="strength-left">
            <p className="strength-tag">OUR PRACTICE</p>
            <h2>Our strength</h2>

            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia.
            </p>

            <p>
              Interactively foster 24/365 outside the box thinking after
              interoperable infomediaries. Phosfluorescently predominate
              reliable value with open-source interfaces.
            </p>
          </div>

          <div className="strength-right">
            <div className="bar-item">
              <span>Design</span>
              <div className="progress">
                <div className="progress-fill" style={{ width: "70%" }} />
              </div>
              <p>70%</p>
            </div>

            <div className="bar-item">
              <span>Technology</span>
              <div className="progress">
                <div className="progress-fill" style={{ width: "90%" }} />
              </div>
              <p>90%</p>
            </div>

            <div className="bar-item">
              <span>Animation</span>
              <div className="progress">
                <div className="progress-fill" style={{ width: "70%" }} />
              </div>
              <p>70%</p>
            </div>
          </div>
        </div>
        <MovingText />
      </section>
      <Introduce />
      <Portfolio />
      <Newsletter />
      <Imagescroller />

    </>
  );
};

export default About;
