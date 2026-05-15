import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.js-gallery');
const loaderElement = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="photo-card">
        <a class="photo-link" href="${image.largeImageURL}">
          <img
            class="photo-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${image.likes}</span></p>
          <p class="info-item"><b>Views</b><span>${image.views}</span></p>
          <p class="info-item"><b>Comments</b><span>${image.comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${image.downloads}</span></p>
        </div>
      </li>`
    )
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryElement.innerHTML = '';
}

export function showLoader() {
  loaderElement.classList.remove('hidden');
}

export function hideLoader() {
  loaderElement.classList.add('hidden');
}
