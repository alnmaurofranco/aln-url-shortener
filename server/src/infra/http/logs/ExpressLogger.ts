/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

const NowDate = () => new Date().toLocaleTimeString([], { hour12: false });
const NowDateColor = (nowDate: string) => chalk.hex('#54436B').bold(nowDate);

const ExpressLogger = (req: Request, res: Response, next: NextFunction) => {
  const MethodStatusColor = (color: string) =>
    chalk.hex(color).bold(`[${req.method}]`);

  switch (req.method) {
    case 'GET':
      console.log(
        `${MethodStatusColor('#B980F0')} ${NowDateColor(NowDate())} - ${
          req.url
        }`
      );
      return next();
    case 'POST':
      console.log(
        `${MethodStatusColor('#50CB93')} ${NowDateColor(NowDate())} - ${
          req.url
        }`
      );
      return next();
    case 'PUT':
      console.log(
        `${MethodStatusColor('#DF711B')} ${NowDateColor(NowDate())} - ${
          req.url
        }`
      );
      return next();
    case 'DELETE':
      console.log(
        `${MethodStatusColor('#FF4848')} ${NowDateColor(NowDate())} - ${
          req.url
        }`
      );
      return next();
    default:
      return next();
  }
};

export { ExpressLogger };
