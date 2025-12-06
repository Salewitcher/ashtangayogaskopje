// src/pages/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact"); // using contact namespace

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e8c8e3]/10 to-[#3cde51]/10">

      <div className="flex flex-col lg:flex-row w-full flex-grow">

        {/* LEFT SIDE - Hero Image */}
        <div className="lg:w-1/2 h-64 sm:h-80 lg:h-auto relative">
          <img
            src="/images/contact-placeholder.jpg"
            alt={t("heading") || "Contact Us"}
            className="w-full h-full object-cover rounded-r-xl"
          />
          <div className="absolute inset-0 bg-black/25 rounded-r-xl"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
              {t("heading") || "Get in Touch"}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md drop-shadow-sm">
              {t("message") || "Reach out to our studio for questions or bookings."}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Info */}
        <div className="lg:w-1/2 bg-white px-6 sm:px-12 py-10 flex items-center rounded-l-xl shadow-lg">
          <div className="w-full max-w-md mx-auto text-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#3cde51] drop-shadow-lg">
              {t("heading") || "Contact Us"}
            </h2>

            <p className="mb-4 text-lg">
              {t("emailLabel") || "Email"}:{" "}
              <a
                href="mailto:nedakocare@gmail.com"
                className="text-[#3cde51] font-semibold hover:text-[#e8c8e3] transition"
              >
                nedakocare@gmail.com
              </a>
            </p>

            <p className="mb-2 text-lg">
              {t("phoneLabel") || "Phone"}:{" "}
              <a
                href="tel:+38979367504"
                className="text-[#3cde51] font-semibold hover:text-[#e8c8e3] transition"
              >
                +389 79 367 504
              </a>
            </p>

            <p className="mb-2 text-lg">
              {t("phoneLabel") || "Phone"}:{" "}
              <a
                href="tel:+38971308178"
                className="text-[#3cde51] font-semibold hover:text-[#e8c8e3] transition"
              >
                +389 71 308 178
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
