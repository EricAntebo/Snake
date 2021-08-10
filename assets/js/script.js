particlesJS("particles-js", {
    particles: {
      number: {
        value: 300,
        density: { enable: true, value_area: 1000.1416867389551 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5000708433694776,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 131.85970127784034,
          size_min: 27.970239664996438,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 0,
        color: "#ffffff",
        opacity: 0.5417434136502673,
        width: 0
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: false, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: {
          distance: 152.02702702702692,
          line_linked: { opacity: 0.44514069013927765 }
        },
        bubble: {
          distance: 250,
          size: 5,
          duration: 2,
          opacity: 0.844594594594594,
          speed: 3
        },
        repulse: { distance: 616.5540540540536, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });