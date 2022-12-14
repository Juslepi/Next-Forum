import React from "react";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <h2>Forum</h2>
          <Link href="#">Tags</Link>
          <Link href="#">Users</Link>
        </div>
        <div className={styles.right}>
          <input type="text" placeholder="Search..."/>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <div className={styles.lower}>
        <Link href="#">Latest</Link>
        <Link href="#">Unanswered</Link>
        <Link href="#">Trending</Link>
      </div>
    </nav>
  );
};

export default navbar;
