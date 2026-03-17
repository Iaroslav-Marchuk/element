import { useState } from 'react';

import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryModal from '../GalleryModal/GalleryModal.jsx';

function GalleryList({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <ul
        className="grid grid-cols-1 gap-4
      md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      >
        {images.map((img, index) => (
          <GalleryItem
            key={img.id}
            img={img}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </ul>

      {activeIndex !== null && (
        <GalleryModal
          images={images}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}

export default GalleryList;
