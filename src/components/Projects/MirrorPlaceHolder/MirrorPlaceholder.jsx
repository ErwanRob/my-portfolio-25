import styles from "./MirrorPlaceHolder.module.scss";

const MirrorPlaceHolder = () => {
  const numLayers = 10;
  const generateColors = (start, end, steps) => {
    const colors = [];
    for (let i = 0; i < steps; i++) {
      const factor = i / (steps - 1); // Normalized factor (0 to 1)
      const r = Math.round(start[0] + (end[0] - start[0]) * factor);
      const g = Math.round(start[1] + (end[1] - start[1]) * factor);
      const b = Math.round(start[2] + (end[2] - start[2]) * factor);
      colors.push(`rgba(${r},${g},${b},1)`);
    }
    return colors;
  };

  const colors = generateColors([26, 26, 26], [90, 90, 90], numLayers);

  return (
    <div className={styles.placeholderWrapper}>
      {[...Array(numLayers)].map((_, i) => (
        <div
          key={i}
          className={styles["placeholderWrapper__layer"]}
          style={{
            transform: `scale(${1 - i * 0.1})`,
            backgroundColor: colors[i],
            boxShadow: `inset 2px 6px 6px 6px #101010`,
          }}
        />
      ))}
    </div>
  );
};

export default MirrorPlaceHolder;
