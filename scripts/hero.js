(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {
      handleSearch();
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    });

    function handleSearch() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log("Searching for:", searchTerm);
      }
    }
  });
})();
