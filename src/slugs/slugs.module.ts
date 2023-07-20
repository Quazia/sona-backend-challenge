import { Module } from '@nestjs/common';
import { SlugsService } from './slugs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from './entities/slug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  providers: [SlugsService],
  exports: [SlugsService],
})
export class SlugsModule {}
