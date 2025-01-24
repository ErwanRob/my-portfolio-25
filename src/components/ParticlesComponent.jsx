import PropTypes from "prop-types";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = ({ id }) => {
  const particlesInit = useCallback(async (engine) => {
    // Load the slim version of tsparticles
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Enable full-screen mode
        fpsLimit: 60, // Limit FPS for smoother animations
        pauseOnOutsideViewport: true,
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              area: 800, // Density area
            },
          },
          color: {
            value: "#7c3aed",
          },
          shape: {
            type: "circle", // Circle-shaped particles
          },
          opacity: {
            value: 0.3, // Opacity of particles
          },
          size: {
            value: { min: 1, max: 4 }, // Random size for particles
          },
          links: {
            enable: true, // Enable lines between particles
            distance: 120, // Maximum distance for lines
            color: "#fff", // Line color
            opacity: 0.2, // Line opacity
            width: 1, // Line width
          },
          move: {
            enable: true,
            speed: 0.75,
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
              distance: 160, // Distance for grab effect
              links: {
                opacity: 0.9, // Opacity of lines during grab
                color: "#fff", // Line color
              },
            },
            push: {
              quantity: 2, // Number of particles added on click
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

ParticlesComponent.propTypes = {
  id: PropTypes.string.isRequired,
};
