import { NavLink, useParams } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

import Container from '../../components/Container/Container.jsx';
import GalleryList from '../../components/GalleryList/GalleryList.jsx';

import catalogData from '../../../catalog.json';
import { CATEGORIES } from '../../utils/constants.js';

function CatalogPage() {
  const { categoryId } = useParams();

  const category = CATEGORIES.find(cat => cat.folder === categoryId);
  const images = category
    ? catalogData[`catalog/${category.folder}`] || []
    : [];

  return (
    <section className="mx-10">
      <Container className="">
        <NavLink to="/main">
          <div
            className="flex gap-2 w-70 items-center glass-link px-5 py-2 border border-gray-400 rounded-xl
        transition-all duration-300 hover:translate-x-2 my-10"
          >
            <MoveLeft strokeWidth={1.5} />
            <span>Повернутися на головну</span>
          </div>
        </NavLink>
        <h2 className="font-bold mb-10 text-[42px] text-center">Наша робота</h2>
        <p className="text-xl mb-10 leading-[1.43] text-center">
          Категорія: {category?.name}
        </p>
        <GalleryList images={images} />
      </Container>
    </section>
  );
}

export default CatalogPage;
