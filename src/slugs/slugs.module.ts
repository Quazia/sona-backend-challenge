import { Module } from '@nestjs/common';
import { SlugsService } from './slugs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from './entities/slug.entity';
import { SlugsController } from './slugs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  providers: [SlugsService],
  controllers: [SlugsController],
  exports: [SlugsService],
})
export class SlugsModule {}
