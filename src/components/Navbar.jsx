import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'about', label: 'The Tale' },
    { id: 2, link: 'skills', label: 'Arsenal' },
    { id: 3, link: 'experience', label: 'Journey' },
    { id: 4, link: 'projects', label: 'Chronicles' },
    { id: 5, link: 'contact', label: 'Epilogue' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-ink bg-parchment/90 fixed z-50 shadow-md border-b-2 border-gold/30 backdrop-blur-sm">
      <div>
        <h1 className="text-5xl font-story ml-2 cursor-pointer hover:scale-105 duration-200 text-royal-red">
          <Link to="home" smooth duration={300}>
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain drop-shadow-lg" />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="px-6 cursor-pointer capitalize font-story text-lg text-ink/80 hover:scale-110 hover:text-royal-red duration-300"
          >
            <Link to={link} smooth duration={300} offset={-80}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-ink md:hidden hover:text-royal-red transition-colors duration-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-parchment text-ink">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-story hover:text-royal-red duration-200"
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
  );
};

export default Navbar;
