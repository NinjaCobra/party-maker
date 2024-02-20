import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section>{isPageLoading ? <div>Spinner</div> : <Outlet />}</section>
    </>
  );
};

export default Layout;
