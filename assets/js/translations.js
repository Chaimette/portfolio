// First, create a translations object with your language data
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
        description2: "My journey in web development started when I was in college, where I discovered my passion for creating digital experiences. Since then, I've done everything to improve my skills with various training, in different programming languages.",
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
        description2: "Mon parcours dans le développement web a commencé lorsque j'étais à l'université, où j'ai découvert ma passion pour la création d'expériences numériques. Depuis, j'ai tout fait pour améliorer mes compétences grâce à diverses formations, dans différents langages de programmation.",
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
  
  // Create translation targets with their respective selectors and translation keys
  const translationTargets = [
    // Navigation
    { selector: 'nav ul li:nth-child(1) a', key: 'nav.home' },
    { selector: 'nav ul li:nth-child(2) a', key: 'nav.about' },
    { selector: 'nav ul li:nth-child(3) a', key: 'nav.projects' },
    { selector: 'nav ul li:nth-child(4) a', key: 'nav.skills' },
    { selector: 'nav ul li:nth-child(5) a', key: 'nav.contact' },
    
    // Mobile menu
    { selector: '#mobile-menu ul li:nth-child(1) a', key: 'nav.home' },
    { selector: '#mobile-menu ul li:nth-child(2) a', key: 'nav.about' },
    { selector: '#mobile-menu ul li:nth-child(3) a', key: 'nav.projects' },
    { selector: '#mobile-menu ul li:nth-child(4) a', key: 'nav.skills' },
    { selector: '#mobile-menu ul li:nth-child(5) a', key: 'nav.contact' },
    
    // Home section
    { selector: '#home h1', key: 'home.greeting', applyFunction: (element, text) => {
        element.innerHTML = text + ' <span class="text-primary">Chaïma <br />El Kadiri</span>';
      }
    },
    { selector: '#home h2', key: 'home.profession', applyFunction: (element, text) => {
        // Only update the static part, not the typing element
        element.childNodes[0].textContent = text + ' ';
      }
    },
    { selector: '#home p', key: 'home.description' },
    { selector: '#home a[href="#projects"]', key: 'home.cta.work' },
    { selector: '#home a[href="#contact"]', key: 'home.cta.contact' },
    
    // About section
    { selector: '#about h2', key: 'about.title' },
    { selector: '#about > div > div:first-child p', key: 'about.subtitle' },
    { selector: '#about h3', key: 'about.whoIAm' },
    { selector: '#about > div > div.lg\\:w-1\\/2.lg\\:pl-16 > p:first-of-type', key: 'about.description1' },
    { selector: '#about > div > div.lg\\:w-1\\/2.lg\\:pl-16 > p:nth-of-type(2)', key: 'about.description2' },
    { selector: '#about .grid-cols-2 > div:nth-child(1) > p:first-child', key: 'about.info.name' },
    { selector: '#about .grid-cols-2 > div:nth-child(2) > p:first-child', key: 'about.info.email' },
    { selector: '#about .grid-cols-2 > div:nth-child(3) > p:first-child', key: 'about.info.location' },
    { selector: '#about .grid-cols-2 > div:nth-child(4) > p:first-child', key: 'about.info.available' },
    { selector: '#about .grid-cols-2 > div:nth-child(4) > p:last-child', key: 'about.availableFor' },
    { selector: '#about a[download]', key: 'about.resume' },
    
    // Projects section
    { selector: '#projects h2', key: 'projects.title' },
    { selector: '#projects > div > div:first-child p', key: 'projects.subtitle' },
    { selector: '#projects .grid-cols-1.gap-8 > div:nth-child(1) .p-6 > p', key: 'projects.items.0.description' },
    { selector: '#projects .grid-cols-1.gap-8 > div:nth-child(2) .p-6 > p', key: 'projects.items.1.description' },
    { selector: '#projects .grid-cols-1.gap-8 > div:nth-child(3) .p-6 > p', key: 'projects.items.2.description' },
    { selector: '#projects .grid-cols-1.gap-8 a', key: 'projects.viewProject' },
    { selector: '#projects > div > div:last-child a', key: 'projects.viewAll' },
    
    // Skills section
    { selector: '#skills h2', key: 'skills.title' },
    { selector: '#skills > div > div:first-child p', key: 'skills.subtitle' },
    
    // Contact section
    { selector: '#contact h2', key: 'contact.title' },
    { selector: '#contact > div > div:first-child p', key: 'contact.subtitle' },
    { selector: '#contact .grid-cols-1.gap-12 > div:first-child h3', key: 'contact.info.title' },
    { selector: '#contact .grid-cols-1.gap-12 > div:first-child .space-y-6 > div:nth-child(1) h4', key: 'contact.info.email' },
    { selector: '#contact .grid-cols-1.gap-12 > div:first-child .space-y-6 > div:nth-child(2) h4', key: 'contact.info.phone' },
    { selector: '#contact .grid-cols-1.gap-12 > div:first-child .space-y-6 > div:nth-child(3) h4', key: 'contact.info.location' },
    { selector: '#contact .grid-cols-1.gap-12 > div:first-child .mt-8 h4', key: 'contact.info.follow' },
    { selector: '#contact-form h3', key: 'contact.form.title' },
    { selector: 'label[for="name"]', key: 'contact.form.name' },
    { selector: 'label[for="email"]', key: 'contact.form.email' },
    { selector: 'label[for="subject"]', key: 'contact.form.subject' },
    { selector: 'label[for="message"]', key: 'contact.form.message' },
    { selector: '#submit-btn', key: 'contact.form.submit' },
    
    // Footer
    { selector: 'footer p:first-of-type', key: 'footer.subtitle' },
    { selector: '.text-center.text-gray-400 p:first-child', key: 'footer.copyright' },
    { selector: '.text-center.text-gray-400 p:last-child', key: 'footer.madewith' }
  ];
  
  function loadTranslations(lang) {
    translationTargets.forEach(target => {
      const elements = document.querySelectorAll(target.selector);
      if (elements.length === 0) {
        console.warn(`No elements found for selector: ${target.selector}`);
        return;
      }
      
      const keyParts = target.key.split('.');
      let value = translations[lang];
      for (const part of keyParts) {
        if (value === undefined) break;
        value = value[part];
      }
      
      if (value === undefined) {
        console.warn(`No translation found for key: ${target.key} in language: ${lang}`);
        return;
      }
      
      elements.forEach(element => {
        if (target.applyFunction) {
          target.applyFunction(element, value);
        } else {
          element.textContent = value;
        }
      });
    });
    
    updateTypingWords(lang);
  }
  
  function updateTypingWords(lang) {
    if (translations[lang] && translations[lang].home && translations[lang].home.roles) {
      window.words = translations[lang].home.roles;
      
      window.wordIndex = 0;
      window.charIndex = 0;
      window.isDeleting = false;
      
      const typingElement = document.getElementById("typing");
      if (typingElement) {
        typingElement.textContent = '';
        if (window.typeTimeout) {
          clearTimeout(window.typeTimeout);
        }
        window.typeTimeout = setTimeout(type, 500);
      }
    }
  }
  
  function type() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;
    
    const currentWord = window.words[window.wordIndex];
  
    if (window.isDeleting) {
      typingElement.textContent = currentWord.substring(0, window.charIndex - 1);
      window.charIndex--;
      window.typingDelay = 100;
    } else {
      typingElement.textContent = currentWord.substring(0, window.charIndex + 1);
      window.charIndex++;
      window.typingDelay = 150;
    }
  
    if (!window.isDeleting && window.charIndex === currentWord.length) {
      window.isDeleting = true;
      window.typingDelay = 1000;
    } else if (window.isDeleting && window.charIndex === 0) {
      window.isDeleting = false;
      window.wordIndex = (window.wordIndex + 1) % window.words.length;
      window.typingDelay = 500;
    }
  
    window.typeTimeout = setTimeout(type, window.typingDelay);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const languageSwitch = document.getElementById('language-switch');
    const mobileLanguageSwitch = document.getElementById('mobile-language-switch');
    const allLanguageTexts = document.querySelectorAll('.language-text');
  
    if (!languageSwitch || !mobileLanguageSwitch) {
      console.error('Language switch buttons not found');
      return;
    }
  
    let currentLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    
    function updateLanguageDisplay() {
      const displayText = currentLanguage === 'en' ? translations.en.nav.language : translations.fr.nav.language;
      allLanguageTexts.forEach(text => text.textContent = displayText);
    }
  
    function toggleLanguage() {
      currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
      updateLanguageDisplay();
      loadTranslations(currentLanguage);
    }
  
    languageSwitch.addEventListener('click', toggleLanguage);
    mobileLanguageSwitch.addEventListener('click', toggleLanguage);
  
    updateLanguageDisplay();
    loadTranslations(currentLanguage);
    
    setTimeout(type, 1000);
  });