const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("py-2");
        header.classList.add("shadow-md");
    } else {
        header.classList.remove("py-2");
        header.classList.remove("shadow-md");
    }
});

const typingElement = document.getElementById("typing");
const words = ["Web Developer", "Freelancer", "Fullstack Developer", "Web Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 100;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingDelay = 1000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingDelay = 500;
    }

    setTimeout(type, typingDelay);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
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

        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
        }

        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    });
});

const form = document.getElementById("contact-form");
document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let form = this;
    let formData = new FormData(form);

    let submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
        let response = await fetch("https://formspree.io/f/xrbpapqo", {
            method: "POST",
            body: formData,
            headers: {Accept: "application/json"},
        });

        let result = await response.json();
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error: " + (result.errors ? result.errors.map((e) => e.message).join(", ") : "Unknown error"));
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
});

document.addEventListener('DOMContentLoaded', (event) => {
    const languageSwitch = document.getElementById('language-switch');
    const languageText = languageSwitch.querySelector('.language-text');
    let currentLanguage = 'en';
    loadTranslations(currentLanguage);

    languageSwitch.addEventListener('click', () => {
      if (currentLanguage === 'en') {
        currentLanguage = 'fr';
        languageText.textContent = 'EN 🇬🇧';
        loadTranslations('fr');
      } else {
        currentLanguage = 'en';
        languageText.textContent = 'FR 🇫🇷';
        loadTranslations('en');
      }
    });
  });

  function loadTranslations(lang) {
    fetch(`./assets/locales/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            applyTranslations(data);
        })
        .catch(error => console.error('Error loading translations:', error));
}
function applyTranslations(translations) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
}