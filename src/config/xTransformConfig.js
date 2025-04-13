export const PROJECTS_TRANSFORM_CONFIG = {
  yTransform: {
    progress: [0, 0.074, 1],
    values: ["0vh", "60vh", "400vh"],
  },
  scaleTransform: {
    progress: [0, 0.08, 0.25, 0.3, 0.5],
    values: [1, 1, 12, 12, 1],
  },
  opacityTransformBlackHole: {
    progress: [0, 0.08, 0.25, 0.29],
    values: [1, 1, 1, 0],
  },
  bgTransform: {
    progress: [0, 0.2, 0.4],
    values: [
      "rgba(133, 44, 112, 0)",
      "rgba(133, 44, 112, 0)",
      "rgb(139, 92, 246)",
    ],
  },
  bgTransformBlackHole: {
    progress: [0, 0.1],
    values: ["rgba(26, 26, 26,0)", "rgba(26, 26, 26,1)"],
  },
};

/* 
//FOR 7 PROJECTS

const yTransform = useTransform(
  scrollYProgress,
  [0, 0.074, 1],
  ["0vh", "100vh", "700vh"]
);
const scaleTransform = useTransform(
  scrollYProgress,
  [0, 0.05, 0.14, 0.3, 0.4],
  [1, 1, 20, 20, 1]
);
const bgTransform = useTransform(
  scrollYProgress,
  [0, 0.1, 0.2],
  ["rgba(133, 44, 112, 0)", "rgba(133, 44, 112, 0)", "rgb(139, 92, 246)"]
);
const bgTransformBlackHole = useTransform(
  scrollYProgress,
  [0, 0.1],
  ["rgba(26, 26, 26,0)", "rgba(26, 26, 26,1)"]
); */