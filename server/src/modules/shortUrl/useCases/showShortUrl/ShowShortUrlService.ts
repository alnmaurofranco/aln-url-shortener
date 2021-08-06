import { IShortUrlsRepository } from '@modules/shortUrl/repositories/IShortUrlsRepository';
import { IShowShortUrlRequestDTO } from '@modules/shortUrl/dtos/IShowShortUrlRequestDTO';

class ShowShortUrlService {
  constructor(private shortUrlsRepository: IShortUrlsRepository) {}

  async execute({ shortId }: IShowShortUrlRequestDTO): Promise<string> {
    const shortUrlAlreadyExists = await this.shortUrlsRepository.findByUrl(
      shortId
    );

    if (!shortUrlAlreadyExists) {
      throw new Error('Shortener URL does not exists.');
    }

    return shortUrlAlreadyExists.destination;
  }
}

export { ShowShortUrlService };
