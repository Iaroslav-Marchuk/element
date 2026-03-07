import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

import Container from '../Container/Container.jsx';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar.jsx';
import CatalogNavigation from '../CatalogNavigation/CatalogNavigation.jsx';

function Header() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const openModal = () => setSideBarIsOpen(true);
  const closeModal = () => setSideBarIsOpen(false);

  const handleClick = () => {
    openModal();
  };

  return (
    <header>
      <Container className="flex items-center justify-between">
        {/* <NavLink to="catalog">
          <a src={logo} alt="logo" className="w-25 h-20">
            Каталог
          </a>
        </NavLink> */}
        <button className="" onClick={handleClick}>
          Каталог
        </button>

        <NavLink to="main">
          <img src={logo} alt="logo" className="w-25 h-20" />
        </NavLink>
        <address>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="mailto:info@devstudio.com">element@gmail.com</a>
            </li>
            <li>
              <a href="tel:+380978303655">+38 (097) 830-36-55 </a>
            </li>
            <li>
              <a href="tel:+380971951219">+38 (097) 19-512-19 </a>
            </li>
          </ul>
        </address>
      </Container>

      <SideBar isOpen={sideBarIsOpen} onClose={closeModal}>
        <CatalogNavigation onClose={closeModal} />
      </SideBar>
    </header>
  );
}

export default Header;
