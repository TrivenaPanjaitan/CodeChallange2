import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.navContainer}>
      <Link href="/">
        <p className={styles.navItem}>Home</p>
      </Link>
      <Link href="/favorites">
        <p className={styles.navItem}>Favorites</p>
      </Link>
    </nav>
  </header>
);

export default Header;
