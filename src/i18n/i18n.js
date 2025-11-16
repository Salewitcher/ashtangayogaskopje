import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        classes: "Classes",
        gallery: "Gallery",
        contact: "Contact"
      },
      home: {
        title: "Welcome to Ashtanga Yoga",
        subtitle: "Experience the perfect blend of strength, flexibility, and mindfulness with our expert-led Ashtanga Yoga classes.",
        book: "Book a Class",
        learn: "Learn More"
      },
      contact: {
        heading: "Get In Touch",
        message: "Replace this text with a short message about contacting your yoga studio.",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "Something went wrong. Try again later."
      },
      footer: {
        copyright: "© {{year}} AshtangaYoga — Replace with your info."
      }
    }
  },
  mk: {
    translation: {
      navbar: {
        home: "Дома",
        about: "За Нас",
        classes: "Часови",
        gallery: "Галерија",
        contact: "Контакт"
      },
      home: {
        title: "Добредојдовте во Аштанга Јога",
        subtitle: "Искуство на совршена комбинација на сила, флексибилност и свесност со нашите експертски водени Аштанга Јога часови.",
        book: "Резервирај Час",
        learn: "Научи Повеќе"
      },
      contact: {
        heading: "Контактирајте Не",
        message: "Заменете го овој текст со кратка порака за контакт со вашето јога студио.",
        send: "Прати Порака",
        success: "Пораката е успешно испратена!",
        error: "Се појави грешка. Обидете се повторно."
      },
      footer: {
        copyright: "© {{year}} AshtangaYoga — Заменете со вашите информации."
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
