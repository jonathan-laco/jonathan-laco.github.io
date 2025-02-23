particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#EDEDED",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: false,
      },
    },
  },
  interactivity: {},
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
