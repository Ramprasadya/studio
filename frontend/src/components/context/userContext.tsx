import { createContext, useState } from "react";

export const userContext = createContext<any>(null);

const UserContextProvider = (props: any) => {
  const [login, setLogin] = useState<any>(false);

  const value = {
    login,
    setLogin,
  };
  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
};

export default UserContextProvider;
