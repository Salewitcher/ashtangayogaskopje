import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Placeholder for backend API call
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row w-full flex-grow">
        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
          <img
            src="/images/contact-placeholder.jpg"
            alt="Yoga contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("contact.heading")}</h1>
            <p className="text-lg max-w-lg">{t("contact.message")}</p>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="lg:w-1/2 bg-white px-8 lg:px-16 py-12 flex items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t("contact.heading")}</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              {status === "sending" ? t("contact.send") + "..." : t("contact.send")}
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-600 font-medium">{t("contact.success")}</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 font-medium">{t("contact.error")}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
