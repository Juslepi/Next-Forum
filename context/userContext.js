import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("triger");
    if (!user) {
      const username = sessionStorage.getItem("username");
      setUser(username);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
