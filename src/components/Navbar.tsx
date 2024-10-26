import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cn } from "../resources/lib/utils";
import '../resources/css/hamburger.css';

const sectionsList = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Menu",
      link: "/menu"
    },
    {
      title: "Reservations",
      link: "/reservations"
    },
    {
      title: "Order Online",
      link: "/order-online"
    },
    {
      title: "Contacts",
      link: "/contacts"
    },
];

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);

    const changeSection = (index: number) => {
        setCurrentSection(index);
    };

    let isCurrentSection = (index: number) => index === currentSection;

    return (
        <>
            {/* <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav> */}
            <nav aria-label="Main Nav" className="fixed top-0 left-0 w-screen bg-neutral-200 lg:bg-neutral-100/50 text-neutral-700 font-semibold z-50">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link
                        to="/"
                        onClick={() => {
                            setNavOpen(false); // Set Mobile Nav state to false on click. By using 'false' it accounts for when the user clicks and the Mobile Menu is both open or closed.
                            changeSection(0); // Update currentSection on click
                        }}
                        aria-label="Back to Homepage"
                        className="flex flex-col items-center text-sm"
                    >
                        <img src="../../assets/svg/Phoodie_logo.svg" alt="Phoodie logo" className="w-[40px]"></img>
                        Phoodie
                    </Link>
                    <menu aria-label="Desktop Menu" className="links hidden lg:flex">
                        {sectionsList.map((section, index) => (
                            <li className="" key={index}>
                                <Link
                                    to={section.link}
                                    onClick={() => changeSection(index)} // Update currentSection on click
                                    aria-label={section.title}
                                    className={cn(
                                        `whitespace-nowrap px-10 py-7 hover:underline hover:text-white`,
                                        `${isCurrentSection(index) ? 'text-red-700 hover:text-red-700 hover:no-underline cursor-default' : ''}`
                                    )}
                                >
                                    {section.title}
                                </Link>
                            </li>
                        ))}
                    </menu>
                    <div
                        aria-label="Mobile Nav"
                        className="flex lg:hidden items-center"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <div className={cn(
                            `hamburger hamburger--spin z-[9999999]`,
                            `${navOpen ? 'is-active' : ''}`
                        )}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            <div
                aria-label="Mobile Menu"
                className={cn(
                    `fixed lg:hidden top-0 right-0 left-0 bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-200/70 text-white z-40`,
                    `${navOpen ? 'block bottom-0 preventScroll transition-all duration-300 ease-out' : 'none bottom-[100%] transition-all duration-150 ease-in'}`
                )}
            >
                <div className="overflow-y-scroll w-screen h-full max-h-screen">
                    <div className="spacer"></div>
                    <menu className="links space-y-7 px-6 pb-10 pt-6">
                    {sectionsList.map((section, index) => (
                        <li key={index}
                            className={cn(
                                `transition-all duration-500 ease-out`,
                                `${navOpen ? `delay-${(index + 0) * 100} translate-y-0` : 'delay-0 duration-100 translate-y-10'}`
                            )}
                        >
                                <Link
                                    to={section.link}
                                    aria-label={section.title}
                                    onClick={() => {
                                        setNavOpen(!navOpen); // Switch Mobile Nav state on click
                                        changeSection(index); // Update currentSection on click
                                    }}
                                    className={cn(
                                        `${isCurrentSection(index) ? 'text-red-700' : ''}`,
                                        `${navOpen ? `opacity-100 transition-opacity duration-600 delay-${index * 100} ease-in` : 'opacity-0 transition-opacity duration-100 delay-0 ease-out'}`
                                    )}
                                >
                                    {section.title}
                                </Link>
                        </li>
                        ))}
                    </menu>
                </div>
            </div>
        </>
    );
};

export default Navbar;