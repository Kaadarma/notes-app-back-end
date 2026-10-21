import express from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Private-Network', 'true');
  next();
});
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

app.use('/', router);

app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Rute ${req.method} ${req.url} tidak ditemukan di server`,
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    status: 'error',
    message: 'Terjadi kegagalan pada server kami',
  });
});

app.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});