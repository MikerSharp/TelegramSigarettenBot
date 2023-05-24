require('dotenv').config();
const AdminId = process.env.Admin_Chat_Id;
const token = process.env.Bot_token;

const TelegramApi = require("node-telegram-bot-api");
const bot = new TelegramApi(token, {polling: true});

const mainKeyboard = {
    "reply_markup": {
        "keyboard": [["Перекур"],   ["Новая банка","Новые гильзы"]]
        }
    };

bot.on("message", msg=>{
    console.log(isAdmin(msg.chat.id));

    bot.sendMessage(msg.chat.id, "Hello", mainKeyboard);
});

function isAdmin(chatId){
    if(AdminId == chatId) return true;
    else return false;
}