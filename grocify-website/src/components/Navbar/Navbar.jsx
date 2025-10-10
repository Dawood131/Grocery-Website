import React, { useState, useEffect } from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'

const sections = [
  { id: "home", label: "Home" },
  { id: "categories", label: "Categories" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact Us" }, // footer id
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggle = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + 120; // navbar offset
      let current = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          // Footer special case: agar scroll end par hai
          if (i === sections.length - 1) {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
              current = sections[i].id;
              break;
            }
          }

          if (scrollPos >= top && scrollPos < bottom) {
            current = sections[i].id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // page load par check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? "shadow-lg" : ""}`}>
      <nav className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 md:h-[14vh] h-[12vh] flex justify-between items-center">
        <Link
          to="/"
          className={`cursor-pointer text-3xl font-bold`}>
          Gr<span className="text-orange-500">O</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => handleLinkClick(id)}
                className={`font-semibold tracking-wide ${activeSection === id ? "text-orange-500" : "text-zinc-800 hover:text-orange-500"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-x-3 mb-1">
          <div className="md:flex border-2 border-orange-500 p-1 rounded-full hidden">
            <input type="text" placeholder="Search..." autoComplete="off" className="flex-1 h-[6vh] focus:outline-none px-3" />
            <button className="bg-gradient-to-b from-red-600 to-orange-600 text-white text-2xl flex justify-center items-center w-10 h-10 rounded-full hover:bg-gradient-to-t">
              <IoIosSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl mt-1"><TiHeartFullOutline /></a>
          <a href="#" className="text-zinc-800 text-2xl"><HiShoppingBag /></a>

          {/* Hamburger */}
          <button className="text-zinc-800 text-3xl items-center mt-1 md:hidden" onClick={toggle}>
            {showMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-12 p-10 bg-orange-500/18 backdrop-blur-xl rounded-2xl shadow-xl items-center md:hidden
          absolute top-[100%] right-0 transform transition-transform duration-500 ease-in-out 
          ${showMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => handleLinkClick(id)}
                className={`font-semibold tracking-wide ${activeSection === id ? "text-orange-500" : "text-zinc-800 hover:text-orange-500"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}

          <li className="flex border-2 border-orange-500 p-1 rounded-full md:hidden">
            <input type="text" placeholder="Search..." autoComplete="off" className="flex-1 h-[6vh] focus:outline-none px-3" />
            <button className="bg-gradient-to-b from-red-600 to-orange-600 text-white text-2xl flex justify-center items-center w-10 h-10 rounded-full hover:bg-gradient-to-t mt-1.5">
              <IoIosSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
