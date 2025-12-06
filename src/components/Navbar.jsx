import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "mk" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-gradient-to-r from-[#e8c8e3] to-[#3cde51] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO + TEXT */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Ashtanga Yoga Logo"
            className="h-10 w-auto"
          />
          <span className="text-white text-xl font-bold tracking-wide drop-shadow">
            Ashtanga Yoga Skopje
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* LINKS (desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["home","about","classes","gallery","contact"].map((page) => (
            <Link
              key={page}
              to={`/${page === "home" ? "" : page}`}
              className="px-3 py-1 rounded hover:bg-white/20 text-white transition"
            >
              {t(`navbar.${page}`)}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border rounded text-white hover:bg-white/20 transition"
          >
            {i18n.language === "en" ? "MK" : "EN"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-[#e8c8e3]/90 to-[#3cde51]/90 border-t backdrop-blur-sm">
          <div className="flex flex-col text-sm px-4 py-3 space-y-3">
            {["home","about","classes","gallery","contact"].map((page) => (
              <Link
                key={page}
                to={`/${page === "home" ? "" : page}`}
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded hover:bg-white/20 text-white transition"
              >
                {t(`navbar.${page}`)}
              </Link>
            ))}

            <button
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="px-3 py-1 border rounded w-20 text-center text-white hover:bg-white/20 transition"
            >
              {i18n.language === "en" ? "MK" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
