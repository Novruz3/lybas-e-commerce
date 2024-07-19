// TableContext.js
import { createContext, useContext, useState } from "react";

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState("table1");

  return (
    <TableContext.Provider value={{ selectedTable, setSelectedTable }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
