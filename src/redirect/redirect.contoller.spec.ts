import { SlugsService } from '../slugs/slugs.service';
import { RedirectController } from './redirect.controller';
import { Test } from '@nestjs/testing';
import { SlugsRepositoryMock } from '../slugs/mocks/slug-repository.mock';


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
      const slugId = 'eg041x';
      jest.spyOn(slugsService, 'getRedirect').mockImplementation(() => 'https://www.google.com');
      const redirect = await redirectController.redirect(slugId);
      expect(redirect).toMatchObject({ url: 'https://www.google.com' });
    });
  });
});
