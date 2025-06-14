// Menu


const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    });
});

const logoImg = document.querySelector(".logo img");

function getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/en/") || path.includes("/pt/")) {
        return "../img/";
    } else {
        return "img/";
    }
}

function updateLogoSrc(darkMode = false) {
    const basePath = getBasePath();
    logoImg.src = basePath + (darkMode ? "Logo-dark.png" : "Logo.png");
}

// Dark mode toggle
darkModeButton.addEventListener("change", () => {
    const isDark = darkModeButton.checked;
    document.body.classList.toggle("dark-mode", isDark);
    updateLogoSrc(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme
const savedTheme = localStorage.getItem("theme");
const isDark = savedTheme === "dark";
darkModeButton.checked = isDark;
document.body.classList.toggle("dark-mode", isDark);
updateLogoSrc(isDark);



const path = window.location.pathname;

let stringsArray;

if (path.includes("/en/")) {
  // Si la URL tiene "/en/", cargamos inglés
  stringsArray = [
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "FullStack Developer"
  ];
} else if (path.includes("/pt/")) {
  // Si la URL tiene "/pt/", cargamos portugués
  stringsArray = [
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Designer Gráfico",
    "Desenvolvedor FullStack"
  ];
} else {
  // Por defecto o español
  stringsArray = [
    "Desarrollador Frontend",
    "Desarrollador Backend",
    "Diseñador Gráfico",
    "Desarrollador FullStack"
  ];
}

const typed = new Typed(".multiple", {
  strings: stringsArray,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const languageDropdown = document.querySelector(".language-dropdown");
const languageButton = languageDropdown?.querySelector(".language-current");
const languageList = languageDropdown?.querySelector(".language-list");

languageButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    languageList.classList.toggle("show");
});

document.addEventListener("click", () => {
    languageList.classList.remove("show");
});

//slide

let copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);

//Animations
window.sr = ScrollReveal();

sr.reveal(".section-title", {
    duration:2500, origin:"left", distance:"100px", delay:300,
});
sr.reveal(".left-hi", {
    duration:2100, origin:"top", distance:"130px", delay:400,
});
sr.reveal("h1", {
    duration:2100, origin:"top", distance:"100px", delay:300,
});
sr.reveal("h4", {
    duration:2100, origin:"left", distance:"190px", delay:700, 
});
sr.reveal(".left-p", {
    duration:2500, origin:"left", distance:"150px", delay:600,
});
sr.reveal(".social", {
    duration:2100, origin:"bottom", distance:"120px", delay:300,
});
sr.reveal(".social a", {
    duration:2100, origin:"bottom", distance:"120px", delay:300,
});
sr.reveal(".social a i", {
    duration:2100, origin:"bottom", distance:"120px", delay:300,
});
sr.reveal(".profile", {
    duration:2500, origin:"right", distance:"260px", delay:300,
});

sr.reveal(".bar", {
    duration:2500, origin:"left", distance:"100px", delay:300,
});

// Selecciona el botón
const buttonToTop = document.querySelector('.button-to-top');

// Evento para mostrar/ocultar el botón
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Aparece después de 300px
        buttonToTop.classList.add('visible');
    } else {
        buttonToTop.classList.remove('visible');
    }
});

// Función para volver al inicio
buttonToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
