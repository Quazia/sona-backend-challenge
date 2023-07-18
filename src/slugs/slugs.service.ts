import { Injectable } from '@nestjs/common';
import { Slug } from './slug.model';
@Injectable()
export class SlugsService {
  slugs: { [slugId: string]: Slug } = {};

  create(url: string) {
    // Generate slug
    // Push slug+URL to db
    const slugId = 'eg041x';
    const newSlug = new Slug({ slugId, url, visitCount: 0 });
    this.slugs[slugId] = newSlug;
    return slugId;
  }
}

// Path: src\slugs\slug.service.ts