import { motion } from "framer-motion";
import Button from "./Button";
import CartIcon from "./CartIcon";
import { itemVariants } from "./TrustedBy";

const GlobeBanner = () => {
  return (
    <section className="globe-banner position-relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.7, once: true }}
        className="overlay position-absolute w-100 h-100 d-flex bg-black bg-opacity-75 align-items-center justify-content-center text-white flex-column"
      >
        <motion.h2 className="fs-2 text-center" variants={itemVariants}>
          join a Community of Global Shoppers. join different shipment groups
          across  different product categories.
        </motion.h2>
        <div className="mt-3">
          <Button icon={<CartIcon />} color="white">
            Start Shopping
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobeBanner;
