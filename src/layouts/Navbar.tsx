import { Link } from 'react-router-dom';
import { useNavContext } from '../context/NavContext'; // Import the useNavContext hook
import { cn } from "../lib/utils";
import '../styles/hamburger.css';
import { sectionsList } from '../data/SectionsList';
import { phoodieSvg } from "../assets/images/svg";

const Navbar = () => {
  const { navOpen, setNavOpen, currentSection, changeSection } = useNavContext(); // Use the context

  return (
    <>
      <nav aria-label="Main Nav" className="navbar-shadow fixed top-0 left-0 w-full h-[var(--navbar-height)] bg-neutral-100/[97] text-[var(--color-wenge)] font-semibold z-50">
        <div className="container mx-auto h-full px-6 py-1 flex justify-between items-center">

          {currentSection === 0 ? ( // Check is the section is home and render span or Link accordingly
            <span
              aria-label="Back to Homepage"
              className="flex flex-col items-center justify-start h-[48px] lg:h-[60px] w-[48px] lg:w-[60px] text-[var(--color-turkeyRed)]"
            >
              {phoodieSvg}
            </span>
          ) : (
            <Link
              to="/"
              onClick={() => {
                setNavOpen(false); // Set Mobile Nav state to false on click. By using 'false' it accounts for when the user clicks and the Mobile Menu is both open or closed.
                changeSection(0); // Update currentSection on click
              }}
              aria-label="Back to Homepage"
              className="flex flex-col items-center justify-start h-[48px] lg:h-[60px] text-[var(--color-turkeyRed)] translate-y-0 hover:translate-y-[-0.125rem]"
            >
              {phoodieSvg}
            </Link>
          )}

          <menu aria-label="Desktop Menu" className="links hidden lg:flex text-lg">
            {sectionsList.map((section, index) => (
              <li
                key={index}
                className={`${currentSection === index ? 'translate-y-[-0.1rem]' : 'translate-y-0 hover:translate-y-[-0.125rem] transition-all duration-100 ease-out'}`}
              >
                {currentSection === index ? ( // Check is the section is current and render span or Link accordingly
                  <span
                    aria-label={section.title}
                    className={cn(
                      `whitespace-nowrap px-10 py-7`,
                      `text-[var(--color-turkeyRed)] hover:text-[var(--color-turkeyRed)] hover:no-underline cursor-default`
                    )}
                  >
                    {section.title}
                  </span>
                ) : (
                  <Link
                    to={section.link}
                    onClick={() => changeSection(index)} // Update currentSection on click
                    aria-label={section.title}
                    className={cn(
                      `whitespace-nowrap px-10 py-7 text-[var(--color-gray)]`,
                      `hover:text-[var(--color-turkeyRed)] transition-all duration-100 ease-out`, //hover:underline
                      //`${isCurrentSection(index) ? 'text-[var(--color-turkeyRed)] hover:text-[var(--color-turkeyRed)] hover:no-underline cursor-default' : ''}`
                    )}
                  >
                    {section.title}
                  </Link>
                )}
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
          `fixed lg:hidden top-0 right-0 left-0 bg-gradient-to-b from-neutral-100/95 via-neutral-100/95 to-neutral-100/90`,
          `text-[var(--color-wenge)] font-medium z-40`,
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
                    `${currentSection === index ? 'text-red-700' : 'text-[var(--color-dimGray)]'}`,
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