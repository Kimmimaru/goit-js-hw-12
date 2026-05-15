import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-search-form');
const loadMoreButton = document.querySelector('.js-load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
const PER_PAGE = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchText = event.currentTarget.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  currentQuery = searchText;
  currentPage = 1;
  totalHits = 0;
  clearGallery();
  hideLoadMoreButton();

  await fetchImages();
});

loadMoreButton.addEventListener('click', async () => {
  currentPage += 1;
  await fetchImages();
});

async function fetchImages() {
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      if (currentPage === 1) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        iziToast.info({
          title: 'End of results',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }

      hideLoadMoreButton();
      return;
    }

    if (currentPage === 1) {
      totalHits = data.totalHits;
      if (totalHits === 0) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        hideLoadMoreButton();
        return;
      }
    }

    createGallery(data.hits);

    const hasMorePages = currentPage * PER_PAGE < totalHits;

    if (hasMorePages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    if (currentPage > 1) {
      scrollAfterLoad();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function scrollAfterLoad() {
  const card = document.querySelector('.gallery .photo-card');

  if (!card) {
    return;
  }

  const { height } = card.getBoundingClientRect();
  window.scrollBy({ top: height * 2, behavior: 'smooth' });
}
