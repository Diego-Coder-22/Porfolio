// Menu


const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    const logoImg = document.querySelector(".logo img"); // Selecciona el logo
});

// Dark - Light Mod

const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;
const logoImg = document.querySelector(".logo img"); // Selecciona el logo

const enebleDarkMode = () => {
    body.classList.add("dark-mode");
    logoImg.src = "img/Logo-dark.png"; // Cambia la imagen del logo al modo nocturno
}

const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    logoImg.src = "img/Logo.png"; // Cambia la imagen del logo al modo normal
}

darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
        enebleDarkMode();
    } else {
        disableDarkMode();
    }
});

//Multiple Text

const typed = new Typed(".multiple",{
    strings:["Desarrollador Frontend", "Estudiante Backend", "Diseñador Gráfico"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})

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
    duration:2100, origin:"bottom", distance:"160px", delay:400, interval: 100,
});
sr.reveal(".social a", {
    duration:2100, origin:"bottom", distance:"160px", delay:400, interval: 200,
});
sr.reveal(".social a i", {
    duration:2100, origin:"bottom", distance:"160px", delay:400, interval: 300,
});
sr.reveal(".btn", {
    duration:2000, origin:"bottom", distance:"120px", delay:300,
});
sr.reveal(".profile", {
    duration:2500, origin:"right", distance:"260px", delay:300,
});

sr.reveal(".bar", {
    duration:2500, origin:"left", distance:"100px", delay:300,
});

