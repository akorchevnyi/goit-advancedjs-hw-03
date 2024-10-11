export function renderGallery(cards) {
  return cards
    .map(({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) =>
        `
            <li class="gallery-card">
                <a class="gallery-link" href="${largeImageURL}">
                    <img class="gallery-image" src="${webformatURL}" alt="${tags}" height=312 width=200>
                    <ul class="statistics">
                        <li class="stat-element">
                            <p class="stat-name">Likes</p>
                            <p class="stat-value">${likes}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Views</p>
                            <p class="stat-value">${views}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Comments</p>
                            <p class="stat-value">${comments}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Downloads</p>
                            <p class="stat-value">${downloads}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `
    )
    .join("");
}