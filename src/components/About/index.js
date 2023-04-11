import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index.js";
import { useEffect, useState } from "react";
import {
  faNode,
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass(`text-animate-hover`);
    }, 4000);
  }, []);
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          recusandae commodi dolore quibusdam animi? Maiores. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. At recusandae commodi dolore
          quibusdam animi? Maiores.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          recusandae commodi dolore quibusdam animi? Maiores.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          recusandae commodi dolore quibusdam animi? Maiores.Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. At recusandae commodi dolore
          quibusdam animi? Maiores.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. At recusandae commodi dolore quibusdam animi?
          Maiores.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGit} color="#ec4d28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;
