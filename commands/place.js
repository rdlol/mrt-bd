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
  let pnet = 150;
  let pidn = 250;
  let pjpn = 340;
  let peng = 630;
  let puk = 1100;
  let pfra = 1300;
  let pblg = 1550;
  let pamc = 2000;
  if(!args[0]){
    message.reply("bruh, +place buy <place> - to buy\n+place list - to see list");
  };
  if(args[0] === "list"){
    const embedl = new MessageEmbed()
      .setTitle(`List Place`)
      .setColor("#E5E5E5")
      .addField(`Place`, `**Hongria** 10% chance to get buyer\nPrice: Free\n\n**Netherlands** 13% chance to get buyer\nPrice: 150$\n\n**Indonesia** 17% chance to get buyer\nPrice: 250$\n\n**Japan** 20% chance to get buyer\nPrice: 340$\n\n**England** 22% chance to get buyer\nPrice: 630$\n\n**UK** 25% chance to get buyer\nPrice: 1,100$\n\n**France** 27% chance to get buyer\nPrice: 1,300$\n\n**Belgium** 31% chance to get buyer\nPrice: 1,550$\n\n**America** 40% chance to get buyer\nPrice: 2000$`)
      .setTimestamp()
      .setDescription(`Don't buy the same place if you don't\nwant your money to be wasted`)
      .setFooter(`See Description ⚠️`)
    message.channel.send(embedl);
  }
  if(args[0] === "buy"){
    if(!args[1]) return message.reply(`invalid place`);
    if(args[1] === "Netherlands"){
      if(totalmoney < pnet) return message.reply(`can't buy this place`);
      if(totalmoney > pnet){
        place[message.author.id].pla = "Netherlands";
        money[message.author.id].balance = totalmoney - pnet;
	let moneynow = totalmoney.toLocaleString("en-US")
	const embed = new MessageEmbed()
	  .setTitle(`${message.author.username} Success`)
	  .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
	  .setColor("#00FF00")
	  .setTimestamp()
	message.channel.send(embed);
      }
    }
    if(args[1] === "Indonesia"){
      if(totalmoney < pidn) return message.reply(`can't buy this place`);
      if(totalmoney > pidn){
        place[message.author.id].pla = "Indonesia";
        money[message.author.id].balance = totalmoney - pidn;
	let moneynow = totalmoney.toLocaleString("en-US")
	const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
    if(args[1] === "Japan"){
      if(totalmoney < pjpn) return message.reply(`can't buy this place`);
      if(totalmoney > pjpn){
        place[message.author.id].pla = "Japan";
        money[message.author.id].balance = totalmoney - pjpn;
	let moneynow = totalmoney.toLocaleString("en-US")
	const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
    if(args[1] === "England"){
      if(totalmoney < peng) return message.reply(`can't buy this place`);
      if(totalmoney > peng){
        place[message.author.id].pla = "England";
        money[message.author.id].balance = totalmoney - peng;
	let moneynow = totalmoney.toLocaleString("en-US")
	const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
    if(args[1] === "UK"){
      if(totalmoney < puk) return message.reply(`can't buy this place`);
      if(totalmoney > puk){
        place[message.author.id].pla = "UK";
        money[message.author.id].balance = totalmoney - puk;
        let moneynow = totalmoney.toLocaleString("en-US")
        const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
    if(args[1] === "France"){
      if(totalmoney < pfra) return message.reply(`can't buy this place`);
      if(totalmoney > pfra){
        place[message.author.id].pla = "France";
        money[message.author.id].balance = totalmoney - pfra;
	let moneynow = totalmoney.toLocaleString("en-US")
	const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
    if(args[1] === "Belgium"){
      if(totalmoney < pblg) return message.reply(`can't buy this place`);
      if(totalmoney > pblg){
        place[message.author.id].pla = "Belgium";
        money[message.author.id].balance = totalmoney - pblg;
	let moneynow = totalmoney.toLocaleString("en-US")
	const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
    if(args[1] === "America"){
      if(totalmoney < pamc) return message.reply(`can't buy this place`);
      if(totalmoney > pamc){
        place[message.author.id].pla = "America";
        money[message.author.id].balance = totalmoney - pamc;
	let moneynow = totalmoney.toLocaleString("en-US")
        const embed = new MessageEmbed()
          .setTitle(`${message.author.username} Success`)
          .addField(`Success buy ${args[1]}\nNow your place it's ${args[1]}`, `Now your money is ${moneynow}`)
          .setColor("#00FF00")
          .setTimestamp()
        message.channel.send(embed);
      }
    }
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
    name: "place",
    aliases: [],
    usage: `place`
}
