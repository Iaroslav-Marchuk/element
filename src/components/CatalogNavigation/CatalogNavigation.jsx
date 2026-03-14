import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../utils/constants.js';

function CatalogNavigation({ onClose }) {
  return (
    <ul className="flex flex-col gap-6 mt-[50%] text-(--white)">
      {CATEGORIES.map(cat => (
        <li key={cat.id} className="relative group">
          <span
            className="absolute -left-3 top-0 h-full w-0.75 scale-y-0 bg-white origin-top
        transition-transform duration-300 group-hover:scale-y-100"
          />

          <NavLink
            to={`/catalog/${cat.folder}`}
            onClick={onClose}
            className={({ isActive }) =>
              `glass-link transition-all duration-300 hover:translate-x-2 ${
                isActive ? 'glass-link-active translate-x-2' : ''
              }`
            }
          >
            {cat.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default CatalogNavigation;
