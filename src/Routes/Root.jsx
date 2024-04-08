import { Outlet } from "react-router-dom";
import Navbar from "../NavbarSection/Navbar";
import Banner from "../HomePage/Banner";
import Footer from "../Components/MainLayout/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>
      <div className="mt-[100%]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
