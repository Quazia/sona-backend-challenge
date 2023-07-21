import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from '../slugs/entities/slug.entity';
import { RedirectController } from './redirect.controller';
import { SlugsModule } from '../slugs/slugs.module';

@Module({
  imports: [TypeOrmModule.forFeature([Slug]), SlugsModule],
  controllers: [RedirectController],
})
export class RedirectModule {}
