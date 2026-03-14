function GalleryItem({ img }) {
  return (
    <li>
      <img
        src={img.url}
        alt={img.id}
        width={img.width}
        height={img.height}
        loading="lazy"
        className="w-full h-75 object-cover rounded"
      />
    </li>
  );
}

export default GalleryItem;
