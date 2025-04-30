document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = Array.from(document.querySelectorAll("section"))
      .filter((el) => el.id);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          navLinks.forEach(link => {
            const span = link.querySelector("span");
            if (link.dataset.section === activeId) {
              span.classList.add("active-link");
            } else {
              span.classList.remove("active-link");
            }
          });
        }
      });
    }, {
      threshold: 0.6
    });
  
    sections.forEach(section => observer.observe(section));
  });
  