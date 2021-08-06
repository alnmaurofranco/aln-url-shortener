import cors from 'cors';
import 'express-async-errors';
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import { ExpressLogger } from './logs/ExpressLogger';
import { errorHandler } from './errors/errorMiddleware';
import { notFoundHandler } from './errors/notFound';
import routes from './routes';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.disable('x-powered-by');

// Template
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(
  cors({
    origin: '*',
  })
);

// Rotas
app.use(ExpressLogger);
app.get('/', (_req, res) => res.redirect('/api'));
app.use('/api', routes);

app.use(errorHandler);
app.use(notFoundHandler);

export { app };
