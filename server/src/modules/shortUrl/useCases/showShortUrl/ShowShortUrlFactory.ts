import { PrismaShortUrlsRepository } from '@modules/shortUrl/repositories/prisma/PrismaShortUrlsRepository';
import { ShowShortUrlController } from '@modules/shortUrl/useCases/showShortUrl/ShowShortUrlController';
import { ShowShortUrlService } from './ShowShortUrlService';

const ShowShortUrlFactory = () => {
  const prismaShortUrlsRepository = new PrismaShortUrlsRepository();
  const showShortUrlService = new ShowShortUrlService(
    prismaShortUrlsRepository
  );
  const showShortUrlController = new ShowShortUrlController(
    showShortUrlService
  );

  return showShortUrlController;
};

export { ShowShortUrlFactory };
