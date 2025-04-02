const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        language: "FR 🇫🇷"
      },
      home: {
        greeting: "Hi, I'm",
        profession: "I'm a",
        roles: ["Web Developer", "Web Designer", "Fullstack Developer"],
        description: "I create beautiful, functional websites and applications. Passionate about (mostly) clean code, user-centered design and secure environments.",
        cta: {
          work: "View My Work",
          contact: "Contact Me"
        }
      },
      about: {
        title: "About Me",
        subtitle: "Get to know a bit about me and my professional journey.",
        whoIAm: "Who I Am",
        description1: "I'm a passionate full-stack web developer, still in training. I specialize in back-end development, creating efficient and secure websites.",
        description2: "My journey in web development started when I was working a boring office job. I discovered my passion\
                            for creating digital experiences. Since then, I've done everything to improve my skills with\
                            various trainings, in different programming languages and with a wide range of tools.",
        info: {
          name: "Name:",
          email: "Email:",
          location: "Location:",
          available: "Available for:"
        },
        availableFor: "Freelance, Full-time",
        resume: "Download Resume"
      },
      projects: {
        title: "My Projects",
        subtitle: "Take a look at some of the projects I've worked on recently.",
        viewProject: "View Project",
        viewAll: "View All Projects",
        items: [
          {
            title: "Fandom Tales",
            description: "A fully responsive library built with PHP and Symfony, featuring user authentication, a built-in text-editor, and an admin dashboard. This project is still in development."
          },
          {
            title: "Portfolio Website",
            description: "A modern portfolio website built with HTML, TailwindCSS, and JavaScript. Features smooth scrolling, animations, and a contact form."
          },
          {
            title: "La Gazette du Sorcier",
            description: "A forum where Harry Potter fans can connect and share about their favorite wizard. This project was a school project and presented to the Wild Code School's students in July 2024."
          }
        ]
      },
      skills: {
        title: "My Skills",
        subtitle: "These are the technologies and tools I work with."
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Have a project in mind? Let's work together to bring your ideas to life.",
        info: {
          title: "Contact Information",
          email: "Email",
          phone: "Phone",
          location: "Location",
          follow: "Follow Me"
        },
        form: {
          title: "Send Me a Message",
          name: "Your Name",
          email: "Your Email",
          subject: "Subject",
          message: "Your Message",
          submit: "Send Message"
        }
      },
      footer: {
        subtitle: "Web Developer | Web Designer | Creator",
        copyright: "© 2025 Chaïma El Kadiri. All rights reserved.",
        madewith: "Made with love and a lot of coffee"
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact",
        language: "EN 🇬🇧"
      },
      home: {
        greeting: "Bonjour, je suis",
        profession: "Je suis",
        roles: ["Développeuse Web", "Designer Web", "Développeuse Full-Stack"],
        description: "Je crée des sites et applications web fonctionnels et esthétiques. Passionnée par le code (plus ou moins) propre, la conception centrée sur l'utilisateur et les environnements sécurisés.",
        cta: {
          work: "Voir mes projets",
          contact: "Me contacter"
        }
      },
      about: {
        title: "À propos de moi",
        subtitle: "Apprenez-en un peu plus sur moi et mon parcours professionnel.",
        whoIAm: "Qui suis-je",
        description1: "Je suis une développeuse full-stack passionnée, toujours en formation. Je me spécialise dans le développement back-end, créant des sites web efficaces et sécurisés.",
        description2: "Mon parcours dans le développement web a commencé lorsque j'étais une employée de bureau lambda et lassée, où j'ai découvert ma passion pour la création d'expériences numériques. Depuis, j'ai tout fait pour améliorer mes compétences grâce à plusieurs formations dans différents langages de programmation, ainsi qu'une variété d'outils de programmation.",
        info: {
          name: "Nom :",
          email: "Email :",
          location: "Localisation :",
          available: "Disponible pour :"
        },
        availableFor: "Freelance, Temps plein",
        resume: "Télécharger mon CV"
      },
      projects: {
        title: "Mes projets",
        subtitle: "Découvrez certains des projets sur lesquels j'ai travaillé récemment.",
        viewProject: "Voir le projet",
        viewAll: "Voir tous les projets",
        items: [
          {
            title: "Fandom Tales",
            description: "Une bibliothèque entièrement responsive construite avec PHP et Symfony, comprenant une authentification utilisateur, un éditeur de texte intégré et un tableau de bord administrateur. Ce projet est toujours en développement."
          },
          {
            title: "Site Portfolio",
            description: "Un site portfolio moderne construit avec HTML, TailwindCSS et JavaScript. Comprend un défilement fluide, des animations et un formulaire de contact."
          },
          {
            title: "La Gazette du Sorcier",
            description: "Un forum où les fans d'Harry Potter peuvent se connecter et partager sur leur sorcier préféré. Ce projet était un projet scolaire présenté aux étudiants de la Wild Code School en juillet 2024."
          }
        ]
      },
      skills: {
        title: "Mes compétences",
        subtitle: "Voici les technologies et outils avec lesquels je travaille."
      },
      contact: {
        title: "Contactez-moi",
        subtitle: "Vous avez un projet en tête ? Travaillons ensemble pour donner vie à vos idées.",
        info: {
          title: "Informations de contact",
          email: "Email",
          phone: "Téléphone",
          location: "Localisation",
          follow: "Suivez-moi"
        },
        form: {
          title: "Envoyez-moi un message",
          name: "Votre nom",
          email: "Votre email",
          subject: "Sujet",
          message: "Votre message",
          submit: "Envoyer le message"
        }
      },
      footer: {
        subtitle: "Développeuse Web | Designer Web | Créatrice",
        copyright: "© 2025 Chaïma El Kadiri. Tous droits réservés.",
        madewith: "Fait avec amour et beaucoup de café"
      }
    }
};

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;
let typeTimeout;


