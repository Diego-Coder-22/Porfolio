document.addEventListener("DOMContentLoaded", () => {

    gsap.to(".loading-bar", {
        scaleX: 0,
        stagger: {
          amount: 0.1,
          from: "center",
        },
        duration: 0.5,
      });
  
      gsap.to(".loading", {
        opacity: 0,
        pointerEvents: "none",
        delay: 1,
        duration: 0.5,
        onComplete: () => {
          document.querySelector(".loading").style.display = "none";
        },
      });
      
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const sectionTitles = document.querySelectorAll(".section-title");

    sectionTitles.forEach((title) => {
      // Separar en letras y palabras
      const text = new SplitType(title, {
        types: "chars, words",
        charClass: "title-letter",
      });

      // Estado inicial de cada letra
      gsap.set(text.chars, {
        fontWeight: 100,
        opacity: 0,
        translateX: 100,
      });

      // Animación al hacer scroll
      gsap.to(text.chars, {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        duration: 0.5,
        fontWeight: 900,
        stagger: 0.05,
        scrollTrigger: {
          trigger: title.closest(".section-header") || title,
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      });

      // Animación interactiva al hover
      text.chars.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
          gsap.to(letter, {
            translateY: Math.floor(Math.random() * 101) - 110,
            rotateZ: Math.floor(Math.random() * 101) - 50,
            translateX: Math.floor(Math.random() * 61) - 30,
            duration: 0.5,
            ease: "expo.out",
          });
        });

        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            translateY: 0,
            rotateZ: 0,
            translateX: 0,
            delay: 0.3,
            ease: "back.out(3)",
          });
        });
      });
    });

    // Hero title animación
    const docStyle = getComputedStyle(document.documentElement);
    const heroTitle = document.querySelector(".work-title");
    const heroTitleText = new SplitType(heroTitle, {
        types: "chars, words",
        charClass: "title-letter"
    });

    gsap.set(heroTitleText.chars, {
        opacity: 0,
        translateY: 100,
    });

    gsap.to(heroTitleText.chars, {
        opacity: 1,
        translateY: 0,
        ease: "back.out(2)",
        stagger: .009,
        delay: .5
    });

    // Animación interactiva para .work-title
    heroTitleText.chars.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
            gsap.to(letter, {
                translateY: Math.floor(Math.random() * 101) - 110,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                duration: 0.5,
                ease: "back.out",
                color: "#fba820",
            });
        });

        letter.addEventListener("mouseleave", () => {
            gsap.to(letter, {
                translateY: 0,
                rotateZ: 0,
                translateX: 0,
                delay: 0.5,
                duration: 0.7,
                ease: "back.out(4)",
                color: docStyle.getPropertyValue("--clr-black"),
            });
        });
    });
});
