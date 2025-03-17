
// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Header Scroll Effect
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

// Typing Effect
const typingElement = document.getElementById("typing");
const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
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

// Scroll Animation
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

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    // Close mobile menu if open
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }

    const headerHeight = document.querySelector("header").offsetHeight;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would typically add code to send the form data to your server
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});
