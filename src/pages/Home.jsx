import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-white">
        {/* Hero Image */}
        <img
          src="/images/hero-placeholder.jpg"
          alt="Yoga Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional: subtle black overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            {t("home.title") || "Welcome to Ashtanga Yoga Skopje"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {t("home.subtitle") ||
              "Discover your strength, flexibility, and inner peace with our classes."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#8FE5A1] text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              {t("home.book") || "Book a Class"}
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-[#8FE5A1] text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              {t("home.learn") || "Learn More"}
            </Link>
          </div>
        </div>
      </section>

      {/* OPTIONAL: Add more sections like About, Classes, or Testimonials here */}
    </div>
  );
}
