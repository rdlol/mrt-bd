const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
require('dotenv').config();
const Eco = require("quick.eco");
client.eco = new Eco.Manager();
client.db = Eco.db; 
client.config = require("./config");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(process.env.TOKEN);
