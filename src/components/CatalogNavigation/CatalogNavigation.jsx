import { NavLink } from 'react-router-dom';

function CatalogNavigation({ onClose }) {
  return (
    <ul className="flex flex-col gap-5 mt-[50%] text-(--white)">
      <li>
        <NavLink to="/catalog/1" onClick={onClose}>
          Паркани
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog/2" onClick={onClose}>
          Перила та сходи
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog/3" onClick={onClose}>
          Хрести, позолота
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog/4" onClick={onClose}>
          Димоходи
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog/5" onClick={onClose}>
          Навіси
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog/6" onClick={onClose}>
          Криниці
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog/7" onClick={onClose}>
          Різне
        </NavLink>
      </li>
    </ul>
  );
}

export default CatalogNavigation;
