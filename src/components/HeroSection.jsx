import styles from "./css/HeroSection.module.css";
import backgroundGradient from "../assets/backgroundGradient.png";
import Navbar from "./Navbar";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocation,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar";
import HeaderSlider from "./HeaderSlider";

export default function HeroSection() {
  return (
    <section
      className={`section ${styles.heroSection}`}
      style={{ backgroundImage: `url(${backgroundGradient})` }}
    >
      <Navbar />

      <div className={styles.headerContent}>
        <div className={styles.headingContainer}>
          <div className={styles.headerTag}>
            <FontAwesomeIcon icon={faBriefcase} />
            Your #1 platform for skill sharing
          </div>

          <Heading
            fontSize="76"
            color="#002B6B"
            subtext={
              "Create your profile, showcase your skills, and let employers find you."
            }
          >
            Shocase Your Mastery.
            <br />
            Get Conneted
          </Heading>
        </div>

        <Searchbar />

        <HeaderSlider />
      </div>
    </section>
  );
}
