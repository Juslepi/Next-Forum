import { useState } from "react";
import Link from "next/link";
import { useUserContext } from "../context/userContext";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { user, changeUser } = useUserContext();
  const [userForm, setUserForm] = useState("");

  return (
    <nav className={styles.navbar}>
      <div className={styles.upper}>
        <Link href="/">
          <h2>Forum</h2>
        </Link>
        <div className={styles.right}>
          <input
            type="text"
            value={userForm}
            onChange={(e) => setUserForm(e.target.value)}
            placeholder="username"
          />
          <button
            onClick={() => {
              changeUser(userForm);
              setUserForm("");
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
