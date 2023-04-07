import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

import CV from "./CV_mohammed maher alhomsy.pdf";

import themeContext from "../../Context";

import { useContext } from "react";

import { motion } from "framer-motion";

import "./Services.css";

const Services = (props) => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          My Awesome
        </span>
        <span>services</span>
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          consequatur
          <br /> incidunt a voluptatibus ducimus perferendis cum ex ratione eos,
        </span>

        <a href={CV} download style={{ width: "fit-content" }}>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            img={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-7rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            img={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JS, React"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            img={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
