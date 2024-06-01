import fmcgs from "../assets/featured-products/fmcgs.png";
import farmProduce from "../assets/featured-products/farm-produce.png";
import gadgets from "../assets/featured-products/gadgets.png";
import construction from "../assets/featured-products/construction.png";
import clsx from "clsx";
import Button from "./Button";
import ArrowIcon from "./ArrowIcon";
import { ReactNode } from "react";
import Countdown from "./Countdown";
import { formatInUSD } from "../utils";
import { motion } from "framer-motion";
import { itemVariants } from "./TrustedBy";
const FeaturedProducts = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  return (
    <motion.section
      className="featured-product container"
      transition={{ delayChildren: 0.3 }}
    >
      <motion.h2 variants={itemVariants} className="section_heading">
        Featured Products
      </motion.h2>

      <div className="section_body row">
        <div className=" col-lg-3 col-sm-6 col-10 mx-auto">
          <FeaturedProductsCard
            cardImg={fmcgs}
            saleType={"Summer Sale"}
            bgColor="bg-primary-dark"
            title={"FMCGS"}
          >
            <p className="fs-7">
              Up to <span className="text-bright-red">64% OFF</span>
            </p>
          </FeaturedProductsCard>
        </div>
        <div className=" col-lg-3 col-sm-6 col-10 mx-auto">
          <FeaturedProductsCard
            className="text-white bg-red"
            cardImg={farmProduce}
            saleType="Best Deals"
            title="Farm Produce"
            buttonColor="white"
          >
            <Countdown endDate={endDate} />
          </FeaturedProductsCard>
        </div>
        <div className=" col-lg-3 col-sm-6 col-10 mx-auto">
          <FeaturedProductsCard
            cardImg={gadgets}
            saleType="85% VAT free"
            title="Gadgets"
            className="text-primary-dark"
          >
            <p className="fs-7">
              Started at{" "}
              <span className="text-bright-red fw-semibold">
                {formatInUSD(78)}
              </span>
            </p>
          </FeaturedProductsCard>
        </div>
        <div className=" col-lg-3 col-sm-6 col-10 mx-auto">
          <FeaturedProductsCard
            cardImg={construction}
            saleType="85% VAT free"
            title="Construction"
          >
            <p className="fs-7">
              Started at{" "}
              <span className="text-bright-red fw-semibold">
                {formatInUSD(78)}
              </span>
            </p>
          </FeaturedProductsCard>
        </div>
      </div>
    </motion.section>
  );
};

interface FeaturedProductsCardProps {
  cardImg: string;
  children?: ReactNode;
  saleType: string;
  bgColor?: string;
  title: ReactNode;
  className?: string;
  buttonColor?: "red" | "white";
}
const FeaturedProductsCard = ({
  cardImg,
  children,
  saleType,
  bgColor,
  title,
  className,
  buttonColor = "red",
}: FeaturedProductsCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ staggerChildren: 0.3 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={clsx(
        "featured-product_card rounded-3 py-4",
        bgColor,
        className
      )}
      style={{ backgroundImage: `url(${cardImg})` }}
    >
      <div className="card_header text-center">
        <div className="">
          <h6 className="fs-9 text-uppercase">{saleType}</h6>
          <h3 className="fs-3 font-semibold">{title}</h3>
        </div>
        {children}
        <Button
          icon={<ArrowIcon />}
          color={buttonColor}
          className="fs-8 mt-auto"
        >
          Shop Now
        </Button>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
