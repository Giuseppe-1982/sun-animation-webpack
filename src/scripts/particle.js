import 'particles.js'; // Import particles.js library (Webpack handles bundling)

// Base particle configuration (appearance and behavior)
const particlesConfig = {
  "particles": {
    "number": {
      "value": 1355,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

// Pause configuration: copy of base config with movement and animations disabled
const particlesPauseConfig = JSON.parse(JSON.stringify(particlesConfig));
particlesPauseConfig.particles.move.speed = 0; // Set movement speed to 0 to pause the particles
particlesPauseConfig.particles.size.anim.enable = false; // Disable size animation to pause it
particlesPauseConfig.particles.opacity.anim.enable = false; // Disable opacity animation to pause it

// Tracks current particle state (true = paused)
let particlesPaused = false;

// Start particles animation using base config
function startParticles() {
  if (typeof particlesJS !== 'undefined') { //Check to prevent errors if the library is not loaded correctly
    particlesJS('particles-js', particlesConfig); // Start particles with the original configuration
  } else {
    console.error('particlesJS is not defined'); // Log an error if particlesJS is not loaded
  }
}

// Apply pause config to stop particle movement and animations
function pauseParticles() {
  if (particlesJS) { //Check to prevent errors if the library is not loaded correctly
    particlesJS('particles-js', particlesPauseConfig); // Pause particles using the paused configuration
  } else {
    console.error('particlesJS is not defined'); // Log an error if particlesJS is not loaded
  }
}

// Initialize the particles at the start: Calls startParticles() to ensure particles are displayed when the page loads
startParticles();

// Toggle pause/start on document click
document.addEventListener('click', () => {
  if (particlesPaused) {
    startParticles(); // Restart the particles if paused
  } else {
    pauseParticles(); // Pause the particles if they are playing
  }
  particlesPaused = !particlesPaused; // Toggle the pause state for the next click
});

















