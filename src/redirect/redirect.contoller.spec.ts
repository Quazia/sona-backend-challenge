import { SlugsService } from '../slugs/slugs.service';
import { RedirectController } from './redirect.controller';
import { Test } from '@nestjs/testing';
import { SlugsRepositoryMock } from '../slugs/mocks/slug-repository.mock';
import { ResponseObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

describe('RedirectController', () => {
  let redirectController: RedirectController;
  let slugsService: SlugsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RedirectController],
      providers: [SlugsService, SlugsRepositoryMock],
    }).compile();

    slugsService = moduleRef.get<SlugsService>(SlugsService);
    redirectController = moduleRef.get<RedirectController>(RedirectController);
  });

  describe('getRedirect', () => {
    it('should get a redirect', async () => {
      const id = 'eg041x';
      jest.spyOn(slugsService, 'getRedirect').mockImplementation(() => Promise.resolve('https://www.google.com'));
      const res = { redirect: jest.fn() };
      await redirectController.redirect(res, id);
      expect(res.redirect).toHaveBeenCalledWith('https://www.google.com');
    });
  });
});
