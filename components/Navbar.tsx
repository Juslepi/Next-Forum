import { useState } from "react";
import Link from "next/link";
import { useUserContext } from "../context/userContext";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const [userForm, setUserForm] = useState("");
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <Link href="/">
            <h2>Forum</h2>
          </Link>
          <Link href="#">Tags</Link>
          <Link href="#">Users</Link>
        </div>
        <div className={styles.right}>
          
          <input
            type="text"
            value={userForm}
            onChange={(e) => setUserForm(e.target.value)}
            placeholder="username"
          />
          <button
            onClick={() => {
              setUser(userForm);
              sessionStorage.setItem("username", userForm)
              setUserForm("");
            }}
          >
            Change username
          </button>
        </div>
      </div>
      <div className={styles.lower}>
        <Link href="#">Latest</Link>
        <Link href="#">Unanswered</Link>
        <Link href="#">Trending</Link>
        <p>You are {user ? user : "anonymous"}</p>
      </div>
    </nav>
  );
};

export default Navbar;
