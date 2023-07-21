import { Controller, Post, Put, Body, Param } from '@nestjs/common';

import { StatsService } from './stats.service';
import { GetStatsDto } from './dto/get-stats.dto';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}
  @Post()
  async getStats(@Body() getStatsDto: GetStatsDto) {
    return this.statsService.getStats(getStatsDto.offset, getStatsDto.limit);
  }
}
