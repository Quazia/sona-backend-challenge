import { Injectable } from '@nestjs/common';
import { Slug } from './entities/slug.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class SlugsService {
  // Temporary in-memory database
  constructor(@InjectRepository(Slug) private readonly slugsRepository: Repository<Slug>) {}
  create(url: string): Promise<Slug> {
    // Generate slug
    // Push slug+URL to db
    // this.slugs[slugId] = newSlug;
    return this.slugsRepository.save({ url });
  }

  read(slugId: string): Promise<Slug> {
    // return this.slugs[slug];
    return this.slugsRepository.findOne({ id: slugId });
  }

  async getRedirect(slugId: string): Promise<string> {
    const slugEntity = await this.slugsRepository.findOne({ id: slugId });

    return slugEntity.url;
  }
}

// Path: src\slugs\slug.service.ts
