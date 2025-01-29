(() => {
  const kitchenData = [
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
      discount: "20% OFF",
      image: "assets/images/food-2.png",
      name: "Italian Pasta",
      price: "₹220",
      rating: "4.8",
      time: "40-60 min",
    },
    {
      discount: "25% OFF",
      image: "assets/images/food-3.png",
      name: "Chicken Biryani",
      price: "₹250",
      rating: "4.9",
      time: "45-60 min",
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
      discount: "20% OFF",
      image: "assets/images/food-2.png",
      name: "Italian Pasta",
      price: "₹220",
      rating: "4.8",
      time: "40-60 min",
    },
    {
      discount: "25% OFF",
      image: "assets/images/food-3.png",
      name: "Chicken Biryani",
      price: "₹250",
      rating: "4.9",
      time: "45-60 min",
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
      discount: "20% OFF",
      image: "assets/images/food-2.png",
      name: "Italian Pasta",
      price: "₹220",
      rating: "4.8",
      time: "40-60 min",
    },
    {
      discount: "25% OFF",
      image: "assets/images/food-3.png",
      name: "Chicken Biryani",
      price: "₹250",
      rating: "4.9",
      time: "45-60 min",
    },
  ];

  const kitchenCardsContainer = document.querySelector(".kitchen-cards");

  // Clear existing content
  kitchenCardsContainer.innerHTML = "";

  // Generate cards from data
  kitchenData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "kitchen-card";

    card.innerHTML = `
      <div class="discount">${item.discount}</div>
      <img src="${item.image}" alt="${item.name}" />
      <div class="card-content">
        <h3>${item.name}</h3>
        <div class="price">${item.price}</div>
        <div class="details">
          <div class="rating">
            <div class="star-icon"><img src="assets/icons/star.svg" alt="star" style="width: 0.7rem; height: 0.7rem;"/></div>
            <div class="rating-value">${item.rating}</div>
          </div>
          <div class="time">${item.time}</div>
          <button class="add-to-cart">
            <div class="plus-icon"><img src="assets/icons/plus.svg" alt="plus" style="width: 1rem; height: 1rem;" /></div>
          </button>
        </div>
      </div>
    `;

    kitchenCardsContainer.appendChild(card);
  });

  // Add click handlers for add to cart buttons
  const addToCartButtons = document.querySelectorAll(
    ".kitchen-card .add-to-cart"
  );

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".kitchen-card");
      const itemName = card.querySelector("h3").textContent;
      const itemPrice = card.querySelector(".price").textContent;

      console.log("Added to cart:", {
        name: itemName,
        price: itemPrice,
      });

      // Add animation effect
      button.style.transform = "scale(0.8)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 200);
    });
  });
})();
