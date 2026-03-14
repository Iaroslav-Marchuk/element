import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

import { CatalogProvider } from '../../context/CatalogProvider.jsx';

function Layout() {
  return (
    <CatalogProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CatalogProvider>
  );
}

export default Layout;
