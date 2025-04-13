import styles from "./PlaceLoader.module.scss";

const PlaceLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader} />
      <div className={styles.text}>Loading ...</div>
    </div>
  );
};

export default PlaceLoader;
