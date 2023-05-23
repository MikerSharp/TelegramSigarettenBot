const TelegramApi = require("node-telegram-bot-api");

const token = "6252864986:AAEtgVwWhKNahWkioMu9EgQZFxxSdt81Rn8";

const bot = new TelegramApi(token, {polling: true});


const mainKeyboard = {
    "reply_markup": {
        "keyboard": [["Перекур"],   ["Новая банка","Новые гильзы"]]
        }
    };

bot.on("message", msg=>{
    

    bot.sendMessage(msg.chat.id, msg.text, mainKeyboard);
});