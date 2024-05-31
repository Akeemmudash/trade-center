import Logo from "./Logo";
import "../index.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import CartIcon from "./CartIcon";
import { MenuToggle } from "./MenuToggle";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const slideDownVariants = {
  initial: { opacity: 0, translateY: -50 },
  animate: { opacity: 1, translateY: 0 },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className="nav bg-bright-red position-sticky top-0 z-3">
      <motion.div
        className="container d-flex justify-content-between align-items-center flex-wrap"
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        initial="initial"
        animate="animate"
      >
        <Logo />
        <div className="d-none d-md-flex ">
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <motion.li
              variants={slideDownVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="about" className="text-white text-decoration-none p-3">
                About us
              </Link>
            </motion.li>
            <motion.li
              variants={slideDownVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="products"
                className="text-white text-decoration-none p-3"
              >
                Products
              </Link>
            </motion.li>
            <motion.li
              variants={slideDownVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Button color="white" className="ms-3 fs-7" icon={<CartIcon />}>
                Shop Products
              </Button>
            </motion.li>
          </ul>
        </div>

        <motion.div
          className="hamburger-container d-md-none"
          animate={isOpen ? "open" : "closed"}
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={ulVariants}
            className="list-unstyled d-flex align-items-center mb-0 flex-column mt-5 justify-content-center w-100 d-md-none"
          >
            <motion.li
              className="mb-3"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="about" className="text-white text-decoration-none p-3">
                About us
              </Link>
            </motion.li>
            <motion.li
              className="mb-3"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="products"
                className="text-white text-decoration-none p-3"
              >
                Products
              </Link>
            </motion.li>
            <motion.li
              className=""
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button color="white" className="ms-3 fs-7" icon={<CartIcon />}>
                Shop Products
              </Button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
