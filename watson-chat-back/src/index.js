require("dotenv").config();
const express = require("express");
const AssistantV1 = require("ibm-watson/assistant/v1");
const bodyParser = require("body-parser");

const config = require("config.js");

const app = express();

// Futuramente separar em arquivos de configuração
const assistant = new AssistantV1({
  version: config.version,
  iam_apikey: config.iam_apikey,
  url: config.url
});

app.use(bodyParser.json());

// Liberei corsão mesmo... Sem tempo irmão
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Rota de teste
app.get("/", (req, res) => {
  res.send("Olá watson! Servidor rodando 100% ;)");
});

// Rota que recebe as mensagens
app.post("/message", (req, resp) => {
  assistant
    .message({
      workspace_id: config.workspace_id,
      input: { text: req.body.text },
      context: req.body.context
    })
    .then(res => {
      resp.json(res);
    })
    .catch(err => {
      resp.json(err);
    });
});

app.listen(3001);
