"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
/* import { motion } from "motion/react";
import PropTypes from "prop-types"; */

//Can reuse this component for other things and other projects, just need to pass the className woohoo good job me.
//Should try to make it better with Gsap though (spoilerAlert - i did).

const MagneticPull = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.4)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.4)",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current.removeEventListener("mousemove", handleMouseMove);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
};

export default MagneticPull;

//Framer-Motion Version
/* const MagneticPull = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        swiftness: 150,
        damping: 10,
        mass: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticPull;

MagneticPull.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};
 */
