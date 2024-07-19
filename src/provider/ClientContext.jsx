// ClientContext.js
import { createContext, useContext, useState } from "react";

const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [selectedContent, setSelectedContent] = useState("content1");

  return (
    <ClientContext.Provider value={{ selectedContent, setSelectedContent }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  return useContext(ClientContext);
};
