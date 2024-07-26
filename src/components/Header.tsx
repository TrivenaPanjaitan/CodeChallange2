import Link from "next/link";
import styles from "../styles/Header.module.scss"; // Adjust the path if necessary

const Header: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.navContainer}>
      <Link href="/" className={styles.navLink}>
        <p className={styles.navItem}>Home</p>
      </Link>
      <Link href="/favorites" className={styles.navLink}>
        <p className={styles.navItem}>Favorites</p>
      </Link>
    </nav>
  </header>
);

export default Header;
