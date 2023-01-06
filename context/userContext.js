import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!user) {
      const username = sessionStorage.getItem("username");
      setUser(username);
    }
  }, [user]);

  const changeUser = (username) => {
    setUser(username);
    sessionStorage.setItem("username", username);
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
