const { MessageEmbed } = require("discord.js");
const fs = require('fs');
let visitor = require('../database/visitor.json');
let level = require('../database/level.json');
let place = require('../database/place.json');
let money = require('../database/money.json');

exports.execute = async (client, message, args) => {
  let totalviss = visitor[message.author.id].totalvis;
  let totalexp = level[message.author.id].exp;
  let totallvl = level[message.author.id].level;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let totalplace = place[message.author.id].pla;
  let totalmoney = money[message.author.id].balance;
  let comma = totalmoney.toLocaleString("en-US")

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
    name: "tx",
    aliases: [],
    usage: `tx`
}
