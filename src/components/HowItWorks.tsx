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
      className="how-it-works container-xxl padding-container"
    >
      <h2 className="section_heading">How it Works</h2>
      <div className=" section_body d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-lg-5 col-12 position-relative  d-flex align-items-end justify-content-center">
          <div className="bg-circle  position-absolute z-n1 rounded-circle"></div>
          <img
            src={sectionImage}
            alt="section image"
            className="section_img "
          />
        </div>
        <div className="col-lg-6 col-12 row px-0 mt-lg-0 ">
          <HowItWorksCard title="Browse Products" logoSrc={box}>
            Find the items you need at true wholesale prices
          </HowItWorksCard>
          <HowItWorksCard title="Join a Bulk Buy" logoSrc={shoopingBag}>
            Contribute to a shared purchase with other members{" "}
          </HowItWorksCard>
          <HowItWorksCard
            title="Pay Your Share of Wholesale Price"
            logoSrc={hand}
          >
            Only pay for the portion you order.{" "}
          </HowItWorksCard>
          <HowItWorksCard title="Enjoy!" logoSrc={truck}>
            Receive high-quality products directly at your doorstep.{" "}
          </HowItWorksCard>
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
      className="how-it-works_card col-6 d-flex align-items-center flex-column text-center"
    >
      <div className="logo rounded-circle bg-light-pink d-flex align-items-center justify-content-center">
        {<img src={logoSrc} alt="feature-icon" />}
      </div>
      <div>
        <h3 className="mb-2 fw-semibold text-capitalize fs-5">{title}</h3>
        <p className="text-medium-gray fs-7">{children}</p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
