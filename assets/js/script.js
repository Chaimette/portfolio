"use strict"
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;
let typeTimeout;
const baseUrl = window.location.pathname.includes('/portfolio') ? '/portfolio' : '';
let currentLanguage = navigator.language.startsWith("fr") ? "fr" : "en";
let translations = {};

async function loadTranslations() {
  try {
    const [enResponse, frResponse] = await Promise.all([
      fetch(`${baseUrl}/assets/locales/en.json`),
      fetch(`${baseUrl}/assets/locales/fr.json`),
    ]);

    if (!enResponse.ok || !frResponse.ok) {
      throw new Error("Failed to load translations");
    }

    const [enData, frData] = await Promise.all([
      enResponse.json(),
      frResponse.json(),
    ]);

    translations = {
      en: enData,
      fr: frData,
    };
    return translations;
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getTranslation(key, lang);

    if (value === undefined) {
      console.warn(`No translation found for key: ${key} in language: ${lang}`);
      return;
    }

    if (key === "home.greeting") {
      element.innerHTML =
        value + '<br /> <span class="text-primary">Chaïma El Kadiri</span>';
    } else if (key === "home.profession") {
      if (element.childNodes[0]) {
        element.childNodes[0].textContent = value + " ";
      } else {
        element.textContent = value + " ";
      }
    } else {
      element.textContent = value;
    }
  });

  for (let i = 0; i < 3; i++) {
    const desc = getTranslation(`projects.items.${i}.description`, lang);
    const element = document.querySelector(`[data-i18n-project="${i}"]`);
    if (element && desc) {
      element.textContent = desc;
    }
  }

  updateTypingWords(lang);

  updateLanguageDisplay(lang);
}

function getTranslation(key, lang) {
  const keyParts = key.split(".");
  let value = translations[lang];
  if (!value) {
    console.warn(`No translations object found for language: ${lang}`);
    return undefined;
  }
  for (const part of keyParts) {
    if (value === undefined) break;
    value = value[part];
  }
  if (value === undefined) {
    console.warn(`Key path "${key}" not found in ${lang} translations`);
  }
  return value;
}

function updateTypingWords(lang) {
  const roles = getTranslation("home.roles", lang);
  if (roles) {
    window.words = roles;

    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;

    const typingElement = document.getElementById("typing");
    if (typingElement) {
      typingElement.textContent = "";
      if (typeTimeout) {
        clearTimeout(typeTimeout);
      }
      typeTimeout = setTimeout(type, 500);
    }
  }
}

function updateLanguageDisplay(lang) {
  const displayText = getTranslation("nav.language", lang);
  document.querySelectorAll(".language-text").forEach((text) => {
    text.textContent = displayText;
  });
}

function type() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  const words = window.words || [
    "Web Developer",
    "Web Designer",
    "Fullstack Developer",
  ];
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 150;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 200;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingDelay = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingDelay = 1000;
  }

  typeTimeout = setTimeout(type, typingDelay);
}

document.addEventListener("DOMContentLoaded", () => {
 

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("py-2", "shadow-md");
      } else {
        header.classList.remove("py-2", "shadow-md");
      }
    });
  }

  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const submitBtn = document.getElementById("submit-btn");
      if (!submitBtn) return;

      submitBtn.disabled = true;
      submitBtn.textContent =
        getTranslation("contact.form.sending", currentLanguage) || "Sending...";

      try {
        const formData = new FormData(form);
        const response = await fetch("https://formspree.io/f/xrbpapqo", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        const result = await response.json();

        if (response.ok) {
          alert(
            getTranslation("contact.form.success", currentLanguage) ||
              "Message sent successfully!"
          );
          form.reset();
        } else {
          alert(
            "Error: " +
              (result.errors
                ? result.errors.map((e) => e.message).join(", ")
                : "Unknown error")
          );
        }
      } catch (error) {
        alert(
          getTranslation("contact.form.error", currentLanguage) ||
            "Something went wrong. Please try again."
        );
      }

      submitBtn.disabled = false;
      submitBtn.textContent =
        getTranslation("contact.form.submit", currentLanguage) ||
        "Send Message";
    });
  }

  const languageSwitch = document.getElementById("language-switch");
  const mobileLanguageSwitch = document.getElementById(
    "mobile-language-switch"
  );

  let currentLanguage = navigator.language.startsWith("fr") ? "fr" : "en";

  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    applyTranslations(currentLanguage);
  }

  if (languageSwitch) {
    languageSwitch.addEventListener("click", toggleLanguage);
  }

  if (mobileLanguageSwitch) {
    mobileLanguageSwitch.addEventListener("click", toggleLanguage);
  }

  loadTranslations().then(() => {
    applyTranslations(currentLanguage);
    setTimeout(type, 1000);
  });
});
