import { SlugsService } from './slugs.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Slug } from './entities/slug.entity';
import { SlugsRepositoryMock } from './mocks/slug-repository.mock';



describe('SlugsService', () => {
  let service: SlugsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlugsService, SlugsRepositoryMock],
    }).compile();

    service = module.get<SlugsService>(SlugsService);
  });

  describe('create', () => {
    it('should create a new slug', async () => {
      const slug = await service.create('https://www.google.com');
      expect(slug.id).toMatch(/^[a-zA-Z0-9]{6}$/);
    });
  });

  describe('read', () => {
    it('should read a slug', async () => {
      const slug = await service.create('https://www.google.com');
      expect(slug.url).toEqual('https://www.google.com');
    });
  });

  describe('getRedirect', () => {
    it('should get a redirect', async () => {
      const slug = await service.create('https://www.google.com');
      const redirect = service.getRedirect(slug.id);
      expect(redirect).toBe('https://www.google.com');
    });
  });
});

// Path: src\slugs\slugs.service.ts
