import { getRepositoryToken } from '@nestjs/typeorm';
import { Slug } from '../slug.model';

const slugArray = [
  {
    id: '1F3D4A',
    url: 'https://www.google.com',
    visitCount: 0,
  },
  {
    id: '2J8&H5',
    url: 'https://www.bing.com',
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
    findOneBy: jest.fn().mockResolvedValue(oneSlug),
    save: jest.fn().mockResolvedValue(oneSlug),
    remove: jest.fn(),
    delete: jest.fn(),
  },
};
