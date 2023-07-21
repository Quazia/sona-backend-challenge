import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from '../slugs/entities/slug.entity';
import { RedirectController } from './redirect.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  controllers: [RedirectController],
})
export class RedirectModule {}
