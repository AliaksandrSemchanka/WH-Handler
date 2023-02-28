const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

const TelegramBot = require('node-telegram-bot-api');

const API_KEY = '6255590542:AAGuf6H3YLF94gdStmr2XA9y2ELv2Ws5A90';
const chatId = '383803334';

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(4200, () => {
    console.log('Server started on port 3000');
});
