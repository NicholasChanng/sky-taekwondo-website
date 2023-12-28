import "./layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
