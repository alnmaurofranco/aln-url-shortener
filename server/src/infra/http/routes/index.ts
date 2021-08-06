import { Request, Response, Router } from 'express';
// eslint-disable-next-line import/extensions
import { shortUrlRouter } from './shortUrl.routes';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  return res.json({ message: 'Welcome to Generator NodeJS API' });
});

router.use('/urls', shortUrlRouter);

export default router;
