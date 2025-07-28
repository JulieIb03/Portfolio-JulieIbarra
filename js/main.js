$(function () {
  "use strict";

  $(".fakeLoader").fakeLoader({
    timeToHide: 1200, //Time in milliseconds for fakeLoader disappear

    zIndex: "999", //Default zIndex

    spinner: "spinner3", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

    bgColor: "#212121", //Hex, RGB or RGBA colors
  });

  // smooth scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50,
        },
        850
      );
    }
  });

  // hide navbar on mobile after click
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // carousel resume
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
  });

  // collapse show on resume
  $(".collapse-show").collapse();

  // porfolio filterizr
  $(".filtr-container").imagesLoaded(function () {
    var filterizr = $(".filtr-container").filterizr();
  });

  // portfolio filter
  $(".portfolio-filter-menu li").on("click", function () {
    $(".portfolio-filter-menu li").removeClass("active");
    $(this).addClass("active");
  });

  // // portfolio magnific popup
  // $('.portfolio').each(function() { // the containers for all your galleries
  //     $(this).magnificPopup({
  //         delegate: '.portfolio-popup', // the selector for portfolio item
  //         type: 'image',
  //         gallery: {
  //             enabled: true
  //         }
  //     });
  // });

  // navbar on scroll
  $(window).on("scroll", function () {
    var vScroll = $(this).scrollTop();

    if (vScroll > 100) {
      $(".navbar").addClass("fix");
    } else {
      $(".navbar").removeClass("fix");
    }
  });

  // traducciones multilenguaje
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.resume": "Resume",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "nav.language": "🌐 Language",
      "home.intro": "I am Julie Ibarra",
      "home.title.line": "Multimedia Engineer",
      "home.contact": "Contact Me",
      "about.title": "About Me",
      "about.subtitle": "Focused on Web Development and Design",
      "about.description":
        "I explore the intersection of technology and human sciences to create thoughtful digital experiences. With a focus on UI/UX and frontend development, I approach each project combining creativity, usability, and precision. My involvement in medieval history reconstruction also brings a unique perspective to my design process.",
      "resume.title": "My Resume",
      "resume.experience.title": "Experience",
      "resume.experience.subtitle.1": "In different areas of",
      "resume.experience.subtitle.2": "development, design",
      "resume.experience.subtitle.3": "and multimedia production",
      "resume.experience.job1":
        "UI Designer & Frontend Developer (February, 2024 - Present)",
      "resume.experience.job2":
        "Web/Multimedia Designer (March, 2023 - September, 2023)",
      "resume.experience.job3":
        "UI Designer - Video Editor (March to April, 2023 - August to September, 2023)",
      "resume.experience.job4":
        "UI/UX Designer - Unity Developer (March to June, 2023)",
      "resume.education.title": "Education",
      "resume.education.subtitle.1": "Learning experience at",
      "resume.education.subtitle.2": "qualified institutions",
      "resume.education.item1": "Multimedia Engineer (2019 - 2024)",
      "resume.education.item2": "Modern Web Animations (2025)",
      "resume.education.item3": "Figma to Lottie Course (2024)",
      "resume.education.item4":
        "Video game Training Program Certificate (2023)",
      "resume.skills.title": "Skill",
      "resume.skills.subtitle.1": "With good",
      "resume.skills.subtitle.2": "Personal",
      "resume.skills.subtitle.3": "and Professional Skills",
      "resume.skills.professional": "Professional Skill",
      "resume.skills.personal": "Personal Skill",
      "resume.skills.title": "Skill",
      "resume.skills.subtitle.1": "With good",
      "resume.skills.subtitle.2": "Personal",
      "resume.skills.subtitle.3": "and Professional Skills",
      "resume.skills.professional": "Professional Skill",
      "resume.skills.personal": "Personal Skill",

      "skills.frontend":
        "Frontend Development - HTML5, CSS3, JavaScript, React.js, Wordpress",
      "skills.uxui": "UX/UI Design - Figma, Design Thinking, Usability testing",
      "skills.backend":
        "Backend Development - PHP, Node.js, REST APIs, database integration",
      "skills.multimedia":
        "Multimedia Tools - After Effects, Adobe Illustrator, Photoshop, Unity, Unreal",
      "skills.methodologies": "Methodologies - Agile, Scrum",

      "skills.research": "Research",
      "skills.communication": "Communication",
      "skills.creativity": "Creativity",
      "skills.teamwork": "Teamwork",
      "skills.adaptability": "Adaptability",

      "portfolio.title": "My Portfolio",
      "portfolio.filters.all": "See All",
      "portfolio.filters.webdev": "Web Development",
      "portfolio.filters.uiux": "UX/UI & Web Design",
      "portfolio.filters.games": "Games & Interactive Projects",
      "portfolio.filters.graphic": "Multimedia & Graphic Design",
      "portfolio.filters.video": "Video Editing & Motion Graphics",

      "project.portal_umng.title": "UMNG Research Center Portal",
      "project.portal_umng.description":
        "UI design for UMNG Research Center's review portal.",

      "project.acuarela.title": "Acuarela Web",
      "project.acuarela.description":
        "UI design for Acuarela (daycare management app).",

      "project.eucalyptus.title": "Eucalyptus Fest",
      "project.eucalyptus.description":
        "UI for Eucalyptus Fest 2025 (education event).",

      "project.miembros.title": "Member portal 2.0",
      "project.miembros.description":
        "Redesigned BCCT portal for microservices management.",

      "project.webBCCT.title": "BCCT Website",
      "project.webBCCT.description":
        "Custom-coded site with WordPress CMS. Focus: UX/SEO.",

      "project.directorio.title": "BCCT Daycare Directory",
      "project.directorio.description":
        "Directory with filters, search, responsive design.",

      "projects.daycare_template.title": "Daycare Website Template",
      "projects.daycare_template.description":
        "Custom WordPress template for daycare sites.",

      "projects.bcct_portal.title": "BCCT Members Portal",
      "projects.bcct_portal.description":
        "Private portal for daycare activities management.",

      "projects.naska_wp.title": "Custom WP Management",
      "projects.naska_wp.description":
        "Custom WP pages for Naska Digital's programs.",

      "projects.bim_interview.title":
        "Interview: Carolina Garcés (BIM Manager)",
      "projects.bim_interview.description":
        "How coordination drives project success.",

      "projects.bim_supervision.title": "BIM Supervision Diploma Launch",
      "projects.bim_supervision.description":
        "Training in construction project control.",

      "projects.bim_infrastructure.title": "BIM Infrastructure Diploma Launch",
      "projects.bim_infrastructure.description":
        "Training with global tech certifications.",

      "projects.bim_challenges.title": "BIM Training Challenges",
      "projects.bim_challenges.description":
        "Team certification insights under ISO 19650.",

      "projects.bim_talk.title": "BIM Training Talk",
      "projects.bim_talk.description":
        "Experts share BIM-based info management practices.",

      "projects.bim_certification.title": "BIM Certification Value",
      "projects.bim_certification.description":
        "BIM boosts value in digital construction.",

      "projects.case_study.title": "Case Study: David Aguilera",
      "projects.case_study.description":
        "BIM benefits in design/construction (Naska grad).",

      "projects.pedalea.title": "Pedalea a la Mili App",
      "projects.pedalea.description":
        "Bike app prototype with routes/emergency tools.",

      "projects.all4voicing.title": "All4Voicing",
      "projects.all4voicing.description":
        "Workflow prototype for accessibility services.",

      "projects.estelar.title": "Estelar",
      "projects.estelar.description":
        "Unity game for sensory development in autism.",

      "projects.contraentrega.title": "Contraentrega",
      "projects.contraentrega.description":
        "Unreal arcade game: collect boxes, beat time.",

      "projects.kennedy_experience.title": "Kennedy History Experience",
      "projects.kennedy_experience.description":
        "Unity experience about Kennedy's 1st house.",

      "projects.havamal.title": "Hávamál 2D Animation",
      "projects.havamal.description":
        "2D animation (Hávamál excerpt) with AE/Illustrator.",

      "contact.title": "Contact Me",
      "contact.subtitle_part1": "Connect with me to explore how",
      "contact.highlight": "I can add value",
      "contact.subtitle_part2": "to your next project!",

      "form.first_name": "First Name",
      "form.last_name": "Last Name",
      "form.email": "Email Address",
      "form.subject": "Subject",
      "form.message": "Message",
      "form.send_button": "Send Message",

      "success.title": "Your message has been sent!",
      "success.message":
        "Thank you for getting in touch and trusting me. I'll respond as soon as possible.",

      "footer.copyright": "Copyright, 2025 © All Right Reserved",
    },
    es: {
      "nav.home": "Inicio",
      "nav.about": "Acerca de mí",
      "nav.resume": "Hoja de vida",
      "nav.portfolio": "Portafolio",
      "nav.contact": "Contacto",
      "nav.language": "🌐 Idioma",
      "home.intro": "Soy Julie Ibarra",
      "home.title.line": "Ingeniera Multimedia",
      "home.contact": "Contáctame",
      "about.title": "Sobre mí",
      "about.subtitle": "Enfocada en Desarrollo y Diseño Web",
      "about.description":
        "Exploro la intersección entre la tecnología y las ciencias humanas para crear experiencias digitales significativas. Con enfoque en UI/UX y desarrollo frontend, abordo cada proyecto combinando creatividad, usabilidad y precisión. Mi participación en la reconstrucción de la historia medieval también aporta una perspectiva única a mi proceso de diseño.",
      "resume.title": "Mi Hoja de Vida",
      "resume.experience.title": "Experiencia",
      "resume.experience.subtitle.1": "En diferentes áreas de",
      "resume.experience.subtitle.2": "desarrollo, diseño",
      "resume.experience.subtitle.3": "y producción multimedia",
      "resume.experience.job1":
        "Diseñadora UI & Desarrolladora Frontend (Febrero, 2024 - Actualidad)",
      "resume.experience.job2":
        "Diseñadora Web/Multimedia (Marzo, 2023 - Septiembre, 2023)",
      "resume.experience.job3":
        "Diseñadora UI - Editora de Video (Marzo a Abril, 2023 - Agosto a Septiembre, 2023)",
      "resume.experience.job4":
        "Diseñadora UI/UX - Desarrolladora Unity (Marzo a Junio, 2023)",
      "resume.education.title": "Educación",
      "resume.education.subtitle.1": "Experiencia de aprendizaje en",
      "resume.education.subtitle.2": "instituciones calificadas",
      "resume.education.item1": "Ingeniería Multimedia (2019 - 2024)",
      "resume.education.item2": "Animaciones Web Modernas (2025)",
      "resume.education.item3": "Curso de Figma a Lottie (2024)",
      "resume.education.item4":
        "Certificado en Desarrollo de Videojuegos (2023)",
      "resume.skills.title": "Habilidades",
      "resume.skills.subtitle.1": "Con buenas",
      "resume.skills.subtitle.2": "Habilidades Personales",
      "resume.skills.subtitle.3": "y Profesionales",
      "resume.skills.professional": "Habilidades Profesionales",
      "resume.skills.personal": "Habilidades Personales",
      "resume.skills.title": "Habilidades",
      "resume.skills.subtitle.1": "Con buenas",
      "resume.skills.subtitle.2": "habilidades personales",
      "resume.skills.subtitle.3": "y profesionales",
      "resume.skills.professional": "Habilidades Profesionales",
      "resume.skills.personal": "Habilidades Personales",

      "skills.frontend":
        "Desarrollo Frontend - HTML5, CSS3, JavaScript, React.js, Wordpress",
      "skills.uxui":
        "Diseño UX/UI - Figma, Design Thinking, Pruebas de usabilidad",
      "skills.backend":
        "Desarrollo Backend - PHP, Node.js, APIs REST, integración de bases de datos",
      "skills.multimedia":
        "Herramientas Multimedia - After Effects, Adobe Illustrator, Photoshop, Unity, Unreal",
      "skills.methodologies": "Metodologías - Ágil, Scrum",

      "skills.research": "Investigación",
      "skills.communication": "Comunicación",
      "skills.creativity": "Creatividad",
      "skills.teamwork": "Trabajo en equipo",
      "skills.adaptability": "Adaptabilidad",

      "portfolio.title": "MI Portfolio",
      "portfolio.filters.all": "Ver todo",
      "portfolio.filters.webdev": "Desarrollo Web",
      "portfolio.filters.uiux": "UX/UI & Diseño Web",
      "portfolio.filters.games": "Juegos y proyectos interactivos",
      "portfolio.filters.graphic": "Diseño gráfico y multimedia",
      "portfolio.filters.video": "Edición de Vídeo & Motion Graphics",

      "project.portal_umng.title": "Portal UMNG",
      "project.portal_umng.description":
        "Diseño de UI y flujo para portal del Centro de Investigación UMNG.",

      "project.acuarela.title": "Acuarela Web",
      "project.acuarela.description":
        "Diseño web/móvil para app de gestión de jardines infantiles.",

      "project.eucalyptus.title": "Eucalyptus Fest",
      "project.eucalyptus.description":
        "UI para evento educativo infantil inspirado en naturaleza.",

      "project.miembros.title": "Portal de miembros 2.0",
      "project.miembros.description":
        "Rediseño de portal BCCT para gestión de microservicios.",

      "project.webBCCT.title": "Sitio web de BCCT",
      "project.webBCCT.description":
        "Sitio personalizado con WordPress. Enfoque en UX/SEO/responsivo.",

      "project.directorio.title": "Directorio BCCT",
      "project.directorio.description":
        "Directorio con filtros, búsqueda y diseño adaptable.",

      "projects.daycare_template.title": "Plantilla para Guarderías",
      "projects.daycare_template.description":
        "Plantilla WordPress personalizada para guarderías.",

      "projects.bcct_portal.title": "Portal BCCT",
      "projects.bcct_portal.description":
        "Acceso privado a actividades y gestión de servicios.",

      "projects.naska_wp.title": "Gestión WordPress",
      "projects.naska_wp.description":
        "Páginas personalizadas para programas de Naska Digital.",

      "projects.bim_interview.title": "Entrevista: Carolina Garcés (BIM)",
      "projects.bim_interview.description":
        "Cómo la coordinación impulsa el éxito de proyectos.",

      "projects.bim_supervision.title": "Diploma Interventoría BIM",
      "projects.bim_supervision.description":
        "Formación en control de proyectos con BIM.",

      "projects.bim_infrastructure.title": "Diploma Infraestructura BIM",
      "projects.bim_infrastructure.description":
        "Formación con socios tecnológicos líderes.",

      "projects.bim_challenges.title": "Retos Formación BIM",
      "projects.bim_challenges.description":
        "Certificación de equipos bajo ISO 19650.",

      "projects.bim_talk.title": "Charla Formación BIM",
      "projects.bim_talk.description":
        "Buenas prácticas en gestión de información con BIM.",

      "projects.bim_certification.title": "Certificación BIM",
      "projects.bim_certification.description":
        "BIM aumenta valor profesional en construcción.",

      "projects.case_study.title": "Caso: David Aguilera",
      "projects.case_study.description":
        "Beneficios de BIM en diseño/construcción.",

      "projects.pedalea.title": "Pedalea a la Mili",
      "projects.pedalea.description":
        "App de rutas en bici con herramientas de emergencia.",

      "projects.all4voicing.title": "All4Voicing",
      "projects.all4voicing.description":
        "Prototipo para servicios de accesibilidad.",

      "projects.estelar.title": "Estelar",
      "projects.estelar.description":
        "Videojuego educativo en Unity para niños autistas.",

      "projects.contraentrega.title": "Contraentrega",
      "projects.contraentrega.description":
        "Juego en Unreal: recolecta cajas contra tiempo.",

      "projects.kennedy_experience.title": "Experiencia Kennedy",
      "projects.kennedy_experience.description":
        "Recorrido por la historia de su primera casa.",

      "projects.havamal.title": "Animación Hávamál",
      "projects.havamal.description":
        "Fragmento animado 2D con Illustrator/After Effects.",

      "contact.title": "Contáctame",
      "contact.subtitle_part1": "Conéctate conmigo para explorar cómo",
      "contact.highlight": "puedo agregar valor",
      "contact.subtitle_part2": "a tu próximo proyecto!",

      "form.first_name": "Nombre",
      "form.last_name": "Apellido",
      "form.email": "Correo electrónico",
      "form.subject": "Asunto",
      "form.message": "Mensaje",
      "form.send_button": "Enviar Mensaje",

      "success.title": "¡Tu mensaje ha sido enviado!",
      "success.message":
        "Gracias por contactarme y confiar en mí. Responderé lo antes posible.",

      "footer.copyright":
        "Derechos de autor, 2025 © Todos los derechos reservados",
    },
  };

  function setLanguage(lang) {
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (translations[lang] && translations[lang][key]) {
        $(this).text(translations[lang][key]);
      }
    });
  }

  // evento al hacer clic en idioma
  $(".lang-select").on("click", function (e) {
    e.preventDefault();
    const lang = $(this).data("lang");
    setLanguage(lang);
  });

  // idioma por defecto
  setLanguage("en");
});
