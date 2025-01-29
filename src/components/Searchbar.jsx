import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/Searchbar.module.css";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Searchbar() {
  return (
    <>
      <div className={styles.searchbarContainer}>
        <div className={styles.searchbars}>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.icons} />
            <input type="text" placeholder="e.g UX Designer" />
          </div>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icons} />
            <input type="text" placeholder="e.g Liverpool, UK" />
          </div>
        </div>
        <button className={styles.searchBtn}>Search</button>
      </div>
    </>
  );
}
