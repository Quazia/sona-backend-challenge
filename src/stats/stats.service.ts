import { Injectable } from '@nestjs/common';
import { Slug } from '../slugs/entities/slug.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatsService {
  constructor(@InjectRepository(Slug) private readonly slugsRepository: Repository<Slug>) {}

  async getStats(skip: number, limit: number) {
    const [list, count] = await this.slugsRepository.findAndCount({
      skip,
      take: limit,
    });
    return { list, count };
  }
}
