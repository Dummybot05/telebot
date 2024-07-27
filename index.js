require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELETOKEN;
const bot = new TelegramBot(token, { polling: true });
const fs = require('fs');

var dict_data = 'Insta_Empire';

function roll(jsonss) {
fs.readFile(jsonss+'.json', 'utf8', (err, data) => {
  try {
    const jsonData = JSON.parse(data);
    dict_data = jsonData;
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});
}

function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var currentStory = 'Insta Empire';
const texts = [
   'Please choose the story:\n',
   '/Insta_Empire',
   '/Insta_Millionaire',
   '/Chosen_by_fate_Reject_by_alpha',
   '/Rothmans_Secret',
   '/Rekindled_Heartache',
   '/Saving_Nora',
   '/My_Vampire_System'
];

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const text = `Hi *${capFirst(msg.from.first_name)}* *${capFirst(msg.from.last_name)}*,\n_Welcome to *FMBOT*_ \n_To choose story click /stories_`;
  const mode = { "parse_mode": "MarkdownV2" };
  bot.sendMessage(chatId, text, mode);
});

bot.onText(/\/stories/, (msg) => {
  const chatId = msg.chat.id;
  const formattedText = texts.join('\n\n');
  bot.sendMessage(chatId, formattedText);
});

bot.onText(/\/shows/, (msg) => {
  const chatId = msg.chat.id;
  const texts = [
   '_*Insta Empire*\n1 to 1682 • Final EP_',
   '_*Insta Millionaire*\n1 to 1384 • Final EP_',
   '_*Chosen by fate Reject by alpha*\n1 to 430 • Final EP_',
   '_*Rothmans Secret*\n1 to 500_',
   '_*Rekindled Heartache*\n1 to 500_',
   '_*Saving Nora*\n1 to 500_',
   '_*My Vampire System*\n1 to 500_'
  ];
  const formattedText = texts.join('\n\n');
  const mode = { "parse_mode": "MarkdownV2" };
  bot.sendMessage(chatId, formattedText, mode);
});

bot.onText(/\/(\w+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const command = match[1];
  const mode = { "parse_mode": "MarkdownV2" };
  if (texts.includes('/'+command)) {
     var rep = command.replaceAll('_', ' ');
     currentStory = rep;
     roll(command);
     var text = '*Great,*\n_You have Chosen_\n`*'+rep+'*`\n_Enter the Episode number you want to watch_';
     bot.sendMessage(chatId, text, mode);
  }
//   bot.sendMessage(chatId, '_Oh Smart 😎, Trying to hack me, impossible_', mode);
});

bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const mode = { "parse_mode": "MarkdownV2" };
  const textAuth = /^\d+$/.test(text);
  if (textAuth) {
      if (dict_data[text] == undefined) {
        bot.sendMessage(chatId, `_Episode ${text} not uploaded yet \nAsk Admin_`, mode);
      } else {
        let u = parseInt(text);
        const options = {
           parse_mode: "MarkdownV2",
           reply_markup: {
             inline_keyboard: [
                 [
                  { text: `EP ${u}`, url: `${dict_data[u]}` },
                  { text: `EP ${u+1}`, url: `${dict_data[u+1]}` },
                 ],
                 [
                  { text: `EP ${u+2}`, url: `${dict_data[u+2]}` },
                  { text: `EP ${u+3}`, url: `${dict_data[u+3]}` },
                 ],
                 [
                  { text: `EP ${u+4}`, url: `${dict_data[u+4]}` },
                  { text: `EP ${u+5}`, url: `${dict_data[u+5]}` },
                 ],
                 [
                  { text: `EP ${u+6}`, url: `${dict_data[u+6]}` },
                  { text: `EP ${u+7}`, url: `${dict_data[u+7]}` },
                 ],
                 [
                  { text: `EP ${u+8}`, url: `${dict_data[u+8]}` },
                  { text: `EP ${u+9}`, url: `${dict_data[u+9]}` },
                 ],
                 [
                  { text: `BuyMeACoffee`, url: `https://buymeacoffee.com/fm0505` },
                 ],
             ],
           },
        };
        bot.sendMessage(chatId, `*${currentStory} Episodes*`, options);
      }
  }
});
