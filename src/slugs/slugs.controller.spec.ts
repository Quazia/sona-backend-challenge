import { SlugsService } from '../slugs/slugs.service';
import { SlugsController } from './slugs.controller';
import { Test } from '@nestjs/testing';
import { SlugsRepositoryMock } from './mocks/slug-repository.mock';
describe('RedirectController', () => {
  let slugsController: SlugsController;
  let slugsService: SlugsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SlugsController],
      providers: [SlugsService, SlugsRepositoryMock],
    }).compile();

    slugsService = moduleRef.get<SlugsService>(SlugsService);
    slugsController = moduleRef.get<SlugsController>(SlugsController);
  });

  describe('create', () => {
    it('should return a slug', async () => {
      const result = 'slug';
      const url = 'https://www.google.com';
      jest.spyOn(slugsService, 'create').mockImplementation(() => Promise.resolve({ id: '0F4J1D', url: result, visitCount: 0 }));
      slugsController.create({ url });
      expect(slugsService.create).toBeCalledWith(url);
    });
  });
});
