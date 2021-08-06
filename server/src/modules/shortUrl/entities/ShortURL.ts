import type { ShortUrl as PersistenceShortUrl } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IShortUrl extends PersistenceShortUrl {}

class ShortURL {
  shortId: string;

  destination: string;

  created_at?: Date;

  updated_at?: Date;

  private constructor({ shortId, destination }: ShortURL) {
    return Object.assign(this, {
      shortId,
      destination,
    });
  }

  static create({ shortId, destination }: ShortURL) {
    const shortURL = new ShortURL({
      shortId,
      destination,
    });

    return shortURL;
  }

  static toPersistence(shortUrl: ShortURL) {
    return {
      shortId: shortUrl.shortId,
      destination: shortUrl.destination,
      created_at: shortUrl.created_at,
      updated_at: shortUrl.updated_at,
    };
  }
}

export { ShortURL, IShortUrl };