function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getTranslation(key, lang);
        
        if (value === undefined) {
            console.warn(`No translation found for key: ${key} in language: ${lang}`);
            return;
        }
        
        if (key === 'home.greeting') {
            element.innerHTML = value + ' <span class="text-primary">Chaïma <br />El Kadiri</span>';
        } else if (key === 'home.profession') {
            if (element.childNodes[0]) {
                element.childNodes[0].textContent = value + ' ';
            } else {
                element.textContent = value + ' ';
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
    const keyParts = key.split('.');
    let value = translations[lang];
    
    for (const part of keyParts) {
        if (value === undefined) break;
        value = value[part];
    }
    
    return value;
}

function updateTypingWords(lang) {
    const roles = getTranslation('home.roles', lang);
    if (roles) {
        window.words = roles;
        
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        
        const typingElement = document.getElementById("typing");
        if (typingElement) {
            typingElement.textContent = '';
            if (typeTimeout) {
                clearTimeout(typeTimeout);
            }
            typeTimeout = setTimeout(type, 500);
        }
    }
}

function updateLanguageDisplay(lang) {
    const displayText = getTranslation('nav.language', lang);
    document.querySelectorAll('.language-text').forEach(text => {
        text.textContent = displayText;
    });
}

function type() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;
    
    const words = window.words || ["Web Developer", "Web Designer", "Fullstack Developer"];
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
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        });
    });
    
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById("submit-btn");
            if (!submitBtn) return;
            
            submitBtn.disabled = true;
            submitBtn.textContent = getTranslation('contact.form.sending', currentLanguage) || "Sending...";
            
            try {
                const formData = new FormData(form);
                const response = await fetch("https://formspree.io/f/xrbpapqo", {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    alert(getTranslation('contact.form.success', currentLanguage) || "Message sent successfully!");
                    form.reset();
                } else {
                    alert("Error: " + (result.errors ? result.errors.map((e) => e.message).join(", ") : "Unknown error"));
                }
            } catch (error) {
                alert(getTranslation('contact.form.error', currentLanguage) || "Something went wrong. Please try again.");
            }
            
            submitBtn.disabled = false;
            submitBtn.textContent = getTranslation('contact.form.submit', currentLanguage) || "Send Message";
        });
    }
    
    const languageSwitch = document.getElementById('language-switch');
    const mobileLanguageSwitch = document.getElementById('mobile-language-switch');
    
    let currentLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        applyTranslations(currentLanguage);
    }
    
    if (languageSwitch) {
        languageSwitch.addEventListener('click', toggleLanguage);
    }
    
    if (mobileLanguageSwitch) {
        mobileLanguageSwitch.addEventListener('click', toggleLanguage);
    }
    
    applyTranslations(currentLanguage);
    
    setTimeout(type, 1000);
});