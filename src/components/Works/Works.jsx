import React from "react";

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import { motion } from "framer-motion";
import "./Works.css";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works fro All these </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          consequatur
          <br /> incidunt a voluptatibus ducimus perferendis cum ex ratione eos,
          <br /> incidunt a voluptatibus ducimus perferendis cum ex ratione eos,
          incidunt
          <br />
          incidunt a voluptatibus ducimus perferendis cum ex ratione eos,
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
