import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
