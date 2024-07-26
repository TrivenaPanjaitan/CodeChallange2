import Link from "next/link";
import styles from "../styles/Header.module.scss"; // Adjust the path if necessary

const Header: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.navContainer}>
      <Link href="/" as={`/`} className={styles.navLink}>
        <a className={styles.navItem}>Home</a>
      </Link>
      <Link href="/favorites" as={`/favorites`} className={styles.navLink}>
        <a className={styles.navItem}>Favorites</a>
      </Link>
    </nav>
  </header>
);

export default Header;
