import '@config/env';
import { baseUrl, port } from '@config/index';
import chalk from 'chalk';
import { app } from './app';

app.listen(port, () =>
  console.log(
    `${chalk.hex('#3490DE').bold('[INFO]')} Server started go to ${chalk.bold(
      `${baseUrl}:${port}`
    )} ✨`
  )
);
