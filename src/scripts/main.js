import '../styles/scss/main.scss'; // Import the SCSS file

// Select all animated elements
const elements = [
  document.querySelector('body'), // Select the body element
  document.querySelector('.sun'), // Select the sun element
  document.querySelector('.moon-container'), // Select the moon container
  document.querySelector('.moon-texture'), // Select the moon texture
  document.querySelector('.cloud1-std'), // Select cloud1 standard
  document.querySelector('.cloud2-std'), // Select cloud2 standard
  document.querySelector('.cloud3-std'), // Select cloud3 standard
  document.querySelector('.cloud1-alt'), // Select cloud1 alternate
  document.querySelector('.cloud2-alt'), // Select cloud2 alternate
  document.querySelector('.cloud3-alt'), // Select cloud3 alternate
  document.querySelector('#particles-js'), // Select particles container
  document.querySelector('.shooting-stars-container'), // Select shooting stars container
  ...document.querySelectorAll('.shooting-star'), // Select all shooting star elements
];

// Get the background music element
const backgroundMusic = document.getElementById('background-music'); // Select audio element
let isPaused = false; // Track whether animations and music are paused

// Function to pause or resume animations
function toggleAnimations(pause) {
  elements.forEach(element => {
    if (!element) return; // Skip if element does not exist
    if (pause) {
      element.classList.add('paused'); // Add 'paused' class to pause animation
    } else {
      element.classList.remove('paused'); // Remove 'paused' class to resume animation
    }
  });
}

// Manual control: toggle animations and music on click
document.addEventListener('click', () => {
  toggleAnimations(!isPaused); // Pause/resume animations

  if (isPaused) {
    backgroundMusic.play(); // Play music if currently paused
  } else {
    backgroundMusic.pause(); // Pause music if currently playing
  }

  isPaused = !isPaused; // Flip the paused state
});

// Automatically pause animations when the music ends
if (backgroundMusic) {
  backgroundMusic.addEventListener('ended', () => {
    toggleAnimations(true); // Pause all animations
    isPaused = true; // Update the paused state
  });
} else {
  console.warn('Audio element not found: background-music'); // Warn if audio element is missing
}
