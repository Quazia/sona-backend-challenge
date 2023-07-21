import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from '../slugs/entities/slug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  providers: [StatsService],
  exports: [StatsService],
})
export class StatsModule {}
