import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact"); // using contact namespace

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <div className="flex flex-col lg:flex-row w-full flex-grow">

        {/* LEFT SIDE - Hero Image */}
        <div className="lg:w-1/2 h-64 sm:h-80 lg:h-auto relative">
          <img
            src="/images/contact-placeholder.jpg"
            alt={t("heading") || "Contact Us"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              {t("heading") || "Get in Touch"}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md">
              {t("message") || "Reach out to our studio for questions or bookings."}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Info */}
        <div className="lg:w-1/2 bg-white px-6 sm:px-12 py-10 flex items-center">
          <div className="w-full max-w-md mx-auto text-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              {t("heading") || "Contact Us"}
            </h2>

            <p className="mb-4">
              {t("emailLabel") || "Email"}:{" "}
              <a
                href="mailto:nedakocare@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                nedakocare@gmail.com
              </a>
            </p>

            <p className="mb-2">
              {t("phoneLabel") || "Phone"}:{" "}
              <a href="tel:+38979367504" className="text-indigo-600 hover:underline">
                +389 79 367 504
              </a>
            </p>
            <p className="mb-2">
              {t("phoneLabel") || "Phone"}:{" "}
              <a href="tel:+38971308178" className="text-indigo-600 hover:underline">
                +389 71 308 178
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
