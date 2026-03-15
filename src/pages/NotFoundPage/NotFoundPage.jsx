import { NavLink } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

import Container from '../../components/Container/Container.jsx';

function NotFoundPage() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <Container>
        <div>
          <h1 className="text-[72px] mb-12">404</h1>
          <p className="text-[20px] mb-12">
            Нажаль, вибраної сторінки не існує!
          </p>
          <NavLink to="/main">
            <div
              className="flex gap-2 w-70 items-center glass-link px-5 py-2 border border-gray-400 rounded-xl
        transition-all duration-300 hover:translate-x-2 my-10"
            >
              <MoveLeft strokeWidth={1.5} />
              <span>Повернутися на головну</span>
            </div>
          </NavLink>
        </div>
      </Container>
    </section>
  );
}

export default NotFoundPage;
