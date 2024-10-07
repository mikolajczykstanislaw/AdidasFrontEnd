import { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`padding-x py-8 sticky top-0 z-20 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={129}
                        height={40}
                        className="m-0 w-[129px] h-[40px]"
                    />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg relative transition duration-300 ease-in-out transform hover:text-blue-500 hover:-translate-y-1 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    className="max-lg:block hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <div
                        className={`w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ease-in-out ${
                            menuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ease-in-out ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
                            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    ></div>
                </div>
            </nav>

            <div
                className={`absolute top-full left-0 w-full bg-white transition-all duration-500 ease-in-out transform ${
                    menuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
                } overflow-hidden lg:hidden`}
            >
                <ul className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg relative transition duration-300 ease-in-out hover:text-blue-500"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Nav;