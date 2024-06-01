import box from "../assets/how-it-works/box.svg";
import shoopingBag from "../assets/how-it-works/shopping-bag.svg";
import hand from "../assets/how-it-works/hand.svg";
import truck from "../assets/how-it-works/delivery-truck.svg";
import sectionImage from "../assets/how-it-works/section-img.png";
import { motion } from "framer-motion";
import { itemVariants } from "./TrustedBy";

interface HowItWorksCard {
  children: React.ReactNode;
  title: string;
  logoSrc: string;
}
const HowItWorks = () => {
  return (
    <motion.section
      transition={{ staggerChildren: 0.3 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="how-it-works container"
    >
      <h2 className="section_heading">How it Works</h2>
      <div className=" section_body d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-lg-6 col-12 ">
          <div className=" position-relative  d-flex align-items-end justify-content-center">
            <div className="bg-circle  position-absolute z-n1 rounded-circle"></div>
            <img
              src={sectionImage}
              alt="section image"
              className="section_img"
            />
          </div>
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 ">
          <div className="row">
            <div className="col-sm-6 col-12">
              <HowItWorksCard title="Browse Products" logoSrc={box}>
                Find the items you need at true wholesale prices
              </HowItWorksCard>
            </div>
            <div className="col-sm-6 col-12">
              <HowItWorksCard title="Join a Bulk Buy" logoSrc={shoopingBag}>
                Contribute to a shared purchase with other members{" "}
              </HowItWorksCard>
            </div>
            <div className="col-sm-6 col-12">
              <HowItWorksCard
                title="Pay Your Share of Wholesale Price"
                logoSrc={hand}
              >
                Only pay for the portion you order.{" "}
              </HowItWorksCard>
            </div>
            <div className="col-sm-6 col-12">
              <HowItWorksCard title="Enjoy!" logoSrc={truck}>
                Receive high-quality products directly at your doorstep.{" "}
              </HowItWorksCard>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const HowItWorksCard = ({
  children,
  title,
  logoSrc,
}: HowItWorksCard) => {
  return (
    <motion.div
      variants={itemVariants}
      className="how-it-works_card col-6 d-flex align-items-center flex-column text-center w-100"
    >
      <div className="logo rounded-circle bg-light-pink d-flex align-items-center justify-content-center">
        {<img src={logoSrc} alt="feature-icon" />}
      </div>
      <div className="">
        <h3 className="card_title mb-2 fw-semibold text-capitalize">{title}</h3>
        <p className=" card_description text-medium-gray">{children}</p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
