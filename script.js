// psaní textu Welcome
const text = "Welcome to my Chaos.";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}

setTimeout(type, 1500);
// oživení about-me-box při scrollování
document.addEventListener('DOMContentLoaded', function () {
  const aboutMeBox = document.querySelector('.about-me-box');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutMeBox.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(aboutMeBox);
});
// Funkce pro inicializaci particles
function initParticles() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS(); // smaže staré particles
      window.pJSDom = [];
    }
  
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ff0000" // začínají červeně
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 1,
          "random": false
        },
        "size": {
          "value": 1.5,
          "random": false
        },
        "line_linked": {
          "enable": true,
          "distance": 140,
          "color": "#ff0000",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          }
        }
      },
      "retina_detect": true
    });
  }
  
  // Po načtení stránky
  window.addEventListener('load', () => {
    initParticles();
  });
  
  // === Funkce na změnu barvy při scrollu ===
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / maxScroll;
  
    // Přechod z červené (255,0,0) na bílou (255,255,255)
    const red = 255;
    const green = Math.floor(scrollPercent * 255);
    const blue = Math.floor(scrollPercent * 255);
  
    const newColor = `rgb(${red}, ${green}, ${blue})`;
  
    if (window.pJSDom && window.pJSDom.length > 0) {
      const pJS = window.pJSDom[0].pJS;
  
      pJS.particles.color.value = newColor;
      pJS.particles.array.forEach(particle => {
        particle.color.rgb.r = red;
        particle.color.rgb.g = green;
        particle.color.rgb.b = blue;
      });
  
      pJS.particles.line_linked.color = newColor;
      pJS.particles.line_linked.color_rgb_line = { r: red, g: green, b: blue };
    }
  });
  
  // Když se stránka vrátí po alt+tab
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      initParticles();
    }
  });
  
  // Při změně velikosti okna
  window.addEventListener('resize', function () {
    initParticles();
  });
  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 150); // každá karta má zpoždění 150ms oproti předchozí
        }
      });
    }, { threshold: 0.2 }); // když je 20% karty vidět
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });