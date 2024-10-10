import images from '../data/data.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/styles.css';
import { refs } from '../constants/constants.js';


function createCard({ preview, original, description }) {
  return `
        <li class="gallery-item"">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
    `;
}

const markUp = images.map(createCard).join('');
refs.gallery.insertAdjacentHTML('afterbegin', markUp);


const options = {
  overlay        : true,
  overlayOpacity : 1,
  captions       : true,
  captionPosition: 'bottom',
  captionType    : 'attr',
  captionsData   : 'alt',
  captionDelay   : 250,
};


new SimpleLightbox('.gallery li a', options);