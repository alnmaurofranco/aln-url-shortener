import { Prisma as PrismaTypes } from '@prisma/client';

import { ShortURL } from '../entities/ShortURL';

interface IShortUrlsRepository {
  findAll(opts?: PrismaTypes.ShortUrlFindManyArgs): Promise<ShortURL[] | null>;
  findByUrl(shortId: string): Promise<ShortURL | null>;
  create(shortUrl: ShortURL): Promise<ShortURL>;
  save(shortUrl: ShortURL): Promise<ShortURL>;
}

export { IShortUrlsRepository };
