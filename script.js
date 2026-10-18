(() => {
  "use strict";
  const progress = document.getElementById("scrollProgress");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  document.getElementById("year").textContent = new Date().getFullYear();

  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }));

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add("is-visible"));
})();
