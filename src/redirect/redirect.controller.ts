import { Controller, Get, Param, Redirect } from '@nestjs/common';

@Controller()
export class RedirectController {
  @Get(':slug')
  @Redirect(undefined, 301)
  async redirect(@Param('slug') slug: string) {
    return null;
  }
}
