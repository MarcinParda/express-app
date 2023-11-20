import express from 'express';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';
import dotenv from 'dotenv';
import db from './db.js';
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

app.delete('/clear-conversations', async (req, res) => {
  try {
    await db.query('DELETE FROM conversations');
    res.send('Table cleared successfully');
  } catch (err) {
    console.error('Error clearing table:', err);
    res.status(500).send('Error clearing table');
  }
});

app.get('/add-conversation', async (req, res) => {
  console.log(req.body);
  try {
    await db.query('INSERT INTO conversations (conversation_id) VALUES ($1)', [
      '69',
    ]);
    res.status(201).send('Conversation ID added');
  } catch (error) {
    res.status(500).send('Error adding conversation ID');
  }
  const { content } = await chatModel.call([
    new SystemMessage('Answer question in user prompt.'),
    new HumanMessage(req.body.question),
  ]);
  res.json({ reply: content });
});

app.get('/get-conversations', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT conversation_id FROM your_table_name'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching conversation IDs:', err);
    res.status(500).send('Error fetching conversation IDs');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
