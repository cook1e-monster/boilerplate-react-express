import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express 2' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
