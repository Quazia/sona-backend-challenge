import { ISlug } from './slug.interface';
export class Slug implements ISlug {
  constructor(public slugId: string, public url: string, public visitCount: number) {}
}
