import "./layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Bottombar from "../Bottombar/bottombar";
import Join from "../Join/join";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Bottombar />
      <Join />
    </div>
  );
};

export default Layout;
