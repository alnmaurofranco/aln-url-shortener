import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';

const validationMiddleware = (schema: AnyObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err) {
      return res.status(400).send(err);
    }
  };
};

export { validationMiddleware };
