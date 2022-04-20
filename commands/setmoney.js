const { MessageEmbed } = require("discord.js");
const fs = require('fs');
let money = require('../database/money.json');

exports.execute = async (client, message, args) => {
  if (!client.config.admins.includes(message.author.id)) return;
  let user = message.mentions.users.first();
  if(!user) return message.reply(`you need to tag someone!`);
  if(!money[user.id]){
    money[user.id] = {
      balance: 20
    };
  }
  let amount = parseInt(args[1]);
  if (!amount) return message.reply("you need to add valid amount!");
  var totalbal = parseInt(money[user.id].balance);
  money[user.id].balance = totalbal + amount;
  const embed = new MessageEmbed()
    .setTitle(`Success Addmoney ${user.username}`)
    .addField(`Success`, `Success to add ${user} balance to ${amount}$`)
    .setColor("#E5E5E5")
  message.channel.send(embed);
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
}

exports.help = {
    name: "addmoney",
    aliases: ["addbalance"],
    usage: `addmoney @user <amount>`
}
