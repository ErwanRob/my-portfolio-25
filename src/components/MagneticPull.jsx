import { useRef, useState } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

//Can reuse this component for other things and other projects, just need to pass the className woohoo good job me.
//Should try to make it better with Gsap though.
const MagneticPull = ({ children, className }) => {
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
