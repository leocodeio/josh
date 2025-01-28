(() => {
  const video = document.getElementById("promo-video");
  const videoContainer = document.querySelector(".video-wrapper");
  const playButton = document.querySelector(".play-button");
  const pauseButton = document.querySelector(".pause-button");

  if (video && playButton && pauseButton) {
    // Set initial state
    console.log("Initial state set");
    playButton.classList.add("visible");
    pauseButton.classList.remove("visible");

    // Play button click handler
    playButton.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Play button clicked");
      video
        .play()
        .then(() => {
          console.log("Video started playing");
          playButton.classList.remove("visible");
          pauseButton.classList.add("visible");
        })
        .catch((error) => {
          console.error("Error playing video:", error);
        });
    });

    // Pause button click handler
    pauseButton.addEventListener("click", (e) => {
      e.stopPropagation();
      video.pause();
      pauseButton.classList.remove("visible");
      playButton.classList.add("visible");
    });

    // Video state change handlers
    video.addEventListener("play", () => {
      playButton.classList.remove("visible");
      pauseButton.classList.add("visible");
    });

    video.addEventListener("pause", () => {
      pauseButton.classList.remove("visible");
      playButton.classList.add("visible");
    });

    video.addEventListener("ended", () => {
      pauseButton.classList.remove("visible");
      playButton.classList.add("visible");
    });
  }
})();
