(() => {
  const carousel = document.querySelector("[data-target='carousel']");
  const leftButton = document.querySelector("[data-action='slideLeft']");
  const rightButton = document.querySelector("[data-action='slideRight']");

  const popularItems = [
    {
      discount: "50% OFF",
      image: "assets/images/food-1.png",
      name: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "50-79 min",
    },
    {
      discount: "30% OFF",
      image: "assets/images/food-1.png",
      name: "Classic Burger",
      price: "₹150",
      rating: "4.5",
      time: "30-45 min",
    },
    {
      discount: "50% OFF",
      image: "assets/images/food-1.png",
      name: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "50-79 min",
    },
    {
      discount: "30% OFF",
      image: "assets/images/food-1.png",
      name: "Classic Burger",
      price: "₹150",
      rating: "4.5",
      time: "30-45 min",
    },
    {
      discount: "50% OFF",
      image: "assets/images/food-1.png",
      name: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "50-79 min",
    },
    {
      discount: "30% OFF",
      image: "assets/images/food-1.png",
      name: "Classic Burger",
      price: "₹150",
      rating: "4.5",
      time: "30-45 min",
    },
    {
      discount: "50% OFF",
      image: "assets/images/food-1.png",
      name: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "50-79 min",
    },
    {
      discount: "30% OFF",
      image: "assets/images/food-1.png",
      name: "Classic Burger",
      price: "₹150",
      rating: "4.5",
      time: "30-45 min",
    },
  ];

  // Clear existing content
  carousel.innerHTML = "";

  // Generate cards from data
  popularItems.forEach((item) => {
    const card = document.createElement("li");
    card.className = "card";
    card.setAttribute("data-target", "card");

    card.innerHTML = `
      <div class="card-discount">${item.discount}</div>
      <img class="card-image" src="${item.image}" alt="${item.name}" />
      <div class="card-content">
        <div class="card-header">
          <h3 class="card-title">${item.name}</h3>
          <div class="card-price">${item.price}</div>
        </div>
        <div class="card-details">
          <div class="card-rating">
            <img src="assets/icons/star.svg" alt="star" style="width: 0.7rem; height: 0.7rem;"/>
            <span>${item.rating}</span>
          </div>
          <div class="card-time">${item.time}</div>
          <button class="add-to-cart">
            <img src="assets/icons/plus.svg" alt="plus" style="width: 1rem; height: 1rem;" />
          </button>
        </div>
      </div>
    `;

    carousel.appendChild(card);
  });

  let offset = 0;
  const cardWidth = 275 + 32;
  const visibleCards = 3;
  const maxOffset = -(cardWidth * (popularItems.length - visibleCards));

  leftButton.addEventListener("click", () => {
    if (offset === 0) {
      leftButton.style.opacity = "0.5";
      rightButton.style.opacity = "1";
    } else {
      leftButton.style.opacity = "1";
      rightButton.style.opacity = "1";
    }

    if (offset < 0) {
      offset += cardWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });

  rightButton.addEventListener("click", () => {
    if (offset === maxOffset) {
      rightButton.style.opacity = "0.5";
      leftButton.style.opacity = "1";
    } else {
      rightButton.style.opacity = "1";
      leftButton.style.opacity = "1";
    }

    if (offset > maxOffset) {
      offset -= cardWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });

  if (offset === 0) {
    leftButton.style.opacity = "0.5";
  }
  if (offset === maxOffset) {
    rightButton.style.opacity = "0.5";
  }
})();
