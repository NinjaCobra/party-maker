import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const toggleTheme = () => {
    const { dracula, winter } = themes;
    const newTheme = theme === dracula ? winter : dracula;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className='swap swap-rotate'>
      <input type='checkbox' onChange={toggleTheme} />
      <BsSunFill className='swap-on h-4 w-4' />
      <BsMoonFill className='swap-off h-4 w-4' />
    </label>
  );
};

export default ThemeSwitcher;
