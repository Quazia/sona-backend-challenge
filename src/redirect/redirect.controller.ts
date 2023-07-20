import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { SlugsService } from '../slugs/slugs.service';

@Controller()
export class RedirectController {
  // TODO: This should be more generalized
  constructor(private readonly slugsService: SlugsService) {}

  @Get(':slug')
  @Redirect(undefined, 301)
  async redirect(@Param('slug') slug: string) {
    const url = await this.slugsService.getRedirect(slug);
    return { url };
  }
}
