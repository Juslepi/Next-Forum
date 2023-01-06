import { useState } from "react";
import Link from "next/link";
import { useUserContext } from "../context/userContext";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { user, changeUser } = useUserContext();
  const [username, setUsername] = useState("");

  return (
    <nav className={styles.navbar}>
      <div className={styles.upper}>
        <Link href="/">
          <h2>Forum</h2>
        </Link>
        <div className={styles.right}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <button
            onClick={() => {
              changeUser(username);
              setUsername("");
            }}
          >
            Change username
          </button>
        </div>
      </div>
      <div className={styles.lower}>
        <p>You are {user ? user : "anonymous"}</p>
      </div>
    </nav>
  );
};

export default Navbar;
