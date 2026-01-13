import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const links = [
    { id: 1, link: 'about', label: 'The Tale' },
    { id: 2, link: 'skills', label: 'Arsenal' },
    { id: 3, link: 'experience', label: 'Journey' },
    { id: 4, link: 'projects', label: 'Chronicles' },
    { id: 5, link: 'contact', label: 'Epilogue' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 px-4 py-4 flex justify-center transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-center gap-4 md:gap-8 items-center w-full max-w-5xl h-16 px-4 md:px-8 text-white glass-panel rounded-full relative">
        <div>
          <h1 className="font-header text-sm tracking-widest uppercase cursor-pointer transition-all duration-200">
            <Link
              to="home"
              smooth
              duration={300}
              spy={true}
              offset={-80}
              activeClass="nav-active"
              className="cursor-pointer px-4 py-2 rounded-full hover:text-sunset hover:scale-105 transition-all duration-300 flex items-center"
            >
              HOME
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex gap-4 md:gap-6">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="font-header text-sm tracking-widest uppercase"
            >
              <Link
                to={link}
                smooth
                duration={300}
                offset={-80}
                spy={true}
                activeClass="nav-active"
                className="cursor-pointer px-4 py-2 rounded-full hover:text-sunset hover:scale-105 transition-all duration-300 flex items-center"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-white md:hidden hover:text-sunset transition-colors duration-300"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-20 left-0 right-0 mx-4 rounded-3xl glass-panel text-white py-10">
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-2xl font-header hover:text-sunset duration-200"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={300}
                  offset={-80}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
