import { refs, simpleLightboxOptions, STORAGE_KEY } from './constants/constants.js';
import { getPhotos } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';


let query = fillFormFields(refs.form);

refs.form.addEventListener('input', handleFormInput);
refs.form.addEventListener('submit', handleSearch);
const simpleLightBox = new SimpleLightbox('.gallery li a', simpleLightboxOptions);

function handleFormInput(e) {
  query = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, query);
}


function handleSearch(e) {
  e.preventDefault();
  if (!query) return;

  refs.gallery.innerHTML = '';
  refs.loader.style.display = 'block';

  getPhotos(query)
    .then(({ hits }) => {
      refs.loader.style.display = 'none';
      if (hits.length) {
        refs.gallery.innerHTML = renderGallery(hits);
        simpleLightBox.refresh();
      }
      else {
        iziToast.warning({ message: 'Sorry, there are no images matching your search query. Please try again!', position: 'topRight' });
      }

    })
    .catch((error) => {
      iziToast.error({ message: 'There was an error while loading pictures. Please try again!', position: 'topRight' });
      console.error(error);
    })
    .finally(() => {
      query = '';
      localStorage.removeItem(STORAGE_KEY);
      refs.form.reset();
    });
}


function fillFormFields(form) {
  const localStorageData = localStorage.getItem(STORAGE_KEY);
  if (!localStorageData) return;

  form.elements.query.value = localStorageData;
  return localStorageData || '';
}