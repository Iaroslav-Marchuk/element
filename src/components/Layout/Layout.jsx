import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
