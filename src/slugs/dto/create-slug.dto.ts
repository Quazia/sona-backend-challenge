import { IsUrl } from 'class-validator';

export class CreateSlugDto {
  @IsUrl()
  url: string;
}
