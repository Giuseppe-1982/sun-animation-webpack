/* 
-----------------------------------------------------------------------------
 When JavaScript finishes loading, this removes "display: none;" from <html>.
 The page is initially hidden to prevent layout flashes before styles and
 scripts are fully ready. Restoring display makes the page visible normally.
-----------------------------------------------------------------------------
*/
document.documentElement.style.display = '';

import '../styles/scss/main.scss';
import { initParticles, startParticles, pauseParticles } from './particles-setup.js';

/* 
-----------------------------------------------------------------------------
 DOM ELEMENT REFERENCES
-----------------------------------------------------------------------------
*/
const animationContainer = document.querySelector('#animation-container');
const playButton = document.querySelector('#play-button');
const iconPlay = playButton.querySelector('.icon-play');
const iconPause = playButton.querySelector('.icon-pause');
const backgroundMusic = document.querySelector('#background-music');

let isPaused = true; // Tracks whether the animation is currently paused
let animTimeout;     // Timeout ID used for the button transition animation

/* 
-----------------------------------------------------------------------------
 INITIAL STATE SETUP
-----------------------------------------------------------------------------
*/
animationContainer.classList.add('paused'); // Start with all animations paused
initParticles(); // Initialize the particle system
if (backgroundMusic) backgroundMusic.pause(); // Music starts muted/paused

// Show the button with the Play icon enabled by default
playButton.classList.remove('hidden');
playButton.classList.remove('playing');
iconPlay.style.display = 'block';
iconPause.style.display = 'none';

/* 
-----------------------------------------------------------------------------
 FUNCTION: animatePlayButton()
 Handles the small visual animation of the Play/Pause button:
 - Slight zoom-in
 - Brief pause
 - Shrink and fade out
-----------------------------------------------------------------------------
*/
function animatePlayButton() {
  // Display the correct icon depending on pause state
  iconPlay.style.display = isPaused ? 'block' : 'none';
  iconPause.style.display = isPaused ? 'none' : 'block';

  // Reset animation state (forces it to restart cleanly)
  playButton.style.transition = 'none';
  playButton.style.transform = 'translate(-50%, -50%) scale(1)';
  playButton.style.opacity = '1';
  playButton.offsetHeight; // Force reflow to reapply transitions

  clearTimeout(animTimeout);

  // Step 1: Slight zoom-in
  playButton.style.transition = 'transform 0.3s ease';
  playButton.style.transform = 'translate(-50%, -50%) scale(1.2)';

  // Step 2: After 0.8s, shrink and fade out
  animTimeout = setTimeout(() => {
    playButton.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    playButton.style.transform = 'translate(-50%, -50%) scale(0.8)';
    playButton.style.opacity = '0';
  }, 800);
}

/* 
-----------------------------------------------------------------------------
 FUNCTION: toggleAnimations()
 Toggles:
 - CSS animations
 - particle engine
 - background music
 Called on any click interaction.
-----------------------------------------------------------------------------
*/
function toggleAnimations() {
  isPaused = !isPaused;
  animationContainer.classList.toggle('paused', isPaused);

  // Particle control
  if (isPaused) pauseParticles();
  else startParticles();

  // Music control
  if (backgroundMusic) isPaused ? backgroundMusic.pause() : backgroundMusic.play();

  // Update button visual state
  playButton.classList.toggle('playing', !isPaused);

  // Trigger button animation
  animatePlayButton();
}

/* 
-----------------------------------------------------------------------------
 EVENT LISTENERS
-----------------------------------------------------------------------------
*/
animationContainer.addEventListener('click', toggleAnimations);

playButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents double trigger
  toggleAnimations();
});

// If music ends naturally, pause all animations too
if (backgroundMusic) {
  backgroundMusic.addEventListener('ended', () => {
    if (!isPaused) toggleAnimations();
  });
}
