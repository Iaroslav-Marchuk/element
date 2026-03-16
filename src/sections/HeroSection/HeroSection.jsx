import Container from '../../components/Container/Container.jsx';
import { MoveRight } from 'lucide-react';
import { useCatalog } from '../../hooks/useCatalog.js';

function HeroSection() {
  const { openCatalog } = useCatalog();

  return (
    <section
      className="relative w-full h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/pics/background.jpg')" }}
    >
      <div className="absolute inset-0 z-10 bg-linear-to-b from-white to-transparent"></div>
      <Container
        className="relative z-20 py-5
      md:py-32"
      >
        <div className="flex flex-col gap-10 h-full w-full md:flex-row">
          <div
            className="w-full
          md:w-[80%]"
          >
            <h1
              className="font-bold my-10 leading-[1.2] text-[36px]
            
            md:text-[48px] md:my-30 md:w-125 "
            >
              Точність у металі.
              <br />
              Якість у деталях.
            </h1>

            <h2
              className="text-xl mb-10 leading-[1.43]
            md:mb-30"
            >
              Виготовляємо паркани, ринви, димоходи та інші металеві вироби для
              надійності вашого дому.
            </h2>
          </div>
          <div
            className="flex flex-col justify-end items-center w-full
          md:w-[20%]"
          >
            <button
              className="flex gap-2 items-center glass-link px-5 py-2 border border-gray-400 rounded-xl
        transition-all duration-300 hover:translate-x-2"
              onClick={openCatalog}
            >
              Перейти в каталог
              <MoveRight strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
