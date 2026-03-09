import { NavLink } from 'react-router-dom';

import Container from '../Container/Container.jsx';

import logo from '../../assets/logo.jpg';

function Footer() {
  return (
    <footer className="h-25">
      <Container className="flex flex-col items-center justify-center mt-5">
        <NavLink
          to="main"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="logo" className="w-25 h-20" />
        </NavLink>
        <address>
          <ul className="flex flex-col gap-3 my-5">
            <li className="hover:text-blue-500 transition-all duration-300">
              <a href="mailto:info@devstudio.com">element@gmail.com</a>
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
    </footer>
  );
}

export default Footer;
