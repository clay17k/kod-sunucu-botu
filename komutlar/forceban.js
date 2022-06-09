const Discord = require("discord.js"); //Dcs Ekibi
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("\n<a:iptal:982407033854754816> **|** **Yetersiz Yetki!**\n<a:iptal:982407033854754816> **|** **Aşağıdaki Yetkiye Sahip Olman Gerekiyor!**\nhttps://cdn.discordapp.com/attachments/982690953041150044/983857216857706566/unknown.png");
  let dcs_user = args[0];
  if (isNaN(dcs_user)) return message.reply("<a:iptal:982407033854754816> **|** **Doğru ID Girmelisiniz!**");
  await message.guild.members.ban(dcs_user);
  return message.reply(`<a:hype:982694737368735784> **|** <@${dcs_user}>\ (**${dcs_user}**)\ **Sunucudan Banlandı!**`);
}; //Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["idban"]
};

exports.help = {
  name: "forceban",
  description: "ID ile Sunucudan Birisini Banlar!",
  usage: "forceban <kullanıcı-id>"
};