import { customAlphabet } from 'nanoid';
import { ICreateShortUrlRequestDTO } from '@modules/shortUrl/dtos/ICreateShortUrlRequestDTO';
import { IShortUrlsRepository } from '@modules/shortUrl/repositories/IShortUrlsRepository';
import { ShortURL } from '../../entities/ShortURL';

const nanoid = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuv0987654321',
  12
);

class CreateShortUrlService {
  constructor(private shortUrlsRepository: IShortUrlsRepository) {}

  async execute({ destination }: ICreateShortUrlRequestDTO): Promise<ShortURL> {
    if (!destination) {
      throw new Error('Destination is invalid.');
    }

    const data = ShortURL.create({
      shortId: nanoid(),
      destination,
    });

    const newShortUrl = await this.shortUrlsRepository.create(data);

    if (!newShortUrl) {
      throw new Error('not possible create shortUrl');
    }

    return newShortUrl;
  }
}

export { CreateShortUrlService };
