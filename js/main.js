// Botón "PRESS START": desplaza hasta la sección de jugador
document.getElementById("press-start").addEventListener("click", () => {
  document.getElementById("jugador").scrollIntoView({ behavior: "smooth" });
});

// Estrellas pixel en el hero
(function () {
  const hero = document.querySelector(".hero");
  const reduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("span");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 2 + "s";
    if (reduce) s.style.animation = "none";
    hero.appendChild(s);
  }
})();

// Barras de stats: se llenan al entrar en pantalla
(function () {
  const fills = document.querySelectorAll(".bar .fill");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w;
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  fills.forEach((f) => obs.observe(f));
})();
