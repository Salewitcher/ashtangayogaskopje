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
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO + TEXT */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Ashtanga Yoga Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-wide text-indigo-700">
            Ashtanga Yoga Skopje
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-indigo-700 focus:outline-none"
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
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:text-indigo-600 transition">{t("navbar.home")}</Link>
          <Link to="/about" className="hover:text-indigo-600 transition">{t("navbar.about")}</Link>
          <Link to="/classes" className="hover:text-indigo-600 transition">{t("navbar.classes")}</Link>
          <Link to="/gallery" className="hover:text-indigo-600 transition">{t("navbar.gallery")}</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">{t("navbar.contact")}</Link>

          <button
            onClick={toggleLanguage}
            className="px-2 py-1 border rounded hover:bg-indigo-50 transition"
          >
            {i18n.language === "en" ? "MK" : "EN"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="flex flex-col text-sm px-4 py-3 space-y-3">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">
              {t("navbar.home")}
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">
              {t("navbar.about")}
            </Link>
            <Link to="/classes" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">
              {t("navbar.classes")}
            </Link>
            <Link to="/gallery" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">
              {t("navbar.gallery")}
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">
              {t("navbar.contact")}
            </Link>

            <button
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="px-2 py-1 border rounded w-20 text-center hover:bg-indigo-50 transition"
            >
              {i18n.language === "en" ? "MK" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
