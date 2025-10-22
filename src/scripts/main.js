// src/scripts/main.js
import '../styles/scss/main.scss'; // Import the SCSS file

// Script to control animations and background music based on user clicks
// Select all animated elements with various classes for animation control
const elements = [
  document.querySelector('body'), // The body element for general animation effects
  document.querySelector('.sun'), // Sun element for animation
  document.querySelector('.moon-container'), // Container for moon-related elements
  document.querySelector('.moon-texture'), // Moon texture element
  document.querySelector('.cloud1-std'), // Cloud image 1 (standard)
  document.querySelector('.cloud2-std'), // Cloud image 2 (standard)
  document.querySelector('.cloud3-std'), // Cloud image 3 (standard)
  document.querySelector('.cloud1-alt'), // Cloud image 1 (alternate version)
  document.querySelector('.cloud2-alt'), // Cloud image 2 (alternate version)
  document.querySelector('.cloud3-alt'), // Cloud image 3 (alternate version)
  // Particles (stars) animation section
  document.querySelector('#particles-js'), // Targeting the particles element by its ID
  document.querySelector('.shooting-stars-container'), // Target the section
  // Shooting stars (spans used for the animation)
  ...document.querySelectorAll('.shooting-star'), // Select all spans for shooting stars animation
];

// Selecting the audio element for background music control
const backgroundMusic = document.getElementById('background-music');
let isPaused = false; // Boolean state to control whether the music and animations are paused or playing

// Add a click event listener to toggle pause/resume for animations and music
document.addEventListener('click', () => {   
// Pause or resume animations based on the current state (isPaused)
  elements.forEach(element => {
    if (isPaused) {
      // If paused, resume animations by removing 'paused' class
      element.classList.remove('paused');
    } else {
      // If not paused, pause animations by adding 'paused' class
      element.classList.add('paused');
    }
  });

  // Pause or resume the background music based on the current state (isPaused)
  if (isPaused) {
      backgroundMusic.play(); // Resume music
  } else {
      backgroundMusic.pause(); // Pause music
  }
  // Flip the pause state for the next click
  isPaused = !isPaused;
});




  