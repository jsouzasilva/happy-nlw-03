import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  response.send('Olá mundo!')
})

app.listen(3333);