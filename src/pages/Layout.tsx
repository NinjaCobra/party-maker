import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, SearchByLetter } from "../components";

const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section>{isPageLoading ? <div>Spinner</div> : <Outlet />}</section>
      <SearchByLetter />
    </>
  );
};

export default Layout;
