import axios from 'axios';

const API_KEY = '55880661-10035f87f77481362b79097ec';
const API_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  });

  return response.data;
}
