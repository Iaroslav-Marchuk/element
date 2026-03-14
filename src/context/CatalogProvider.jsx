import { useState } from 'react';
import { CatalogContext } from './CatalogContext.js';

export function CatalogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCatalog = () => setIsOpen(true);
  const closeCatalog = () => setIsOpen(false);

  return (
    <CatalogContext.Provider value={{ isOpen, openCatalog, closeCatalog }}>
      {children}
    </CatalogContext.Provider>
  );
}
