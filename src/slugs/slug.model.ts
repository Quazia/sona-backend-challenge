import { ISlug } from './slug.interface';
export class Slug implements ISlug {
  constructor(public id: string, public url: string, public visitCount: number) {}
}
