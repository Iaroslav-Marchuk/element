import { useState } from 'react';

function GalleryItem({ img, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <li className="relative cursor-pointer" onClick={onClick}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}

      <img
        src={img.url}
        alt={img.id}
        width={img.width}
        height={img.height}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-75 object-cover rounded transition-opacity duration-100 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </li>
  );
}

export default GalleryItem;
