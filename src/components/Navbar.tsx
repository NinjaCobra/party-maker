import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    const dropdownList = document.getElementById('dropdownList');

    const handleDropdownClick = () => {
        dropdownList && dropdownList.classList.add('hidden');
    };

    const toggleDropdown = () => {
        if (!dropdownList?.classList.contains('hidden')) return;
        dropdownList && dropdownList.classList.toggle('hidden');
    };

    return (
        <nav className="navbar bg-base-100 px-5">
            <div className="navbar-start">
                <div className="dropdown block lg:hidden ">
                    <button
                        type="button"
                        tabIndex={0}
                        className="btn btn-circle btn-primary"
                        onClick={toggleDropdown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[1] mt-1 flex w-[330px] items-center rounded-box bg-base-100 p-10 shadow sm:w-[500px] md:w-[700px]"
                        id="dropdownList"
                    >
                        <NavLink
                            to="/"
                            className="mb-4 text-xl font-bold hover:text-secondary"
                            onClick={handleDropdownClick}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/cocktails"
                            className="mb-4 text-xl font-bold hover:text-secondary"
                            onClick={handleDropdownClick}
                        >
                            Cocktails
                        </NavLink>
                        <NavLink
                            to="/whynot"
                            className="mb-4 text-xl font-bold hover:text-secondary"
                            onClick={handleDropdownClick}
                        >
                            WhyNot?
                        </NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-circle btn-neutral  p-1">
                    <img src={logo} alt="Background" className="w-16" />
                </Link>
            </div>

            <div className="navbar-end ">
                <ThemeSwitcher />

                <div className="hidden lg:flex">
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
            </div>
        </nav>
    );
};

export default Navbar;
