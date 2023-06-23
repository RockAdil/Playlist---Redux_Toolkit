import { faker } from '@faker-js/faker/locale/en';

export const createRandomSong = () => {
  return faker.music.songName();
};

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};
