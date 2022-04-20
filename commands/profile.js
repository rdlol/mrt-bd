const { MessageEmbed } = require("discord.js");
const fs = require('fs');
let visitor = require('../database/visitor.json');
let level = require('../database/level.json');
let place = require('../database/place.json');
let money = require('../database/money.json');

exports.execute = async (client, message, args) => {
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
      pla: "hongria"
    };
  }

  let totalviss = visitor[message.author.id].totalvis;
  let totalexp = level[message.author.id].exp;
  let totallvl = level[message.author.id].level;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let totalplace = place[message.author.id].pla;
  let totalmoney = money[message.author.id].balance;
  let comma = totalmoney.toLocaleString("en-US")
  let embed = new MessageEmbed()
    .setTitle(`${message.author.username} Profile`)
    .setColor('#E5E5E5')
    .addField('Visitor', `Visitor: ${totalviss}\nBuyer: ${totalbuyer}`)
    .addField(`Money`, `${comma}$`)
    .addField(`Level`, `Level: ${totallvl}\nXP: ${totalexp}/300`)
    .addField(`Place`, `Place: ${totalplace}`)
    .setTimestamp()
  message.channel.send(embed);
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
}

exports.help = {
    name: "profile",
    aliases: [],
    usage: `profile`
}
