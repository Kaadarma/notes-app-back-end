import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import ErrorHandler from './middlewares/error.js';


const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

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

app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});