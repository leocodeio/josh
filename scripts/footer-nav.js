(() => {
  const navLinksDiv = document.querySelector(".footer-nav-links");
  const menuButton = document.querySelector(".footer-menu-button");
  const navButtonsDiv = document.querySelector(".footer-nav-buttons");

  // Menu toggle functionality
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinksDiv.classList.toggle("active");
    navButtonsDiv.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".footer")) {
      navLinksDiv.classList.remove("active");
      navButtonsDiv.classList.remove("active");
    }
  });

  const navLinks = {
    home: {
      slug: "Home",
      href: "#",
    },
    about: {
      slug: "About",
      href: "#",
    },
    menu: {
      slug: "Menu",
      href: "#",
    },
    blog: {
      slug: "Blog",
      href: "#",
    },
    contact: {
      slug: "Contact",
      href: "#",
    },
  };

  Object.keys(navLinks).map((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = navLinks[link].slug;
    a.href = navLinks[link].href;
    li.appendChild(a);
    navLinksDiv.appendChild(li);
  });


  const navButtons = [
    {
      icon: "facebook",
      href: "#",
    },
    {
      icon: "instagram",
      href: "#",
    },
  ];

  navButtons.map((button) => {
    const a = document.createElement("a");
    a.href = button.href;
    const img = document.createElement("img");
    img.src = `assets/icons/${button.icon}.svg`;
    img.alt = button.icon;
    a.appendChild(img);
    navButtonsDiv.appendChild(a);
  });
})();
