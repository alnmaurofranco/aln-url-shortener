import type { Request, Response } from 'express';
import { CreateShortUrlService } from './CreateShortUrlService';

class CreateShortUrlController {
  constructor(private createShortUrlService: CreateShortUrlService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { destination } = req.body;

      const shortUrl = await this.createShortUrlService.execute({
        destination,
      });

      return res.json(shortUrl);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export { CreateShortUrlController };
