import { ValidationPipe, ArgumentMetadata } from '@nestjs/common';
import { CreateSlugDto } from './create-slug.dto';

describe('CreateSlugDto', () => {
  it('Should accept a valid URL', async () => {
    const target: ValidationPipe = new ValidationPipe();
    const metadata: ArgumentMetadata = {
      type: 'body',
      metatype: CreateSlugDto,
      data: 'https://www.google.com',
    };
    await expect(target.transform({} as CreateSlugDto, metadata)).resolves.toMatchObject({ url: 'https://www.google.com' });
  });
});
