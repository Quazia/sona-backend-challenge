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

  read(slug: string): Slug {
    // return this.slugs[slug];
    return null;
  }

  getRedirect(slug: string): string {
    // return this.slugs[slug].url;
    return null;
  }
}

// Path: src\slugs\slug.service.ts
