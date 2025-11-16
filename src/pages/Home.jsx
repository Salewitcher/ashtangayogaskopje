import React from 'react';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[76vh] flex items-center justify-center text-white">
        <img 
          src="/images/hero-placeholder.jpg" 
          alt="Yoga Hero" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {t("home.title")}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t("home.subtitle")}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition">
              {t("home.book")}
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md font-semibold hover:bg-indigo-50 transition">
              {t("home.learn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
