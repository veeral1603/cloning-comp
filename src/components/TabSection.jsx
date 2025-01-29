import styles from "./css/TabSection.module.css";

export default function TabSection() {
  return (
    <section className={`container section ${styles.tabSection}`}>
      <div className={styles.tabsBtnContainer}>
        <button value={1}>Developer</button>
        <button value={2}>UI Designer</button>
        <button value={3}>Project Manager</button>
        <button value={4}>Designer</button>
        <button value={5}>Accountant</button>
        <button value={6}>Human Resource</button>
        <button value={7}>Marketing</button>
      </div>
    </section>
  );
}
