import styles from "./css/Navbar.module.css";
import logo from "../assets/logo.png";
import arrowIcon from "../assets/arrow-icon.png";

export default function Navbar() {
  return (
    <nav className={`container ${styles.navbar}`}>
      <div className={styles.navLogo}>
        <a href="/">
          <img src={logo} />{" "}
        </a>
      </div>

      <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
          <li className={styles.link}>
            <a href="/create-resume">Create Resume</a>
          </li>
          <li className={styles.link}>
            <a href="/skillset">Skillset</a>
          </li>
          <li className={styles.link}>
            <a href="/partnered-job-board">Partnered Job Board</a>
          </li>
          <li className={styles.link}>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className={`${styles.headerBtn}`}>
        <button>
          <p>Register Now</p>
          <img src={arrowIcon} />
        </button>
      </div>
    </nav>
  );
}
