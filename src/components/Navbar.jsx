import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "mk" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">AshtangaYoga</div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-sm hover:text-indigo-600 transition">{t("navbar.home")}</Link>
          <Link to="/about" className="text-sm hover:text-indigo-600 transition">{t("navbar.about")}</Link>
          <Link to="/classes" className="text-sm hover:text-indigo-600 transition">{t("navbar.classes")}</Link>
          <Link to="/gallery" className="text-sm hover:text-indigo-600 transition">{t("navbar.gallery")}</Link>
          <Link to="/contact" className="text-sm hover:text-indigo-600 transition">{t("navbar.contact")}</Link>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-2 py-1 border rounded hover:bg-gray-100 transition text-sm"
          >
            {i18n.language === "en" ? "MK" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
