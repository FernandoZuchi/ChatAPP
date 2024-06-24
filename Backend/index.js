const express = require("express"); // Importa o módulo Express
const cors = require("cors"); // Importa o módulo CORS
const axios = require('axios');

const app = express(); // Cria uma instância da aplicação Express
app.use(express.json()); // Adiciona middleware para parsear JSON no corpo das requisições
app.use(cors({ origin: true })); // Adiciona middleware CORS para permitir requisições de qualquer origem

// Define a rota POST "/authenticate" e seu manipulador assíncrono
app.post("/authenticate", async (req, res) => {
  const { username } = req.body; // Extrai o campo "username" do corpo da requisição

  try {
    // Tenta fazer uma requisição PUT para a API do ChatEngine
    const response = await axios.put(
      "https://api.chatengine.io/users/", // URL da API
      { username: username, secret: username, first_name: username }, // Dados do usuário no corpo da requisição
      { headers: { "private-key": "731b2b27-bafc-4c16-a92f-d19e06211b68" } } // Cabeçalho com a chave privada
    );
    // Se a requisição for bem-sucedida, retorna o status e os dados da resposta
    return res.status(response.status).json(response.data); // Caso dê certo!
  } catch (e) {
    // Se a requisição falhar, retorna o status e os dados do erro
    return res.status(e.response.status).json(e.response.data); // Caso dê erro!
  }
});

app.listen(3001); // Inicia o servidor na porta 3001
