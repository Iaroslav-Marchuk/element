import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'dsdqqfhq0',
  api_key: '752973487372548',
  api_secret: '6fJk5X5lW7RpHUQiCQIqmGLTKkI',
});

async function getAllImages() {
  let allImages = [];
  let nextCursor = null;

  do {
    const params = { type: 'upload', max_results: 500 };
    if (nextCursor) params.next_cursor = nextCursor;

    const result = await cloudinary.api.resources(params);

    const images = result.resources.map(r => ({
      id: r.public_id,
      url: r.secure_url,
      folder: r.asset_folder, // беремо напряму з asset_folder
      width: r.width,
      height: r.height,
    }));

    allImages = allImages.concat(images);
    nextCursor = result.next_cursor || null;
  } while (nextCursor);

  return allImages;
}

async function main() {
  const images = await getAllImages();

  // Групуємо по підпапках
  const byFolder = images.reduce((acc, img) => {
    const folder = img.folder;
    if (!acc[folder]) acc[folder] = [];
    acc[folder].push(img);
    return acc;
  }, {});

  fs.writeFileSync('catalog.json', JSON.stringify(byFolder, null, 2), 'utf-8');
  console.log(`Збережено ${images.length} зображень у catalog.json`);
  console.log('Папки:', Object.keys(byFolder));
}

main();
