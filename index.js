require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELETOKEN;
const bot = new TelegramBot(token, { polling: true });
const dict_data = require('./file.js');
const express = require('express');
const PORT = process.env.PORT || 3000;
const server = express()

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Hi ${msg.from.first_name}, Welcome to FM Bot!\nEnter Episode number you want watch\nExample: 5`);
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Just Enter the Episode Number of Insta Empire");
});

bot.onText(/\/about/, (msg) => {
  bot.sendMessage(msg.chat.id, "Get 5 Episodes from which you Entered!!");
})

function isNumber(value) {
  return !isNaN(value) && value.trim() !== "";
}

bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text && !text.startsWith('/')) {
    if (isNumber(text)) {
      if (dict_data[text] == undefined) {
        bot.sendMessage(chatId, `Episode ${text} not uploaded yet \nAsk Admin`);
      } else {
        let u = parseInt(text);
        const options = {
           reply_markup: {
             inline_keyboard: [
                 [
                  { text: `Episode – ${u}`, url: `${dict_data[u]}` },
                  { text: `Episode – ${u+1}`, url: `${dict_data[u+1]}` },
                 ],
                 [
                  { text: `Episode – ${u+2}`, url: `${dict_data[u+2]}` },
                  { text: `Episode – ${u+3}`, url: `${dict_data[u+3]}` },
                 ],
                 [
                  { text: `Episode – ${u+4}`, url: `${dict_data[u+4]}` },
                  { text: `Say Thanks`, url: `https://buymeacoffee.com/fm0505` },
                 ],
             ],
           },
        };
        bot.sendMessage(chatId, 'Please choose Insta Empire ep:', options);
     }
   } else {
      bot.sendMessage(chatId, 'Funny prompt 😂, But it not valid prompt');
   }
  }
});

server.get('/', (req, res) => {
    res.send('Hello, HTTP world!\n');
});

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

