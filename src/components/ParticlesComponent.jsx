import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the slim version of tsparticles
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true }, // Enable full-screen mode
        /* background: {
          color: {
            value: "#1a1a1a",
          }, 
        },*/
        fpsLimit: 60, // Limit FPS for smoother animations
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              area: 800, // Density area
            },
          },
          color: {
            value: "#7C3CEB", // particles color (can be multiple colors)
          },
          shape: {
            type: "circle", // Circle-shaped particles
          },
          opacity: {
            value: 0.25, // Opacity of particles
          },
          size: {
            value: { min: 1, max: 4 }, // Random size for particles
          },
          links: {
            enable: true, // Enable lines between particles
            distance: 120, // Maximum distance for lines
            color: "#ffffff", // Line color
            opacity: 0.2, // Line opacity
            width: 1, // Line width
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" }, // Particles go outside the screen
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true, // Enable hover effects
              mode: "grab", // Grab particles with the cursor
            },
            onClick: {
              enable: true, // Enable click effects
              mode: "push", // Add particles on click
            },
          },
          modes: {
            grab: {
              distance: 120, // Distance for grab effect
              links: {
                opacity: 0.9, // Opacity of lines during grab
              },
            },
            push: {
              quantity: 4, // Number of particles added on click
            },
          },
        },
        motion: {
          disable: {
            value: true, // If set to true, disables animations for users with prefer-reduced-motion enabled
          },
        },
        detectRetina: false, // Retina display support
      }}
    />
  );
};

export default ParticlesComponent;

/* return (
  <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: { enable: true },
      background: {
        color: { value: "#1a1a1a" }, // Dark background
      },
      fpsLimit: 120, // Limit frame rate
      particles: {
        number: {
          value: 50, // Number of particles
          density: { enable: true, area: 800 }, // Density settings
        },
        color: {
          value: ["#ffffff", "#7c3ceb", "#00ffff"], // Array for multiple colors
        },
        shape: {
          type: ["circle", "star"], // Array for multiple shapes
          options: {
            star: { sides: 5 }, // Shape-specific settings
          },
        },
        opacity: {
          value: 0.7, // Slight transparency
          random: true, // Random opacity
        },
        size: {
          value: { min: 3, max: 7 }, // Random size range
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 2, // Movement speed
          direction: "none", // "none", "top", "bottom", "left", "right"
          outModes: { default: "out" }, // Particles exit the screen and re-enter
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" }, // Hover effect: bubble
          onClick: { enable: true, mode: "push" }, // Click effect: add particles
        },
        modes: {
          bubble: {
            distance: 200,
            size: 10,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          push: { quantity: 4 }, // Add particles on click
        },
      },
      detectRetina: true, // Retina display support
    }}
  />
);
}; */
