function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
      section.classList.remove("show");
      section.classList.add("hidden");
    });
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.remove("hidden");
      setTimeout(() => target.classList.add("show"), 10);
  
    }
  
    // Hide menu on small screens after click
    const navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  }
  
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }
  