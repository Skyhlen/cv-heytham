document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "all 0.6s ease-out";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, 300 * index);
  });

  // Effet sur les liens de contact
  const contactLinks = document.querySelectorAll(".contact a");
  contactLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#ffcc00";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "";
    });
  });

  console.log("Bienvenue sur le CV interactif de Heytham !");
});
