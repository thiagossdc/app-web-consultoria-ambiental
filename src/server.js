const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// Configuração do corpo da requisição
app.use(bodyParser.json());

// Rota para processar perguntas e enviar ao OpenAI
app.post("/gpt", async (req, res) => {
  const { question } = req.body;

  try {
    // Chave da sua API do OpenAI
    const openaiApiKey = "YOUR_OPENAI_API_KEY";

    // Requisição para o modelo GPT-3 da OpenAI
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003", // Modelo GPT-3
        prompt: `Pergunta sobre ESG: ${question}`,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          "Authorization": `Bearer ${openaiApiKey}`,
        },
      }
    );

    // Retorna a resposta do OpenAI
    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("Erro ao obter resposta da OpenAI:", error);
    res.status(500).send("Erro ao obter resposta.");
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
