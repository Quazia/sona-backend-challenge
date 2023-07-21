import { Controller, Get, Param, Res } from '@nestjs/common';
import { SlugsService } from '../slugs/slugs.service';

@Controller()
export class RedirectController {
  // TODO: This should be more generalized
  constructor(private readonly slugsService: SlugsService) {}

  @Get(':slug')
  async redirect(@Res() res, @Param('slug') slug: string) {
    const url = await this.slugsService.getRedirect(slug);
    return res.redirect(url);
  }
}
