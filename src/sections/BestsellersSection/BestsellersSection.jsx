import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Container from '../../components/Container/Container.jsx';

import { MoveRight } from 'lucide-react';
import { useCatalog } from '../../hooks/useCatalog.js';

function BestsellersSection() {
  const { openCatalog } = useCatalog();

  return (
    <section className="py-16">
      <Container>
        <div className="flex items-stretch gap-10 h-150">
          <div className="flex flex-col gap-10 w-64  items-center justify-center">
            <h2 className="text-4xl font-bold text-center leading-snug">
              Наші найкращі пропозиції
            </h2>
            <button
              className="flex gap-2 items-center glass-link px-5 py-2 border border-gray-400 rounded-xl
        transition-all duration-300 hover:translate-x-2"
              onClick={openCatalog}
            >
              Перейти в каталог
              <MoveRight strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 min-w-0">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect={'fade'}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, EffectFade, Pagination, Navigation]}
              className="w-full h-full"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <SwiperSlide key={i} className="w-full h-full">
                  <img
                    src={`/pics/bestsellers/${i + 1}.jpg`}
                    alt={`Bestseller ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BestsellersSection;
