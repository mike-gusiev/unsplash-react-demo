import Unsplash from 'unsplash-js';

export const unsplash = new Unsplash({
  applicationId: 'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5',
  secret: 'a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5',
});

export default {
  fetchNewUsers: (value) => unsplash.search.users(value).then(response => response.json()),
  fetchAllImages: (value) => unsplash.users.photos(value).then(response => response.json()),
};

