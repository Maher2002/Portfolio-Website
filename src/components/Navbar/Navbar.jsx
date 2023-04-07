import Toggle from "../Toggle/Toggle";

import { Link } from "react-scroll";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes["n-wrapper"]}>
      <div className={classes["n-left"]}>
        <div className={classes["n-name"]}>Andrew</div>
        <Toggle />
      </div>

      <div className={classes["n-right"]}>
        <div className={classes["n-list"]}>
          <ul>
            <Link
              spy={true}
              to={"Navbar"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to={"Services"} smooth={true}>
              <li>Services</li>
            </Link>

            <Link spy={true} to={"Experience"} smooth={true}>
              <li>Experience</li>
            </Link>

            <Link spy={true} to={"Portfolio"} smooth={true}>
              <li>Portfolio</li>
            </Link>

            <Link
              spy={true}
              to={"Testimonials"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className={classes["n-button"] + " button"}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
