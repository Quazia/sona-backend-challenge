import { Controller, Post, Put, Body, Param } from '@nestjs/common';

import { SlugsService } from './slugs.service';

@Controller('slugs')
export class SlugsController {
  constructor(private readonly slugsService: SlugsService) {}
  @Post()
  async create(@Body() url: string) {
    return null;
  }
}
