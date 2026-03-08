import { NavLink } from 'react-router-dom';

function CatalogNavigation({ onClose }) {
  const categories = [
    { id: 1, name: 'Паркани' },
    { id: 2, name: 'Перила та сходи' },
    { id: 3, name: 'Хрести, позолота' },
    { id: 4, name: 'Димоходи' },
    { id: 5, name: 'Навіси' },
    { id: 6, name: 'Криниці' },
    { id: 7, name: 'Різне' },
  ];
  return (
    // <ul className="flex flex-col gap-5 mt-[50%] text-(--white)">
    //   <li>
    //     <NavLink
    //       to="/catalog/1"
    //       onClick={onClose}
    //       className="group relative px-6 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md"
    //     >
    //       <span
    //         className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-white origin-top
    //       transition-transform duration-300 group-hover:scale-y-100"
    //       ></span>
    //       Паркани
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/catalog/2" onClick={onClose}>
    //       Перила та сходи
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/catalog/3" onClick={onClose}>
    //       Хрести, позолота
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/catalog/4" onClick={onClose}>
    //       Димоходи
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/catalog/5" onClick={onClose}>
    //       Навіси
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/catalog/6" onClick={onClose}>
    //       Криниці
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/catalog/7" onClick={onClose}>
    //       Різне
    //     </NavLink>
    //   </li>
    // </ul>
    <ul className="flex flex-col gap-6 mt-[50%] text-(--white)">
      {categories.map(cat => (
        <li key={cat.id} className="relative group">
          <span
            className="absolute -left-3 top-0 h-full w-[3px] scale-y-0 bg-white origin-top
        transition-transform duration-300 group-hover:scale-y-100"
          />

          <NavLink
            to={`/catalog/${cat.id}`}
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
