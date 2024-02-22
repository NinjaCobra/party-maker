import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, SearchByLetter, ThemeSwitcher } from "../components";

const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <ThemeSwitcher />
      <section>{isPageLoading ? <div>Spinner</div> : <Outlet />}</section>
      <SearchByLetter />
    </>
  );
};

export default Layout;
