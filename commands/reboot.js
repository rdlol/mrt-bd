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
  if (!client.config.admins.includes(message.author.id)) return;
  message.channel.send("**Rebooting system..**").then(m => {
        setTimeout(() => {
            m.edit("**Wait a sec...**").then(ms => {
                setTimeout(() => {
                    ms.edit("**Done.**")
                }, 3000)
            })
        }, 3000);

    })
    
    .then(message => process.exit())
    .then(() => client.login(process.env.TOKEN))
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
    name: "reboot",
    aliases: ["rb"],
    usage: `reboot`
}
