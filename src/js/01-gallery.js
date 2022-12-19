// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const htmlString = galleryItems
  .map(
    obj => `
<a class="gallery__item" href=${obj.original}>
  <img
    class="gallery__image"
    src=${obj.preview}
    alt=${obj.description}
  />
</a>`
  )
  .join('');

gallery.innerHTML = htmlString;

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: `bottom`,
  captionsData: `alt`,
  captionDelay: 250,
});
console.log(galleryItems);
