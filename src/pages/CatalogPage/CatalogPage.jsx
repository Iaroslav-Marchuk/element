import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container.jsx';

function CatalogPage() {
  const { categoryId } = useParams();

  const categories = {
    1: 'Паркани',
    2: 'Перила та сходи',
    3: 'Хрести, позолота',
    4: 'Димоходи',
    5: 'Навіси',
    6: 'Криниці',
    7: 'Різне',
  };

  const title = categories[categoryId];

  return (
    <section className="mx-10">
      <Container>
        <h1>Каталог</h1>
        <p>Категорія: {title}</p>
      </Container>
    </section>
  );
}

export default CatalogPage;
