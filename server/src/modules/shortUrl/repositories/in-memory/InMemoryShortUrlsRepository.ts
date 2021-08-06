/* eslint-disable no-return-assign */
import { IShortUrlsRepository } from '@modules/shortUrl/repositories/IShortUrlsRepository';
import { ShortURL } from '@modules/shortUrl/entities/ShortURL';

class InMemoryShortUrlsRepository implements IShortUrlsRepository {
  private urls: ShortURL[] = [];

  async findAll(): Promise<ShortURL[] | null> {
    const allUrls = await this.urls.map((url) => {
      return url;
    });

    return allUrls;
  }

  async findByUrl(shortId: string): Promise<ShortURL | null> {
    const urlShort = await this.urls.find((url) => url.shortId === shortId);
    return urlShort;
  }

  async create(shortUrl: ShortURL): Promise<ShortURL> {
    this.urls.push(shortUrl);

    return shortUrl;
  }

  async save(shortUrl: ShortURL): Promise<ShortURL> {
    const findShortUrl = this.urls.findIndex(
      (url) => url.shortId === shortUrl.shortId
    );

    return (this.urls[findShortUrl] = shortUrl);
  }
}

export { InMemoryShortUrlsRepository };
