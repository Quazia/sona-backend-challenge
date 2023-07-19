import { Injectable } from '@nestjs/common';
import { ISlug } from './slug.interface';
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

  read(slug: string): ISlug {
    // Placeholder for actual lookup
    return null;
  }

}

// Path: src\slugs\slug.service.ts