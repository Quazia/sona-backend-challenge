import { ValidationPipe, ArgumentMetadata } from '@nestjs/common';
import { CreateSlugDto } from './create-slug.dto';

describe('CreateSlugDto', () => {
  it('Should accept a valid URL', async () => {
    const target: ValidationPipe = new ValidationPipe();
    const urlObj = { url: 'https://www.google.com' };
    const metadata: ArgumentMetadata = {
      type: 'body',
      metatype: CreateSlugDto,
    };
    await expect(target.transform(urlObj as CreateSlugDto, metadata)).resolves.toMatchObject(urlObj);
  });
  it('Should throw error on invalid URL', async () => {
    const target: ValidationPipe = new ValidationPipe();
    const urlObj = { url: 'IS_THIS_A_URL?' };
    const metadata: ArgumentMetadata = {
      type: 'body',
      metatype: CreateSlugDto,
    };
    await expect(target.transform(urlObj as CreateSlugDto, metadata)).rejects.toThrowError();
  });
});
