import { Injectable } from '@nestjs/common';
import { Slug } from './entities/slug.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid';

@Injectable()
export class SlugsService {
  // Temporary in-memory database
  constructor(@InjectRepository(Slug) private readonly slugsRepository: Repository<Slug>) {}
  create(url: string): Promise<Slug> {
    // Generate slug
    // Push slug+URL to db
    // this.slugs[id] = newSlug;
    return this.slugsRepository.save({ id: nanoid(6), url, visitCount: 0 });
  }

  read(id: string): Promise<Slug> {
    // return this.slugs[slug];
    return this.slugsRepository.findOne({ id });
  }

  async getRedirect(id: string): Promise<string> {
    const slugEntity = await this.slugsRepository.findOne({ id });

    return slugEntity.url;
  }
}

// Path: src\slugs\slug.service.ts
