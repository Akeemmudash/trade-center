import Button from "../Button";
import CartIcon from "../CartIcon";
import darkSvg from "../../assets/hero-svg-darkred.svg";
import brightSvg from "../../assets/hero-svg-brightred.svg";
import heroMale from "../../assets/hero-male.png";
import heroFemale from "../../assets/hero-female.png";

import "./hero.css";
import { motion } from "framer-motion";
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};
const Hero = () => {
  return (
    <section className="hero">
      <div className="container row h-100 mx-auto ">
        <div className=" header_container col-12 col-lg-6 ">
          <motion.header
            className="header "
            transition={{ staggerChildren: 0.3 }}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="fw-bold" variants={itemVariants}>
              Get{" "}
              <span className="text-bright-red">Wholesale Prices Without</span>{" "}
              Buying Wholesale{" "}
              <span className="text-bright-red">Quantities</span>
            </motion.h1>
            <motion.p className="fw-medium mt-4" variants={itemVariants}>
              Join our community and unlock access to wholesale prices on
              everyday essentials through shared bulk purchases.
            </motion.p>
            <motion.div className="my-4 " variants={itemVariants}>
              <Button icon={<CartIcon />} className="hero_button">
                Start Shopping
              </Button>
            </motion.div>
          </motion.header>
        </div>
        <motion.div
          className="hero_banner col-lg-6 col-12 position-relative  user-select-none "
          initial={{ translateX: 400, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "linear",
          }}
        >
          <div className="hero_img">
            <img
              src={heroMale}
              alt="hero image"
              className="position-absolute "
            />
            <img
              src={heroFemale}
              alt="hero image"
              className="position-absolute  "
            />
          </div>
          {
            <div className="hero_wave">
              <img
                src={brightSvg}
                alt=""
                className="position-absolute top-0 end-0 h-100 z-n1 "
              />
              <img
                src={darkSvg}
                alt=""
                className="position-absolute top-0 end-0 h-100 z-n1 "
              />
            </div>
          }
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
