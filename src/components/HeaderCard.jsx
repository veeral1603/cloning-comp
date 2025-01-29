/* eslint-disable react/prop-types */
import styles from "./css/HeaderCard.module.css";

export default function HeaderCard({ img, color }) {
  console.log(color);
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <img src={img} />
    </div>
  );
}
