// src/pages/Classes.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Classes() {
  const { t } = useTranslation("classes"); // namespace "classes"
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Top 3 cards
  const classesList = [
    { title: t("beginnerTitle"), description: t("beginnerDesc"), image: "/images/class-beginner.jpg" },
    { title: t("intermediateTitle"), description: t("intermediateDesc"), image: "/images/class-intermediate.jpg" },
    { title: t("advancedTitle"), description: t("advancedDesc"), image: "/images/class-advanced.jpg" }
  ];

  const yogaTypesObj = t("yogaTypes", { returnObjects: true }) || {};
  const yogaTypes = Object.keys(yogaTypesObj).map((k) => ({
    id: k,
    title: yogaTypesObj[k].title,
    text: yogaTypesObj[k].text
  }));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-16 bg-gradient-to-br from-[#e8c8e3]/10 to-[#3cde51]/10" id="classes-root">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#3cde51] drop-shadow-lg">
          {t("title")}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {classesList.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3cde51]">{c.title}</h3>
                <p className="text-gray-600">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mb-12 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-[#e8c8e3] drop-shadow">
            {t("typesHeading")}
          </h3>
          <ul className="list-disc list-inside">
            {yogaTypes.map((type) => (
              <li key={type.id}>
                <a
                  href={`#${type.id}`}
                  className="text-[#3cde51] hover:text-[#e8c8e3] transition font-medium"
                >
                  {type.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Yoga sections */}
        <div className="space-y-12">
          {yogaTypes.map((type) => (
            <article
              key={type.id}
              id={type.id}
              className="mb-16 text-left bg-white rounded-xl p-6 shadow-md"
            >
              <h4 className="text-2xl font-bold mb-3 text-[#3cde51]">{type.title}</h4>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">{type.text}</p>
            </article>
          ))}
        </div>

        {/* Floating localized back-to-top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#3cde51] text-white px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition"
            aria-label="Back to top"
          >
            {t("backToTop")}
          </button>
        )}
      </div>
    </section>
  );
}
