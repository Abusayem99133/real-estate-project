import { Outlet } from "react-router-dom";
import Navbar from "../NavbarSection/Navbar";

import Footer from "../Components/MainLayout/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="mt-[0%]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
