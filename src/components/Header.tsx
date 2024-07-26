import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.navContainer}>
      <Link href="/" className={styles.navLink}>
        <span className={styles.navItem}>Home</span>
      </Link>
      <Link href="/favorites" className={styles.navLink}>
        <span className={styles.navItem}>Favorites</span>
      </Link>
    </nav>
  </header>
);

export default Header;
