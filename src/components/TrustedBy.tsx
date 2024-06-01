import steps from "../assets/trusted-company-logos/steps.svg";
import mango from "../assets/trusted-company-logos/mango.svg";
import foodNetwork from "../assets/trusted-company-logos/food-network.svg";
import foodCoUk from "../assets/trusted-company-logos/food-co-uk.svg";
import bookOff from "../assets/trusted-company-logos/book-off.svg";
import gSeries from "../assets/trusted-company-logos/g-series.svg";
import { motion } from "framer-motion";

export const visible = { opacity: 1, y: 0, transition: { duration: 0.6 } };

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};
const TrustedBy = () => {
  const companiesLogo = {
    steps,
    mango,
    foodNetwork,
    foodCoUk,
    bookOff,
    gSeries,
  };
  return (
    <section className="trusted_by">
      <motion.div
        className="container"
        transition={{ staggerChildren: 0.3 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.9, once: true }}
      >
        <motion.h2 variants={itemVariants} className="section_heading">
          We Are Trusted by{" "}
        </motion.h2>
        <motion.ul
          variants={itemVariants}
          className="logo_container  list-unstyled justify-content-center align-items-center flex-wrap"
        >
          {Object.entries(companiesLogo).map(([alt, logo]) => (
            <li className="company_logo mt-2">
              <img src={logo} alt={alt} />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
