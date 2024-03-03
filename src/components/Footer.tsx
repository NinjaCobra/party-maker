import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer border-t border-base-300 bg-base-200 px-5 py-4 text-base-content">
            <aside className="grid-flow-col items-center">
                <p>Developed 2024</p>
            </aside>
            <nav className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/NinjaCobra" target="_blank">
                    <VscGithub size={24} className="fill-current" />
                </a>
                <a
                    href="https://www.linkedin.com/in/vadym-popov/"
                    target="_blank"
                >
                    <FaLinkedin size={24} className="fill-current" />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
