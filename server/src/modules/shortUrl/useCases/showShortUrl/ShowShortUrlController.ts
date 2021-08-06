import { Request, Response } from 'express';
import { ShowShortUrlService } from './ShowShortUrlService';

class ShowShortUrlController {
  constructor(private showShortUrlService: ShowShortUrlService) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const { shortId } = req.params;

      const showShortUrl = await this.showShortUrlService.execute({ shortId });

      return res.json(showShortUrl);
      // return res.redirect(showShortUrl);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { ShowShortUrlController };
