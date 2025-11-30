import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation("gallery");
  const images = t("images", { returnObjects: true }) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-gray-800" id="gallery-root">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {t("title")}
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-10">
          {t("description")}
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover rounded shadow hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>

        {/* Back to Top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
          >
            {t("backToTop")}
          </button>
        )}

        {/* Modal / Lightbox */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[90vh] max-w-full rounded shadow-lg animate-fadeIn"
              />

              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500 transition"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>

              {/* Prev / Next Arrows */}
              <button
                className="absolute left-2 text-white text-3xl font-bold hover:text-indigo-400 transition"
                onClick={prevImage}
                aria-label="Previous"
              >
                &#10094;
              </button>
              <button
                className="absolute right-2 text-white text-3xl font-bold hover:text-indigo-400 transition"
                onClick={nextImage}
                aria-label="Next"
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
