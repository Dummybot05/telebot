const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELETOKEN;
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Hi ${msg.from.first_name}, Welcome to FM Bot!\nEnter Episode number you want watch\nExample: 5`);
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Just Enter the Episode Number of Insta Empire");
});

function isNumber(value) {
  return !isNaN(value) && value.trim() !== "";
}

dict_data = {
    1: "https://freeterabox.com/s/1CbQZnj0_AIq-lQTHrRRJUA",
    2: "https://freeterabox.com/s/1OeHlNmu23vTyTn-hVVYMnQ",
    3: "https://freeterabox.com/s/1XXm8qgIqZPTGeiT5yGWSfA",
    4: "https://freeterabox.com/s/1jt-kgxfzV9-drXv9_oXPsQ",
    5: "https://freeterabox.com/s/1oS2BpRQi6Qp8HVqLvqABEw",
    6: "https://freeterabox.com/s/1HaFbhFtsTO12O3J84nbC5g",
    7: "https://freeterabox.com/s/1nuw6cC1Qy1bYM8xmq9txBA",
    8: "https://freeterabox.com/s/1wu86KFn4W79Fj6L2Kniurw",
    9: "https://freeterabox.com/s/1WZEFFBH8g9E6JbAgIrMbuA",
    10: "https://freeterabox.com/s/1EjliDlYLIsenwSoCyZzdvA",
    11: "https://freeterabox.com/s/1QbPIXeucuhDifikTYDQLpg",
    12: "https://freeterabox.com/s/1QYGeb_kGrIEvV-O0br6FXA",
    13: "https://freeterabox.com/s/10GfWWlq-llLYO_eel9tBHw",
    14: "https://freeterabox.com/s/1GErOegG7cwGZr5y68ZYQaw",
    15: "https://freeterabox.com/s/1gtxsjVQiWSgVDHie5GNCXA",
    16: "https://freeterabox.com/s/1I4gZ8Mkgp8dYkUG29_hfOg",
    17: "https://freeterabox.com/s/1gW3vueWD964slPa1mTjSfQ",
    18: "https://freeterabox.com/s/1bj5kZs0epj7NbJ4o2HSuuA",
    19: "https://freeterabox.com/s/1qyBCM0IJ1ENESQCu0i_qLg",
    20: "https://freeterabox.com/s/19ddd_-9P1yxeGYjYJEU7Uw",
    21: "https://freeterabox.com/s/1UvuvSxs40iTgr2X5RQh21A",
    22: "https://freeterabox.com/s/1Jzu0-J3X2tumwjDX2yDYLw",
    23: "https://freeterabox.com/s/1PM8i0nOBnNNMo8EbuQWkMQ",
    24: "https://freeterabox.com/s/1wSnYJSCvQfis3meZeLffgw",
    25: "https://freeterabox.com/s/1Y0NwCjHu5CI-Y1slDzQ7jQ",
    26: "https://freeterabox.com/s/1Fsi0Ga1rDW54v32Z4oABlw",
    27: "https://freeterabox.com/s/1LIg0PrTxfun7u-58v0WRhg",
    28: "https://freeterabox.com/s/1n9moqzN4DnvcxtcieX_uxg",
    29: "https://freeterabox.com/s/18ujfibwiXL8BRdSRPF0FzQ",
    30: "https://freeterabox.com/s/1K25oNxCSEiWjVC6U-P8Iuw",
    31: "https://freeterabox.com/s/1SzZ6x4QwdXwJRKYCmNbrRA",
    32: "https://freeterabox.com/s/1P1OYcu--7z2sGcIe7fKEEQ",
    33: "https://freeterabox.com/s/1IJk9Qat7qkOPqTSR_a7wJA",
    34: "https://freeterabox.com/s/1z-BGWgVhjA2i_XH6r9SpWA",
    35: "https://freeterabox.com/s/1H8XfhbjwepQTLBzyiA670w",
    36: "https://freeterabox.com/s/1PamF0kJC1jyqSHKkBMYGnw",
    37: "https://freeterabox.com/s/1j5_fKbtalxi-r3L2Y1emvw",
    38: "https://freeterabox.com/s/16YmmEAz6kzN_WzBjY_F3TQ",
    39: "https://freeterabox.com/s/1kH0B1bV4Ts-22FLTYFKNQg",
    40: "https://freeterabox.com/s/1ztoyyx13NV-IP3pp4NgWBw",
    41: "https://freeterabox.com/s/1V7bx0uvoqXy4SFTaxaoUdQ",
    42: "https://freeterabox.com/s/10HxLCoG1xuFaouFjLhVNlQ",
    43: "https://freeterabox.com/s/1_nMmKeOv_sHWNcVWlJLTng",
    44: "https://freeterabox.com/s/18OnTK-3TO_X6xQn6lOdcWQ",
    45: "https://freeterabox.com/s/1kUNaC3hqERjAATCfX8t2sA",
    46: "https://freeterabox.com/s/1dZQMB_9rXIPsdbkvUAaCBQ",
    47: "https://freeterabox.com/s/1SWQYFp3A9QanrcTOYLUS9w",
    48: "https://freeterabox.com/s/1uHnhl4UZuPWeKTM2MFhtjw",
    49: "https://freeterabox.com/s/1uKD7NUJ-ArDjjhbO_vNhfQ",
    50: "https://freeterabox.com/s/1PRN5fv31G0s1_nnQswdMnw",
    51: "https://freeterabox.com/s/1AJ1UY8dKibujUO4i16p8-A",
    52: "https://freeterabox.com/s/1zLfmw61ynaHDJjZx3ADaaQ",
    53: "https://freeterabox.com/s/1MVgTbYiYl5QkrFXMXfVb0Q",
    54: "https://freeterabox.com/s/1PjR34WKBfnBYxcY0SpBA9g",
    55: "https://freeterabox.com/s/1rSWLVQ3NRlOEe8sw0VKt2w",
    56: "https://freeterabox.com/s/1hZT_UzvbF4z-G5R5HsUanQ",
    57: "https://freeterabox.com/s/1CUpmGCUAiS9-vkkPPi8h5w",
    58: "https://freeterabox.com/s/1kxlicjecBHR_wNTIjwkvAw",
    59: "https://freeterabox.com/s/1m-A_D4b4Cj1WelXmKeIMWw",
    60: "https://freeterabox.com/s/1-g0BQP8AqB3CSLlt-sjDcw",
    61: "https://freeterabox.com/s/1uqbKDF9WS0VSJQX-6Q7gjQ",
    62: "https://freeterabox.com/s/1Umkb2ZuJtVZ8GuG_krIO9g",
    63: "https://freeterabox.com/s/1LTdJ20fnWSQzoQj9XbFbOA",
    64: "https://freeterabox.com/s/1KO7kLfENUdhgvpguOnsMRg",
    65: "https://freeterabox.com/s/1YhNXNx0J4gJSTOuwczFhrw",
    66: "https://freeterabox.com/s/1ZQLdS1bjGRXSkUAQBVT2GQ",
    67: "https://freeterabox.com/s/1qmqNxZJ1Ep9es3j-cuNt7A",
    68: "https://freeterabox.com/s/1Y7E2Wz2eF2mMJN_ACSDmXg",
    69: "https://freeterabox.com/s/16BNTko6SspQucBuShiLnbg",
    70: "https://freeterabox.com/s/1-iuqpmQrMNIhhb8ZNhknQw",
    71: "https://freeterabox.com/s/1v6XfXzlg1-0R_TFVIS7c8A",
    72: "https://freeterabox.com/s/1sFWCOMpuqxZn2Xbl68q3ZA",
    73: "https://freeterabox.com/s/1CenX7bChSwlWjcD29zeQaw",
    74: "https://freeterabox.com/s/1DHlzSz9kxTzG2qsc6IUowQ",
    75: "https://freeterabox.com/s/1CsbWvPmJMrE9Sa769IRmgg",
    76: "https://freeterabox.com/s/10giSofE4dCUaGSSrCjwVUQ",
    77: "https://freeterabox.com/s/174Oyy7REkiY1_pDVMpKrsw",
    78: "https://freeterabox.com/s/14yDxKjkJ1Pg03zP-kjLSQQ",
    79: "https://freeterabox.com/s/1Aiezhb2LrDmISbTw4nY33Q",
    80: "https://freeterabox.com/s/1nJTFDxgOsZT4PNtrJV80EA",
    81: "https://freeterabox.com/s/180paC4Bppj9N7uQulCx00A",
    82: "https://freeterabox.com/s/15_CnH8toiptmQ-ldCPfUCg",
    83: "https://freeterabox.com/s/1fB6c6UtVm1yimi60Js5ydg",
    84: "https://freeterabox.com/s/137F696imBmp2fZiEPAvYeQ",
    85: "https://freeterabox.com/s/1VQRTmb7BYHlEPb6Gs5AuXw",
    86: "https://freeterabox.com/s/1riMqoEtW9yJlK5im2Ehuig",
    87: "https://freeterabox.com/s/1UV6mzErv2x37YPmylHsjSg",
    88: "https://freeterabox.com/s/170NBKDZjkLkF0mdNQHcknw",
    89: "https://freeterabox.com/s/1jpEEAattcYFnk8pwdwBJGg",
    90: "https://freeterabox.com/s/1figmg2RT9_KzpiawIfdYXg",
    91: "https://freeterabox.com/s/1CQzqEHJ8_7h-pQ8rzeC0jA",
    92: "https://freeterabox.com/s/1X2xBPjdzyhQ_heqGZ5Qbqw",
    93: "https://freeterabox.com/s/15_murpEXX1j41To2q0O30w",
    94: "https://freeterabox.com/s/1aeU5lJuvh3rf5I6CFnRylw",
    95: "https://freeterabox.com/s/1S-kYTmeAckliOShyjdPLEA",
    96: "https://freeterabox.com/s/1SM9XWuFRxyhYxDZADHS-5g",
    97: "https://freeterabox.com/s/1DSMqfwzudHo5rATIH5Q-Fg",
    98: "https://freeterabox.com/s/1JtReIz4cBFQk_CcZbLmXfQ",
    99: "https://freeterabox.com/s/1JEbwtNw_7GgjjG1V2ljmVw",
    100: "https://freeterabox.com/s/1a6HoMG53nYOlXleE-vlpTw",
    101: "https://test.com"
}


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text && !text.startsWith('/')) {
    if (isNumber(text)) {
      if (dict_data[text] == undefined) {
         bot.sendMessage(chatId, `Episode ${text} not uploaded yet \nAsk Admin`);
      } else {
         bot.sendMessage(chatId, `Insta Empire Episode ${text} : \n${dict_data[text]}`);
      }
    } else {
      bot.sendMessage(chatId, 'Funny prompt 😂, But it not valid prompt');
    }
  }
});
