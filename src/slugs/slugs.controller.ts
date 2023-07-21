import { Controller, Post, Put, Body, Param } from '@nestjs/common';

import { SlugsService } from './slugs.service';
import { CreateSlugDto } from './dto/create-slug.dto';

@Controller('slugs')
export class SlugsController {
  constructor(private readonly slugsService: SlugsService) {}
  @Post()
  async create(@Body() createSlugDto: CreateSlugDto) {
    return this.slugsService.create(createSlugDto.url);
  }

  @Put(':id')
  async update(@Param('id') id: string) {
    return this.slugsService.update(id);
  }
}
