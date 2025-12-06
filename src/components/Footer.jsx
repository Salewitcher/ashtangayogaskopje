import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#e8c8e3] to-[#3cde51] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center flex flex-col items-center space-y-6">

        {/* LOGO OR NAME */}
        <div className="text-xl font-semibold text-white tracking-wide drop-shadow">
          Ashtanga Yoga Skopje
        </div>

        {/* INSTAGRAM LINK */}
        <div>
          <a
            href="https://www.instagram.com/ashtangayogaskopje/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e8c8e3] font-medium transition"
          >
            Follow us on Instagram
          </a>
        </div>

        <p className="text-white/90 text-sm">
          &copy; {new Date().getFullYear()} Ashtanga Yoga Skopje. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
