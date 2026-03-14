import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({ images }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {images.map(img => (
        <GalleryItem key={img.id} img={img} />
      ))}
    </ul>
  );
}

export default GalleryList;
