module.exports = (client) => {
    console.log(`${client.user.tag} Online!`);
  client.user.setActivity("+help");
};
