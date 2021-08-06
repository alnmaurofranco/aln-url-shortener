import { Prisma as PrismaTypes } from '@prisma/client';
import { prisma } from '@prismadb/client';

import { ShortURL } from '@modules/shortUrl/entities/ShortURL';
import { IShortUrlsRepository } from '../IShortUrlsRepository';

class PrismaShortUrlsRepository implements IShortUrlsRepository {
  async findAll(
    opts?: PrismaTypes.ShortUrlFindManyArgs
  ): Promise<ShortURL[] | null> {
    const shortUrlsAll = await prisma.shortUrl.findMany(opts);

    if (!shortUrlsAll) {
      return null;
    }

    return shortUrlsAll;
  }

  async findByUrl(shortId: string): Promise<ShortURL | null> {
    const urlShort = await prisma.shortUrl.findUnique({
      where: { shortId },
    });

    // Caso não seja possivel criar no banco retorna null
    if (!urlShort) return null;

    return urlShort;
  }

  async create(shortUrl: ShortURL): Promise<ShortURL> {
    // Persiste os dados EX: Model
    const data = ShortURL.toPersistence(shortUrl);

    // Cria no banco de dados
    const createdShortUrl = await prisma.shortUrl.create({ data });

    return createdShortUrl;
  }

  async save(shortUrl: ShortURL): Promise<ShortURL> {
    const data = ShortURL.toPersistence(shortUrl);

    const saveShortUrl = await prisma.shortUrl.update({
      where: {
        shortId: shortUrl.shortId,
      },
      data,
    });

    return saveShortUrl;
  }
}

export { PrismaShortUrlsRepository };
