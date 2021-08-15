import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');
const DIST_PATH = resolve(__dirname, '..', 'dist');

export default {
  database: {
    url: 'postgresql://postgres:postgres@localhost:5432/eventstest?schema=public',
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity.ts`, `${DIST_PATH}/**/*.entity.js`],
    synchronize: false,
  },
};
