import firstImage from "../assets/why-choose-us/first-image.png";
import secondImage from "../assets/why-choose-us/second-image.png";
import largeImage from "../assets/why-choose-us/large-image.png";
import { motion } from "framer-motion";
import { itemVariants } from "./TrustedBy";
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us container-xxl padding-container">
      <div className=" section_body row align-items-center">
        <div className="col-lg-6 col-12">
          <h2 className="section_heading mb-3 text-start">
            Why <span className="text-bright-red">Choose</span> Us
          </h2>
          <motion.ul
            variants={itemVariants}
            transition={{ staggerChildren: 0.3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            className="li"
          >
            <li className="list-item">
              <h4 className="d-inline">Savings: </h4>
              <p className="d-inline">
                We help you save a lot of money if you purchase from us.
              </p>
            </li>
            <li className="list-item">
              <h4 className="d-inline">Trusted Network: </h4>
              <p className="d-inline">
                We work directly with reputable distributors and manufacturers.
              </p>
            </li>
            <li className="list-item">
              <h4 className="d-inline">Convenience of Group Buying: </h4>
              <p className="d-inline">
                Enjoy the benefits of bulk buying without the hassle.
              </p>
            </li>
            <li className="list-item">
              <h4 className="d-inline">Global Reach: </h4>
              <p className="d-inline">
                Discover unique products from around the world through
                international group buying. Explore new brands and expand your
                shopping horizons!
              </p>
            </li>
            <li className="list-item">
              <h4 className="d-inline">Start for free: </h4>
              <p className="d-inline">
                Begin your group buying experience without any initial cost.
              </p>
            </li>
          </motion.ul>
        </div>
        <motion.div
          className="col-lg-6 col-12 row mt-5 mt-lg-0"
          transition={{ staggerChildren: 0.3 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <motion.div variants={itemVariants} className="col-6 grid_image">
            <img
              src={firstImage}
              alt=""
              className=" object-fit-cover grid_img "
            />
          </motion.div>
          <motion.div variants={itemVariants} className="col-6 grid_image">
            <img
              src={secondImage}
              alt=""
              className=" object-fit-cover grid_img"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="col-10 ms-auto mt-3">
            <img src={largeImage} alt="" className="large_img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
