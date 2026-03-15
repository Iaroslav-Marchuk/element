import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function GalleryModal({ images, initialIndex, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl px-4" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-50"
        >
          ✕
        </button>

        <Swiper
          modules={[Navigation, Keyboard]}
          navigation
          keyboard={{ enabled: true }}
          initialSlide={initialIndex}
          spaceBetween={16}
          slidesPerView={1}
        >
          {images.map(img => (
            <SwiperSlide key={img.id}>
              <div className="flex items-center justify-center h-[80vh]">
                <img
                  src={img.url}
                  alt={img.id}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GalleryModal;
