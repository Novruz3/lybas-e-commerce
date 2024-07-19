import { ClientProvider } from "./ClientContext";
import { TableProvider } from "./TableContext";

function CombineProviders({ children }) {
  return (
    <>
      <TableProvider>
        <ClientProvider>{children}</ClientProvider>
      </TableProvider>
    </>
  );
}

export default CombineProviders;
