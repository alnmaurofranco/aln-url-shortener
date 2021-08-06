import { Router } from 'express';
import { CreateShortUrlFactory } from '@modules/shortUrl/useCases/createShortUrl/CreateShortUrlFactory';
import { ShowShortUrlFactory } from '@modules/shortUrl/useCases/showShortUrl/ShowShortUrlFactory';

import { CreateShortUrlValidation } from '@validation/shortUrl/CreateShortUrlValidation';
import { validationMiddleware } from '../middlewares/validationMiddleware';

const shortUrlRouter = Router();

shortUrlRouter.post(
  '/',
  validationMiddleware(CreateShortUrlValidation),
  (req, res) => CreateShortUrlFactory().handle(req, res)
);

shortUrlRouter.get('/:shortId', (req, res) =>
  ShowShortUrlFactory().handle(req, res)
);

export { shortUrlRouter };
