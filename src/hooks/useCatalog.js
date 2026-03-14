import { useContext } from 'react';
import { CatalogContext } from '../context/CatalogContext.js';

export function useCatalog() {
  return useContext(CatalogContext);
}
