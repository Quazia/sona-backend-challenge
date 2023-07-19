import { Injectable } from '@nestjs/common';
import { Slug } from './slug.model';
@Injectable()
export class SlugsService {
  slugs: { [slugId: string]: Slug } = {};

  create(url: string) {
    // Generate slug
    // Push slug+URL to db
    const slugId = 'eg041x';
    const newSlug = new Slug(slugId, url, 0);
    this.slugs[slugId] = newSlug;
    return slugId;
  }

  read(slug: string): Slug {
    // Placeholder for actual lookup
    return this.slugs[slug];
  }
}

// Path: src\slugs\slug.service.ts
