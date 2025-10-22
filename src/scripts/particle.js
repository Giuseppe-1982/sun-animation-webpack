// Initial configuration of the particles: This is where you define the properties and behaviors of the particles. 
//It includes settings for particle number, color, shape, opacity, size, and movement.
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

// Configuration to pause the particles: This creates a copy of the initial particle configuration 
// and modifies it to effectively pause the animation by setting the movement speed to 0
// and disabling the size and opacity animations
const particlesPauseConfig = JSON.parse(JSON.stringify(particlesConfig));
particlesPauseConfig.particles.move.speed = 0; // Set movement speed to 0 to pause the particles
particlesPauseConfig.particles.size.anim.enable = false; // Disable size animation to pause it
particlesPauseConfig.particles.opacity.anim.enable = false; // Disable opacity animation to pause it

// Flag to manage the pause of the particles: a boolean variable particlesPaused is used to keep track of whether the particles are currently paused or not
let particlesPaused = false;

// Function to restart the particles: startParticles function initializes the particles using the original configuration
function startParticles() {
  if (typeof particlesJS !== 'undefined') { //Check to prevent errors if the library is not loaded correctly
    particlesJS('particles-js', particlesConfig); // Start particles with the original configuration
  } else {
    console.error('particlesJS is not defined'); // Log an error if particlesJS is not loaded
  }
}

// Function to pause the particles: pauseParticles function initializes the particles using the paused configuration
function pauseParticles() {
  if (particlesJS) { //Check to prevent errors if the library is not loaded correctly
    particlesJS('particles-js', particlesPauseConfig); // Pause particles using the paused configuration
  } else {
    console.error('particlesJS is not defined'); // Log an error if particlesJS is not loaded
  }
}

// Initialize the particles at the start: Calls startParticles() to ensure particles are displayed when the page loads
startParticles();

// Add a click listener: Toggles between pausing and restarting the particles when the document is clicked, and updates the particlesPaused flag accordingly
document.addEventListener('click', () => {
  if (particlesPaused) {
    startParticles(); // Restart the particles if paused
  } else {
    pauseParticles(); // Pause the particles if they are playing
  }
  particlesPaused = !particlesPaused; // Toggle the pause state for the next click
});

















