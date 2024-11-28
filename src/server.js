// server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware para ler o corpo das requisições
app.use(express.json());

// Rota para receber a pergunta e consultar a API da OpenAI
app.post('/gpt', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'A pergunta é obrigatória.' });
  }

  try {
    // Fazendo a requisição para a API da OpenAI
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: question,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const answer = response.data.choices[0].text.trim();

    // Retorna a resposta da OpenAI
    res.json({ answer });
  } catch (error) {
    console.error('Erro ao chamar a API da OpenAI:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao obter a resposta.' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
