import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
    pastel: 'pastel',
    coffee: 'coffee',
};

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.pastel;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());

    const toggleTheme = () => {
        const { coffee, pastel } = themes;
        const newTheme = theme === coffee ? pastel : coffee;
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <label className="swap swap-rotate mr-2">
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
        </label>
    );
};

export default ThemeSwitcher;
