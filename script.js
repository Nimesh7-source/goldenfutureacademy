const heroVideo = document.getElementById("heroVideo");
const soundButton = document.getElementById("soundButton");
const soundIcon = document.getElementById("soundIcon");
const soundText = document.getElementById("soundText");

/* =========================================================
   VIDEO SOUND BUTTON
   ========================================================= */

soundButton.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;

  if (heroVideo.muted) {
    soundIcon.className = "fa-solid fa-volume-xmark";
    soundText.textContent = "Unmute";
    soundButton.setAttribute("aria-label", "Unmute video");
  } else {
    soundIcon.className = "fa-solid fa-volume-high";
    soundText.textContent = "Mute";
    soundButton.setAttribute("aria-label", "Mute video");
  }
});

/* Try to start the video automatically. */
heroVideo.play().catch(() => {
  // Some browsers may block autoplay until user interacts.
});

/* =========================================================
   SMALL CARD ANIMATION
   ========================================================= */

const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

cards.forEach((card) => observer.observe(card));
