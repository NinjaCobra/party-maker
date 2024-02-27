import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 px-5">
            <div className="navbar-start">
                <Link to="/" className="btn btn-circle btn-outline p-1">
                    <img src={logo} alt="Background" className="w-16" />
                </Link>
            </div>

            <div className="navbar-end">
                <ThemeSwitcher />
                <NavLink to="/" className="btn btn-ghost text-xl">
                    Home
                </NavLink>
                <NavLink to="/cocktails" className="btn btn-ghost text-xl">
                    Cocktails
                </NavLink>
                <NavLink to="/whynot" className="btn btn-ghost text-xl">
                    WhyNot?
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
