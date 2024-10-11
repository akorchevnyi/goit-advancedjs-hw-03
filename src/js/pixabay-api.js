import { PX_API_KEY } from '../constants/constants.js';

const BASE_URL = 'https://pixabay.com/api';


export function getPhotos(query) {
  const params = new URLSearchParams({
    key        : PX_API_KEY,
    q          : query,
    image_type : 'photo',
    orientation: 'horizontal',
    safesearch : true,
  });

  return fetch(`${BASE_URL}/?${params}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });
}