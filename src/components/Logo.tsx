import { Link } from "react-router-dom";
import logo from "../assets/trade-center-logo.png";
import { Navbar } from "react-bootstrap";

const Logo = () => {
  return (
    <Navbar.Brand as={Link} to="/" className="user-select-none">
      <img src={logo} alt={"logo"} width="122" height="62" />
    </Navbar.Brand>
  );
};

export default Logo;
