const { MessageEmbed } = require('discord.js');
const fs = require('fs');
let visitor = require('../database/visitor.json');
let level = require('../database/level.json');
let place = require('../database/place.json');
let money = require('../database/money.json');

module.exports = async (client, message) => {
  if (message.content === "market") {
    message.reply(`yup, what?`);
  }
  if(!visitor[message.author.id]){
    visitor[message.author.id] = {
      totalvis: 0,
      totalbuyer: 0
    };
  }
  if(!level[message.author.id]){
    level[message.author.id] = {
      level: 1,
      exp: 0
    };
  }
  if(!place[message.author.id]){
    place[message.author.id] = {
      pla: "Hongria"
    };
  }
  if(!money[message.author.id]){
    money[message.author.id] = {
      balance: 20
    };
  }
  if(level[message.author.id].exp > 300) {
    let amount = Math.floor(Math.random() * 60) + 20;
    money[message.author.id].balance = money[message.author.id].balance + amount;
    level[message.author.id].level++;
    level[message.author.id].exp = 0;
    let embed = new MessageEmbed()
      .setTitle(`${message.author.username} Level Up`)
      .addField(`Rewards`, `+ ${amount} Money`)
      .setColor("#E5E5E5")
      .setTimestamp()
    message.channel.send(embed);
  }
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/place.json', JSON.stringify(place, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
    if (!message.guild || message.author.bot) return;
    if (message.channel.id === client.config.countChannel) require("../counter")(message, client);
    client.prefix = client.db.fetch(`prefix_${message.guild.id}`) ? client.db.fetch(`prefix_${message.guild.id}`) : client.config.prefix;
    if (!message.content.startsWith(client.prefix)) return;
    let args = message.content.slice(client.prefix.length).trim().split(" ");
    let commandName = args.shift().toLowerCase();
    let command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
    if (!command) return;
    client.ecoAddUser = message.author.id;
    command.execute(client, message, args);
};
