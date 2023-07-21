import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from '../slugs/entities/slug.entity';
import { StatsController } from './stats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  providers: [StatsService],
  controllers: [StatsController],
  exports: [StatsService],
})
export class StatsModule {}
