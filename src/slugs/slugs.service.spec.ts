import { SlugsService } from './slugs.service';

describe('SlugsService', () => {
  let service: SlugsService;

  beforeEach(async () => {
    service = new SlugsService();
  });

  describe('create', () => {
    it('should create a new slug', () => {
      const slugId = service.create('https://www.google.com');
      expect(slugId).toMatch(/^[a-zA-Z0-9]{6}$/);
    });
  });

  describe('read', () => {
    it('should read a slug', () => {
      const slugId = service.create('https://www.google.com');
      const slug = service.read(slugId);
      expect(slug).toEqual({
        slugId,
        url: 'https://www.google.com',
        visitCount: 0,
      });
    });
  });
});

// Path: src\slugs\slugs.service.ts
