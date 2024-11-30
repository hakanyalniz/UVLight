const spotlight = document.querySelector(".spotlight");
const overlay = document.querySelector(".overlay");

// Update the spotlight's position based on mouse coordinates
document.addEventListener("mousemove", (event) => {
  // Gets width and height so that the spotlight can be centered
  const spotlightWidth = spotlight.offsetWidth;

  const spotlightRadius = spotlightWidth / 3;

  // Create a transparent hole in the overlay around the spotlight
  // The whole is where the mouse is, the rest of the page is still dark
  overlay.style.background = `
      radial-gradient(circle at ${event.pageX}px ${event.pageY}px,
      rgba(0, 0, 0, 0) ${spotlightRadius}px,
      rgba(0, 0, 0, 0.97) ${spotlightRadius + 50}px)`;
});
