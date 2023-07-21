import { StatsService } from './stats.service';
import { Test, TestingModule } from '@nestjs/testing';
import { SlugsRepositoryMock } from '../slugs/mocks/slug-repository.mock';

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatsService, SlugsRepositoryMock],
    }).compile();

    service = module.get<StatsService>(StatsService);
  });

  describe('getStats', () => {
    it('should return an array of slugs 10', async () => {
      const stats = await service.getStats(0, 10);
      expect(stats).toHaveProperty('list');
      expect(stats).toHaveProperty('count');
      expect(stats.list).toHaveLength(10);
      expect(stats.count).toBe(10);
    });

    it('should return an array of slugs 5', async () => {
      const stats = await service.getStats(0, 5);
      expect(stats).toHaveProperty('list');
      expect(stats).toHaveProperty('count');
      expect(stats.list).toHaveLength(5);
      expect(stats.count).toBe(5);
    });

    it('should return an array of slugs 5 offset by 5', async () => {
      const stats = await service.getStats(1, 5);
      expect(stats).toHaveProperty('list');
      expect(stats).toHaveProperty('count');
      expect(stats.list).toHaveLength(5);
      expect(stats.count).toBe(5);
    });
  });
});

// Path: src\slugs\slugs.service.ts
