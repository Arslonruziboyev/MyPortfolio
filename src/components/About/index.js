import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index.js";

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
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
    </div>
  );
};

export default About;
