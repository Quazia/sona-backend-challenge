import { getRepositoryToken } from '@nestjs/typeorm';
import { Slug } from '../slug.model';

const slugArray = [
  {
    id: '1F3D4A',
    url: 'https://www.google.com',
    visitCount: 0,
  },
  {
    id: '2J8FH5',
    url: 'https://www.bing.com',
    visitCount: 0,
  },
  {
    id: '3K9EG6',
    url: 'https://www.yahoo.com',
    visitCount: 0,
  },
  {
    id: '4L0AF7',
    url: 'https://www.duckduckgo.com',
    visitCount: 0,
  },
  {
    id: '5M1CE8',
    url: 'https://www.ask.com',
    visitCount: 0,
  },
  {
    id: '6N2BD9',
    url: 'https://www.wolframalpha.com',
    visitCount: 0,
  },
  {
    id: '7O3IID0',
    url: 'https://www.yandex.com',
    visitCount: 0,
  },
  {
    id: '8P4PE1',
    url: 'https://www.baidu.com',
    visitCount: 0,
  },
  {
    id: '9Q5KF2',
    url: 'https://www.wow.com',
    visitCount: 0,
  },
  {
    id: '0R6RG3',
    url: 'https://www.wiki.com',
    visitCount: 0,
  },
  {
    id: '1S7MH4',
    url: 'https://www.wikihow.com',
    visitCount: 0,
  },
  {
    id: '2T8QI5',
    url: 'https://www.wikipedia.com',
    visitCount: 0,
  },
  {
    id: '3U9BJ6',
    url: 'https://www.wikipedia.org',
    visitCount: 0,
  },
  {
    id: '4V0CK7',
    url: 'https://www.wikiquote.com',
    visitCount: 0,
  },
  {
    id: '5W1DL8',
    url: 'https://www.wikiquote.org',
    visitCount: 0,
  },
  {
    id: '6X2EM9',
    url: 'https://www.wiktionary.com',
    visitCount: 0,
  },
  {
    id: '7Y3FN0',
    url: 'https://www.wiktionary.org',
    visitCount: 0,
  },
  {
    id: '8Z4GO1',
    url: 'https://www.wikibooks.com',
    visitCount: 0,
  },
  {
    id: '9A5HP2',
    url: 'https://www.wikibooks.org',
    visitCount: 0,
  },
  {
    id: '0B6IQ3',
    url: 'https://www.wikisource.com',
    visitCount: 0,
  },
];

const oneSlug = {
  id: '1F3D4A',
  url: 'https://www.google.com',
  visitCount: 0,
};

export const SlugsRepositoryMock = {
  provide: getRepositoryToken(Slug),
  useValue: {
    find: jest.fn().mockResolvedValue(slugArray),
    findOne: jest.fn().mockResolvedValue(oneSlug),
    save: jest.fn().mockResolvedValue(oneSlug),
    remove: jest.fn(),
    delete: jest.fn(),
  },
};
