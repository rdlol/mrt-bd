const { MessageEmbed } = require("discord.js");
const fs = require('fs');
let visitor = require('../database/visitor.json');
let xp = require('../database/level.json');
let place = require('../database/place.json');
let money = require('../database/money.json');

exports.execute = async (client, message, args) => {
  let totalviss = visitor[message.author.id].totalvis;
  let totalexp = xp[message.author.id].exp;
  let totallvl = xp[message.author.id].level;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let totalplace = place[message.author.id].pla;
  let totalmoney = money[message.author.id].balance;
  let comma = totalmoney.toLocaleString("en-US")
  if(args[0] === 'level') {
  let board = [];
  for(let key of Object.keys(xp)){
    let value = Object.assign({user: client.users.get(key)}, xp[key]);
    board.push(value);
  }
  
  board = board.filter(x => x.user);
  board = board.sort((a,b) => b.xp-a.xp).splice(0, 10);
  top = board.map((x, i) => `[${i+1}]  ➢ #${x.user.username}\n     Level: ${x.level.toLocaleString()} XP: ${x.xp.toLocaleString()}`).join('\n\n');
  let embed = new RichEmbed() 
  .setColor(color) 
  .setDescription(`**🆙 | Top 10 Global XP\n\n**\`\`\`📋 Rank | Name\n\n${top}\`\`\``);
  
  return message.channel.send(embed);
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
    name: "leaderboard",
    aliases: ["lb"],
    usage: `leaderboard <type>`
}
