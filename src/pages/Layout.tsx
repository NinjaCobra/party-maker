import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, SearchByLetter, Footer, Loader } from '../components';

const Layout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    return (
        <>
            <Navbar />
            <>{isPageLoading ? <Loader /> : <Outlet />}</>
            <SearchByLetter />
            <Footer />
        </>
    );
};

export default Layout;
