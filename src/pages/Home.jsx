import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className="w-full font-sans">
        <Helmet>
          <title>{t("home.title") || "Ashtanga Yoga Skopje"}</title>
          <meta
            name="description"
            content={
              t("home.subtitle") ||
              "Discover your strength, flexibility, and inner peace with our classes at Ashtanga Yoga Skopje."
            }
          />
          <meta
            name="keywords"
            content="Ashtanga Yoga, Yoga Skopje, Yoga Classes, Flexibility, Meditation, Fitness"
          />
          <link rel="canonical" href="https://ashtangayogaskopje.mk/" />

          {/* Open Graph for social media */}
          <meta property="og:title" content={t("home.title") || "Ashtanga Yoga Skopje"} />
          <meta
            property="og:description"
            content={
              t("home.subtitle") ||
              "Discover your strength, flexibility, and inner peace with our classes at Ashtanga Yoga Skopje."
            }
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yourwebsite.com/" />
          <meta property="og:image" content="https://www.yourwebsite.com/images/hero-placeholder.jpg" />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ashtanga Yoga Skopje",
              url: "https://www.yourwebsite.com/",
              logo: "https://www.yourwebsite.com/images/logo.png",
              sameAs: ["https://www.instagram.com/ashtangayogaskopje/"]
            })}
          </script>
        </Helmet>

        {/* HERO SECTION */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-white">
          {/* Hero Image */}
          <img
            src="/images/hero-placeholder.jpg"
            alt="Yoga Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Hero Text */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              {t("home.title") || "Welcome to Ashtanga Yoga Skopje"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {t("home.subtitle") ||
                "Discover your strength, flexibility, and inner peace with our classes."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#8FE5A1] text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
              >
                {t("home.book") || "Book a Class"}
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-[#8FE5A1] text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
              >
                {t("home.learn") || "Learn More"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}
