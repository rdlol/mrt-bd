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
  let visitore = 3;
  let buyere = 13;
  let count = parseInt(args[1]);
  if(args[0] === "visitor"){
    if(totalviss < count) return;
    if(totalviss > count){
      let visitormin = count * visitore;
      money[message.author.id].balance = totalmoney + visitormin;
      visitor[message.author.id].totalvis = totalviss - count;
      const embedvis = new MessageEmbed()
	.setTitle(`${message.author.username}`)
	.setDescription(`${message.author.username} Sell ${count} visitor.\n${message.author.username} earn ${visitormin}`)
        .setColor("#FFFF00")
	.setTimestamp()
      message.channel.send(embedvis);
    }
    if(totalviss = count){
      let visitormin = count * visitore;
      money[message.author.id].balance = totalmoney + visitormin;
      visitor[message.author.id].totalvis = totalviss - count;
      const embedvis = new MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setDescription(`${message.author.username} Sell ${count} visitor.\n${message.author.username} earn ${visitormin}`)
        .setColor("#FFFF00")
        .setTimestamp()
      message.channel.send(embedvis);
    }
  }
  if(!args[0]) return message.channel.send(`Invalid type and count`);
  if(args[0] === "buyer"){
    if(totalbuyer < count) return;
    if(totalbuyer > count){
      let buyermin = count * buyere;
      money[message.author.id].balance = totalmoney + buyermin;
      visitor[message.author.id].totalbuyer = totalbuyer - count;
      const embedyer = new MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setDescription(`${message.author.username} Sell ${count} buyer.\n${message.author.username} earn ${buyermin}`)
        .setColor("#FFFF00")
        .setTimestamp()
      message.channel.send(embedyer);
    }
    if(totalbuyer = count){
      let buyermin = count * buyere;
      money[message.author.id].balance = totalmoney + buyermin;
      visitor[message.author.id].totalbuyer = totalbuyer - count;
      const embedyer = new MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setDescription(`${message.author.username} Sell ${count} buyer.\n${message.author.username} earn ${buyermin}`)
        .setColor("#FFFF00")
        .setTimestamp()
      message.channel.send(embedyer);
    }
  }
  if(args[0] === "all"){
    let buyermin = totalbuyer * buyere;
    let visitormin = totalviss * visitore;
    let plus = buyermin + visitormin;
    visitor[message.author.id].totalvis = 0;
    visitor[message.author.id].totalbuyer = 0;
    const allembed = new MessageEmbed()
      .setTitle(`${message.author.username}`)
      .addField(`Sell All`, `Visitor: ${totalviss}\nBuyer: ${totalbuyer}\nEarn: ${plus}`)
      .setTimestamp()
      .setColor("#FFFF00")
      .setFooter(`${message.author.username} Sell All`)
    message.channel.send(allembed);
    money[message.author.id].balance = money[message.author.id].balance + plus;
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
}

exports.help = {
    name: "sell",
    aliases: [],
    usage: `sell <type> <count>`
}
