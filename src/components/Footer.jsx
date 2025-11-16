import React from 'react';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 text-center">
        {t("footer.copyright", { year })}
      </div>
    </footer>
  );
}
