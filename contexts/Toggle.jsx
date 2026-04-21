import { useState } from "react";
import { ToggleContext } from "./ToggleContext";

export const ToggleProvider = ({ children }) => {
  const [onMenu, setOnMenu] = useState(false);
  const [onSearch, setOnSearch] = useState(false);

  return (
    <ToggleContext.Provider value={{ onMenu, setOnMenu, onSearch, setOnSearch }}>
      {children}
    </ToggleContext.Provider>
  );
};
