const { MessageEmbed } = require("discord.js");
const fs = require('fs');
let visitor = require('../database/visitor.json');
let level = require('../database/level.json');
let money = require('../database/money.json');
let place = require('../database/place.json');

exports.execute = async (client, message, args) => {
  if(!visitor[message.author.id]){
    visitor[message.author.id] = {
      totalvis: 0
    };
  }
  if(!level[message.author.id]){
    level[message.author.id] = {
      level: 1,
      exp: 0
    };
  }

  let totalviss = visitor[message.author.id].totalvis;
  let totalbalance = money[message.author.id].balance;
  let totalexp = level[message.author.id].exp;
  let placevis = place[message.author.id].pla;
  if(placevis === "Hongria"){
    let randomvis = Math.floor(Math.random() * 12) + 3;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 5) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 90) {
  level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "Netherlands"){
    let randomvis = Math.floor(Math.random() * 23) + 2;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 10) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 87) {
  level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "Indonesia"){
    let randomvis = Math.floor(Math.random() * 30) + 10;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 15) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 83) {
  level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "Japan"){
    let randomvis = Math.floor(Math.random() * 40) + 20;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 20) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 80) {
  level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "England"){
    let randomvis = Math.floor(Math.random() * 50) + 30;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 25) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 78) {                                                                                   level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });                                                                                                       } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {                              if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "UK"){
    let randomvis = Math.floor(Math.random() * 60) + 40;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 30) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 75) {                                                                                   level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });                                                                                                       } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {                              if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "France"){
    let randomvis = Math.floor(Math.random() * 70) + 50;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 35) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 73) {                                                                                   level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });                                                                                                       } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {                              if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "Belgium"){
    let randomvis = Math.floor(Math.random() * 75) + 55;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 40) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 69) {                                                                                   level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });                                                                                                       } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {                              if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
  if(placevis === "America"){
    let randomvis = Math.floor(Math.random() * 130) + 70;
    visitor[message.author.id].totalvis = totalviss + randomvis;
  let randomxp = Math.floor(Math.random() * 20) + 5;
  let randombal = Math.floor(Math.random() * 45) + 5;
  let randombuyer = Math.floor(Math.random() * 90) + 10;
  let totalbuyer = visitor[message.author.id].totalbuyer;
  let randombuy = Math.floor(Math.random() * 5) + 3;
  money[message.author.id].balance = totalbalance + randombal;
  if (randombuyer < 60) {                                                                                   level[message.author.id].exp = totalexp + randomxp;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });                                                                                                       } else {
  level[message.author.id].exp = totalexp + randomxp;
  visitor[message.author.id].totalbuyer = totalbuyer + randombuy;
  let embed = new MessageEmbed()
    .setTitle(`New Visitor`)
    .addField(`You get`, `+${randomvis} Visitor\n+ ${randombuy} Buyer\n+${randomxp} Xp\n+${randombal}$`)
    .setColor("#E5E5E5")
    .setTimestamp();
  message.channel.send(embed);
  fs.writeFile('./database/visitor.json', JSON.stringify(visitor, null, 2), (err) => {
      if (err) console.log(err);
  });
  fs.writeFile('./database/level.json', JSON.stringify(level, null, 2), (err) => {                              if (err) console.log(err);
  });
  fs.writeFile('./database/money.json', JSON.stringify(money, null, 2), (err) => {
      if (err) console.log(err);
  });
  }
  }
}

exports.help = {
    name: "visit",
    aliases: ["gain"],
    usage: `visit`
}
