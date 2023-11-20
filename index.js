import express from 'express';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';
import dotenv from 'dotenv';
dotenv.config();

const chatModel = new ChatOpenAI({ modelName: 'gpt-4' });

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/ownapi', async (req, res) => {
  console.log(req.body);
  const { content } = await chatModel.call([
    new SystemMessage('Answer question in user prompt.'),
    new HumanMessage(req.body.question),
  ]);
  res.json({ reply: content });
});

app.post('/ownapi', async (req, res) => {
  console.log(req.body);
  const { content } = await chatModel.call([
    new SystemMessage('Answer question in user prompt.'),
    new HumanMessage(req.body.question),
  ]);
  res.json({ reply: content });
});

app.get('/clear/ownapipro', async (req, res) => {
  console.log(req.body);
  const { content } = await chatModel.call([
    new SystemMessage('Answer question in user prompt.'),
    new HumanMessage(req.body.question),
  ]);
  res.json({ reply: content });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
