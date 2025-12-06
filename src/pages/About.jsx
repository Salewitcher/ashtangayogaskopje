// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");
  const sections = t("sections", { returnObjects: true });

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#e8c8e3]/20 to-[#3cde51]/20">
      {/* Optional decorative gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#e8c8e3]/30 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3cde51]/30 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#3cde51] drop-shadow-lg">
            {t("title")}
          </h2>

          {sections &&
            sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-[#e8c8e3] mb-2 drop-shadow">
                  {section.heading}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src="/images/about-yoga.jpg"
            alt="Yoga Practice"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
          {/* Optional subtle overlay to make image pop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#e8c8e3]/10 to-[#3cde51]/10 rounded-xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
