export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.toggleTheme": "Toggle theme",
    "nav.toggleMenu": "Toggle menu",

    "hero.greeting": "Hello, my name is",
    "hero.title1": ".NET Developer",
    "hero.title2": "Backend Specialist",
    "hero.title3": "C# Expert",

    "about.title": "About Me",
    "about.subtitle": "Get to know more about me and my professional journey",
    "about.whoAmI": "Who am I?",
    "about.email": "Email",
    "about.location": "Location",
    "about.education": "Education",
    "about.experience": "Experience",
    "about.getInTouch": "Get In Touch",

    "skills.title": "My Skills",
    "skills.subtitle":
      "Here are the technologies and methodologies I specialize in",

    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my recent development work",
    "projects.liveDemo": "Live Demo",
    "projects.viewCode": "View Code",
    "projects.technologies": "Technologies",
    "projects.moreProjects": "More Projects",
    "projects.checkGitHub": "Check out more projects on GitHub",
    "projects.viewGitHub": "View GitHub",

    "experience.title": "Experience & Education",
    "experience.subtitle": "My professional journey and career highlights",
    "experience.education": "Education",
    "experience.workExperience": "Work Experience",
    "experience.downloadCV": "Download CV",
    "experience.downloadCVSubtitle": "Get a copy of my resume",
    "experience.download": "Download",

    "footer.tagline": "Backend Developer",
    "footer.description":
      "Passionate about creating scalable and efficient solutions with modern technologies.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.backToTop": "Back to Top",
    "footer.rightsReserved": "All rights reserved.",
    "footer.builtWith": "Built with",

    "aria.toggleLanguage": "Toggle language",
    "aria.toggleDarkMode": "Toggle dark mode",
    "aria.toggleMenu": "Toggle menu",
    "aria.switchToLight": "Switch to light mode",
    "aria.switchToDark": "Switch to dark mode",
    "aria.scrollToTop": "Scroll to top",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.toggleTheme": "Cambiar tema",
    "nav.toggleMenu": "Alternar menú",

    "hero.greeting": "Hola, mi nombre es",
    "hero.title1": "Desarrollador .NET",
    "hero.title2": "Especialista Backend",
    "hero.title3": "Experto en C#",

    "about.title": "Sobre Mí",
    "about.subtitle": "Conoce más sobre mí y mi trayectoria profesional",
    "about.whoAmI": "¿Quién soy?",
    "about.email": "Correo",
    "about.location": "Ubicación",
    "about.education": "Educación",
    "about.experience": "Experiencia",
    "about.getInTouch": "Contáctame",

    "skills.title": "Mis Habilidades",
    "skills.subtitle":
      "Estas son las tecnologías y metodologías en las que me especializo",

    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Una selección de mis trabajos recientes",
    "projects.liveDemo": "Demo en Vivo",
    "projects.viewCode": "Ver Código",
    "projects.technologies": "Tecnologías",
    "projects.moreProjects": "Más Proyectos",
    "projects.checkGitHub": "Mira más proyectos en GitHub",
    "projects.viewGitHub": "Ver GitHub",

    "experience.title": "Experiencia y Educación",
    "experience.subtitle": "Mi trayectoria profesional y logros destacados",
    "experience.education": "Educación",
    "experience.workExperience": "Experiencia Laboral",
    "experience.downloadCV": "Descargar CV",
    "experience.downloadCVSubtitle": "Obtén una copia de mi currículum",
    "experience.download": "Descargar",

    "footer.tagline": "Desarrollador Backend",
    "footer.description":
      "Apasionado por crear soluciones escalables y eficientes con tecnologías modernas.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contacto",
    "footer.backToTop": "Volver Arriba",
    "footer.rightsReserved": "Todos los derechos reservados.",
    "footer.builtWith": "Construido con",

    "aria.toggleLanguage": "Cambiar idioma",
    "aria.toggleDarkMode": "Cambiar modo oscuro",
    "aria.toggleMenu": "Alternar menú",
    "aria.switchToLight": "Cambiar a modo claro",
    "aria.switchToDark": "Cambiar a modo oscuro",
    "aria.scrollToTop": "Volver arriba",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
