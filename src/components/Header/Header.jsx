import { NavLink } from 'react-router-dom';
import { Ellipsis } from 'lucide-react';

import SideBar from '../SideBar/SideBar.jsx';
import Container from '../Container/Container.jsx';
import CatalogNavigation from '../CatalogNavigation/CatalogNavigation.jsx';

import logo from '../../assets/logo.jpg';

import { useCatalog } from '../../hooks/useCatalog.js';

function Header() {
  const { isOpen, openCatalog, closeCatalog } = useCatalog();

  return (
    <header className="relative z-20 bg-white">
      <Container className="flex items-center justify-between">
        <button
          className="hidden md:flex md:items-center md:glass-link md:px-5 md:py-2 md:border md:border-gray-400 md:rounded-xl md:transition-all md:duration-300 md:hover:translate-x-2"
          onClick={openCatalog}
        >
          Каталог
        </button>

        <button className="md:hidden" onClick={openCatalog}>
          <Ellipsis />
        </button>

        <NavLink to="main">
          <img src={logo} alt="logo" className="w-25 h-20" />
        </NavLink>
        <address className="hidden md:flex">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-blue-500 transition-all duration-300">
              <a href="mailto:element@gmail.com">element@gmail.com</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <a href="tel:+380978303655">+38 (097) 830-36-55 </a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <a href="tel:+380971951219">+38 (097) 19-512-19 </a>
            </li>
          </ul>
        </address>
      </Container>

      <SideBar isOpen={isOpen} onClose={closeCatalog}>
        <CatalogNavigation onClose={closeCatalog} />
      </SideBar>
    </header>
  );
}

export default Header;
