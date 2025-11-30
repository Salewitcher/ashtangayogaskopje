// src/pages/Classes.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Classes() {
  const { t, i18n } = useTranslation("classes"); // namespace "classes"
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // top 3 cards (unchanged)
  const classesList = [
    { title: t("beginnerTitle"), description: t("beginnerDesc"), image: "/images/class-beginner.jpg" },
    { title: t("intermediateTitle"), description: t("intermediateDesc"), image: "/images/class-intermediate.jpg" },
    { title: t("advancedTitle"), description: t("advancedDesc"), image: "/images/class-advanced.jpg" }
  ];

  // load yogaTypes object from translations (returnObjects makes it an object)
  const yogaTypesObj = t("yogaTypes", { returnObjects: true }) || {};
  // convert to array of { id, title, text }
  const yogaTypes = Object.keys(yogaTypesObj).map((k) => ({
    id: k,
    title: yogaTypesObj[k].title,
    text: yogaTypesObj[k].text
  }));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-16 bg-white" id="classes-root">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("title")}</h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">{t("subtitle")}</p>

        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {classesList.map((c, i) => (
            <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-500">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mb-12 text-left">
          <h3 className="text-2xl font-semibold mb-4">{t("typesHeading")}</h3>
          <ul className="list-disc list-inside text-blue-600">
            {yogaTypes.map((type) => (
              <li key={type.id}>
                <a href={`#${type.id}`} className="hover:underline">{type.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Yoga sections */}
        <div className="space-y-12">
          {yogaTypes.map((type) => (
            <article key={type.id} id={type.id} className="mb-16 text-left bg-gray-50 rounded-xl p-6 shadow">
              <h4 className="text-2xl font-bold mb-3">{type.title}</h4>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">{type.text}</p>
            </article>
          ))}
        </div>

        {/* Floating localized back-to-top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
            aria-label="Back to top"
          >
            {t("backToTop")}
          </button>
        )}
      </div>
    </section>
  );
}
