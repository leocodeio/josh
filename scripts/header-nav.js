(() => {
  const navLinksDiv = document.querySelector(".header-nav-links");
  const menuButton = document.querySelector(".menu-button");
  const navButtonsDiv = document.querySelector(".header-nav-buttons");

  // Menu toggle functionality
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinksDiv.classList.toggle("active");
    navButtonsDiv.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header")) {
      navLinksDiv.classList.remove("active");
      navButtonsDiv.classList.remove("active");
    }
  });

  // Original nav links code
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
      icon: "search",
      href: "#",
    },
    {
      icon: "shopping",
      href: "#",
      notification: true,
    },
  ];

  navButtons.map((button) => {
    const a = document.createElement("a");
    a.href = button.href;
    const img = document.createElement("img");
    img.src = `assets/icons/${button.icon}.svg`;
    img.alt = button.icon;

    // Create a wrapper div for positioning
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    wrapper.appendChild(img);

    // Add notification dot if specified
    if (button.notification) {
      const notificationDot = document.createElement("img");
      notificationDot.src = "assets/icons/notification-dot.svg";
      notificationDot.alt = "notification";
      notificationDot.style.position = "absolute";
      notificationDot.style.top = "2px";
      notificationDot.style.right = "-2px";
      wrapper.appendChild(notificationDot);
    }

    a.appendChild(wrapper);
    navButtonsDiv.appendChild(a);
  });
})();
