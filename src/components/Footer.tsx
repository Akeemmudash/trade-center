import { Link } from "react-router-dom";
import Button from "./Button";
import footerLogo from "../assets/logo2.png";

import applePay from "../assets/payment-methods/ApplePay.png";
import visa from "../assets/payment-methods/Visa.png";
import discover from "../assets/payment-methods/Discover.png";
import mastercard from "../assets/payment-methods/Mastercard.png";
import securePayment from "../assets/payment-methods/securePayment.png";
import { motion } from "framer-motion";
import { itemVariants } from "./TrustedBy";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.section
        className=" "
        transition={{ staggerChildren: 0.3 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <div className=" container d-flex justify-content-between flex-wrap">
          <div className="col-lg-4 col-md-6 text-center text-sm-start ">
            <motion.h3 variants={itemVariants} className="fs-4 fw-semibold ">
              Subscribe our Newsletter
            </motion.h3>
            <motion.p variants={itemVariants} className="fs-7 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ipsum quis nemo eaque.
            </motion.p>
          </div>
          <div className="subscribe col-lg-4 col-md-6 d-flex  position-relative gap-5 ">
            {" "}
            <input
              type="email"
              className="subscribe_input rounded-pill"
              id="subscribe-email"
              aria-describedby=""
              placeholder="Your email address"
            />
            <Button className="subscribe_button position-absolute end-0">
              Subscribe
            </Button>
          </div>
          <div className="col-md-2 col-sm-4 mx-auto mx-sm-0 col-6 d-flex align-items-start justify-content-lg-start justify-content-between  gap-3 gap-lg-2">
            <div className="social-link flex-shrink-0">
              <Link
                to="#"
                className="text-decoration-none text-white"
                title="facebook"
              >
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2004_115)">
                    <path
                      d="M12.2478 2.98875H13.891V0.12675C13.6075 0.08775 12.6325 0 11.497 0C9.12776 0 7.50476 1.49025 7.50476 4.22925V6.75H4.89026V9.9495H7.50476V18H10.7103V9.95025H13.219L13.6173 6.75075H10.7095V4.5465C10.7103 3.62175 10.9593 2.98875 12.2478 2.98875Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2004_115">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="social-link flex-shrink-0">
              <Link to="#" title="twitter">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.25 2.41888C17.5806 2.7125 16.8674 2.90713 16.1237 3.00163C16.8888 2.54488 17.4726 1.82713 17.7471 0.962C17.0339 1.38725 16.2464 1.68763 15.4071 1.85525C14.7299 1.13413 13.7646 0.6875 12.7116 0.6875C10.6686 0.6875 9.02387 2.34575 9.02387 4.37863C9.02387 4.67113 9.04862 4.95238 9.10938 5.22013C6.0415 5.0705 3.32687 3.60013 1.50325 1.36025C1.18487 1.91263 0.998125 2.54488 0.998125 3.2255C0.998125 4.5035 1.65625 5.63638 2.63725 6.29225C2.04437 6.281 1.46275 6.10888 0.97 5.83775C0.97 5.849 0.97 5.86363 0.97 5.87825C0.97 7.6715 2.24912 9.161 3.9265 9.50413C3.62612 9.58625 3.29875 9.62563 2.959 9.62563C2.72275 9.62563 2.48425 9.61213 2.26038 9.56263C2.7385 11.024 4.09525 12.0984 5.7085 12.1333C4.453 13.1154 2.85888 13.7071 1.13313 13.7071C0.8305 13.7071 0.54025 13.6936 0.25 13.6565C1.88462 14.7106 3.82188 15.3125 5.911 15.3125C12.7015 15.3125 16.414 9.6875 16.414 4.81175C16.414 4.64863 16.4084 4.49113 16.4005 4.33475C17.1329 3.815 17.7482 3.16588 18.25 2.41888Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="social-link flex-shrink-0">
              <Link to="#" title="instagram">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2004_198)">
                    <path
                      d="M16.2343 4.70404C16.1968 3.8539 16.0593 3.26944 15.8624 2.76299C15.6592 2.22541 15.3467 1.74412 14.9372 1.34401C14.5371 0.937683 14.0526 0.621948 13.5212 0.421957C13.0119 0.22502 12.4305 0.0875415 11.5803 0.0500586C10.7238 0.00940124 10.4519 0 8.27963 0C6.10733 0 5.83543 0.00940124 4.98211 0.0468842C4.13197 0.0843671 3.54751 0.221967 3.04118 0.418783C2.50348 0.621948 2.02219 0.934509 1.62209 1.34401C1.21576 1.74412 0.900145 2.22858 0.700033 2.75994C0.503095 3.26944 0.365618 3.85073 0.328135 4.70087C0.287477 5.55736 0.278076 5.82926 0.278076 8.00156C0.278076 10.1739 0.287477 10.4458 0.32496 11.2991C0.362443 12.1492 0.500043 12.7337 0.696981 13.2401C0.900145 13.7777 1.21576 14.259 1.62209 14.6591C2.02219 15.0654 2.50666 15.3812 3.03801 15.5812C3.54751 15.7781 4.1288 15.9156 4.97906 15.9531C5.83225 15.9907 6.10428 16 8.27657 16C10.4489 16 10.7208 15.9907 11.5741 15.9531C12.4242 15.9156 13.0087 15.7781 13.515 15.5812C14.5903 15.1654 15.4404 14.3153 15.8562 13.2401C16.053 12.7306 16.1906 12.1492 16.2281 11.2991C16.2655 10.4458 16.275 10.1739 16.275 8.00156C16.275 5.82926 16.2718 5.55736 16.2343 4.70404ZM14.7935 11.2366C14.759 12.018 14.6278 12.4399 14.5184 12.7212C14.2495 13.4183 13.6963 13.9715 12.9993 14.2403C12.718 14.3497 12.293 14.481 11.5146 14.5153C10.6707 14.5529 10.4176 14.5622 8.2828 14.5622C6.14799 14.5622 5.89171 14.5529 5.05085 14.5153C4.26945 14.481 3.84749 14.3497 3.56619 14.2403C3.21932 14.1121 2.90358 13.909 2.64731 13.6433C2.38163 13.3838 2.17847 13.0713 2.05027 12.7244C1.94087 12.4431 1.80962 12.018 1.77531 11.2397C1.73771 10.3958 1.72843 10.1426 1.72843 8.00779C1.72843 5.87297 1.73771 5.6167 1.77531 4.77596C1.80962 3.99455 1.94087 3.5726 2.05027 3.29129C2.17847 2.9443 2.38163 2.62869 2.65048 2.37229C2.90981 2.10661 3.22237 1.90345 3.56936 1.77537C3.85067 1.66597 4.2758 1.53472 5.05403 1.50029C5.89794 1.46281 6.15116 1.45341 8.28585 1.45341C10.4238 1.45341 10.6769 1.46281 11.5178 1.50029C12.2992 1.53472 12.7212 1.66597 13.0025 1.77537C13.3493 1.90345 13.6651 2.10661 13.9213 2.37229C14.187 2.63174 14.3902 2.9443 14.5184 3.29129C14.6278 3.5726 14.759 3.99761 14.7935 4.77596C14.8309 5.61987 14.8403 5.87297 14.8403 8.00779C14.8403 10.1426 14.8309 10.3927 14.7935 11.2366Z"
                      fill="white"
                    />
                    <path
                      d="M8.27967 3.89136C6.01055 3.89136 4.16949 5.73229 4.16949 8.00153C4.16949 10.2708 6.01055 12.1117 8.27967 12.1117C10.5489 12.1117 12.3898 10.2708 12.3898 8.00153C12.3898 5.73229 10.5489 3.89136 8.27967 3.89136ZM8.27967 10.6677C6.80758 10.6677 5.6135 9.47375 5.6135 8.00153C5.6135 6.52932 6.80758 5.33536 8.27967 5.33536C9.75188 5.33536 10.9458 6.52932 10.9458 8.00153C10.9458 9.47375 9.75188 10.6677 8.27967 10.6677Z"
                      fill="white"
                    />
                    <path
                      d="M13.512 3.72883C13.512 4.25872 13.0823 4.68837 12.5523 4.68837C12.0224 4.68837 11.5928 4.25872 11.5928 3.72883C11.5928 3.19882 12.0224 2.76929 12.5523 2.76929C13.0823 2.76929 13.512 3.19882 13.512 3.72883Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2004_198">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="text-gray"
        transition={{ staggerChildren: 0.3 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <div className="container">
          <div className="d-flex mx-0 flex-wrap gap-5 justify-content-between">
            <div
              className="flex-grow-1 "
              style={{ minWidth: "270px", maxWidth: "320px" }}
            >
              <div className="footer-logo">
                <img src={footerLogo} alt="logo" height={23} width={153} />

                <p className="fs-7 text-white mt-3 text-gray">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida
                  turpis dui, eget bibendum magna congue nec.
                </p>
                <div className="contact text-white fs-7">
                  <span className="phone-number">(219) 555-0114</span> or
                  <span className="email"> Proxy@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="d-flex gap-5 flex-wrap">
              <motion.div variants={itemVariants} className="">
                <h6 className="text-white fw-semibold">My Account</h6>
                <ul className="ms-0 list-unstyled ps-0 lh-lg fs-7">
                  <li>
                    <Link to="#" className="quick-link">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Shoping Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Wishlist
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="">
                <h6 className="text-white fw-semibold">Helps</h6>
                <ul className="ms-0 list-unstyled ps-0 lh-lg fs-7">
                  <li>
                    <Link to="#" className="quick-link">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      faqs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="">
                <h6 className="text-white fw-semibold">Proxy</h6>
                <ul className="ms-0 list-unstyled ps-0 lh-lg fs-7">
                  <li>
                    <Link to="#" className="quick-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Track Order
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="">
                <h6 className="text-white fw-semibold">Categories</h6>
                <ul className="ms-0 list-unstyled ps-0 lh-lg fs-7">
                  <li>
                    <Link to="#" className="quick-link">
                      Fruits & Vegetables
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Meats & Fish
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Bread & Bakery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="quick-link">
                      Beauty & Health
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          <hr />
          <div className="">
            <div className="copyrights d-flex flex-wrap justify-content-between align-items-center ">
              <p className="mb-2 mb-lg-0">
                Trade Center eCommerce © 2021. All Rights Reserved
              </p>
              <div className="payment-methods d-flex gap-2 flex-wrap">
                <img src={applePay} alt="Apple Pay" />
                <img src={visa} alt="Visa" />
                <img src={discover} alt="Discover" />
                <img src={mastercard} alt="Mastercard" />
                <img src={securePayment} alt="Secure payment" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </footer>
  );
};

export default Footer;
