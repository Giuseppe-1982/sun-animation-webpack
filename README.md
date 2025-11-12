# Solar Cycle Animation (Webpack Version)

An interactive web animation that simulates a dynamic solar cycle featuring the sun, moon, moving clouds, and shooting stars.  
Built with HTML, SCSS, JavaScript — bundled with **Webpack** and served through **Vite.js** for fast development.

## Features

- **Day/Night Cycle**: Smooth animation of the sun and moon transitioning through the solar cycle.
- **Dynamic Clouds**: Clouds drift naturally across the sky with subtle animations.
- **Shooting Stars**: Animated shooting stars appear randomly for a lively night sky.
- **Particle Effects**: Starry night effect implemented using [particles.js](https://github.com/VincentGarreau/particles.js).
- **Background Music**: Relaxing music is preloaded; click anywhere to pause/resume both animations and audio.
- **Interactive Pause**: Single click pauses all animations and background music; click again to resume.
- **Optimized Build**: Webpack handles SCSS compilation, asset bundling, and output cleanup for production.

## Project Structure

```
sun-animation-base/
├── public/
│   └── assets/               
│       ├── audio/               # Background music files
│       └── images/              # Images used in the animation
├── src/ 
│   ├── scripts/  
│   │   ├── main.js              # Controls animations and background music
│   │   └── particles-setup.js   # Configures and manages particle effects
│   └── styles/   
│       └── scss/ 
│           ├── abstracts/       # Variables, mixins, and functions
│           ├── base/            # Base styles and resets
│           └── main.scss        # Main entry SCSS file
├── .gitignore                   
├── index.html                   # Main HTML file
├── package-lock.json            # Lockfile for npm dependencies
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation
└── webpack.config.js            # Webpack configuration for bundling and building the project     

```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Giuseppe-1982/sun-animation-webpack
   ```
2. **Navigate to the project folder**:
   ```bash
   cd sun-animation-webpack
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
   This uses Vite.js for a fast and responsive development environment.


## Usage

- Open your browser at the URL displayed in the terminal after running npm start.
- Typically it will be http://localhost:3000/, but check the terminal output.
- Click anywhere on the page to toggle pause/resume for all animations.

## Technologies Used

- **HTML5** for structure
- **SCSS** for styling and animations
- **JavaScript (ES Modules)** for functionality
- **Webpack** for bundling and asset management
- **particles.js** for particle effects
 
## License

This project is for educational and personal use only.  
Music and images belong to their respective owners.
