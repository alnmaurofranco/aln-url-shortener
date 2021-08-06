import { PrismaShortUrlsRepository } from '@modules/shortUrl/repositories/prisma/PrismaShortUrlsRepository';
import { CreateShortUrlController } from './CreateShortUrlController';
import { CreateShortUrlService } from './CreateShortUrlService';

const CreateShortUrlFactory = () => {
  const prismaShortUrlsRepository = new PrismaShortUrlsRepository();
  const createShortUrlService = new CreateShortUrlService(
    prismaShortUrlsRepository
  );
  const createShortUrlController = new CreateShortUrlController(
    createShortUrlService
  );

  return createShortUrlController;
};

export { CreateShortUrlFactory };
