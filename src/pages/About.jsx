// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  // specify the "about" namespace
  const { t } = useTranslation("about");

  const sections = t("sections", { returnObjects: true }); // get sections array

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t("title")}
          </h2>

          {sections &&
            sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {section.heading}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
        </div>

        <div>
          <img
            src="/images/about-yoga.jpg"
            alt="Yoga Practice"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
