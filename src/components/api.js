import axios from 'axios';

// axios.default.baseUrl = 'https://pixabay.com/api/';
const API_KEY = '30307966-ea2e6055e88053146b4d64f93';

export const FetchImages = async ({ query, page, perPage }) => {
  return await axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data.images);
};
