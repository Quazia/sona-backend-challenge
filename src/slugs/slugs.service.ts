import { Injectable } from '@nestjs/common';
import { Slug } from './slug.model';
@Injectable()
export class SlugsService {
  // Temporary in-memory database
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
    return this.slugs[slug];
  }

  getRedirect(slug: string): string {
    return null;
  }
}

// Path: src\slugs\slug.service.ts
