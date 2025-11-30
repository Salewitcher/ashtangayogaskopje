import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center flex flex-col items-center space-y-6">

        {/* LOGO OR NAME */}
        <div className="text-xl font-semibold text-indigo-700 tracking-wide">
          Ashtanga Yoga Skopje
        </div>

        {/* INSTAGRAM LINK */}
        <div>
          <a
            href="https://www.instagram.com/ashtangayogaskopje/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 font-medium transition"
          >
            Follow us on Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}
