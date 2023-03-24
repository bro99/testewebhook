const express = require('express');
const app = express();

app.use(express.json());

app.post('/callback/estoque', (req, res) => {
  console.log("Recebi conexão");
  console.log(req.body);
  res.send('Callback recebido com sucesso!');
});

const server = app.listen(3000, () => {
  const address = server.address();
  console.log(`Servidor iniciado em http://${address.address}:${address.port}`);
});