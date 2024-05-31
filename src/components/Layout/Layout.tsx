import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Stack } from "react-bootstrap";
import "./layout.css";
const Layout = () => {
  return (
    <Stack className="layout w-100 mx-auto">
      <Navbar />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </Stack>
  );
};

export default Layout;
