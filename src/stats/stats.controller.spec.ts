import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { Test } from '@nestjs/testing';
import { SlugsRepositoryMock, slugFindAndCount } from '../slugs/mocks/slug-repository.mock';
import { GetStatsDto } from './dto/get-stats.dto';
import { ValidationPipe } from '@nestjs/common';
describe('StatsController', () => {
  let statsController: StatsController;
  let statsService: StatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [StatsController],
      providers: [StatsService, SlugsRepositoryMock],
    })
      .overrideGuard(ValidationPipe)
      .useValue(new ValidationPipe({ transform: true }))
      .compile();

    statsService = moduleRef.get<StatsService>(StatsService);
    statsController = moduleRef.get<StatsController>(StatsController);
  });

  describe('create', () => {
    it('should return a slug', async () => {
      jest.spyOn(statsService, 'getStats').mockImplementation(async (skip, take) => {
        const [list, count] = await slugFindAndCount({ skip, take });
        return { list, count };
      });
      statsController.getStats({ offset: 0, limit: 10 } as GetStatsDto);
      expect(statsService.getStats).toBeCalledWith(0, 10);
    });
  });
});
