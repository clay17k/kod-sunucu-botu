const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = async(client, message, args, params) => {

  if(message.channel.id !== client.botlist.başvurukanal) return message.channel.send(`<a:iptal:982407033854754816> **|** <#${client.botlist.başvurukanal}> **Sadece bu kanalda kullanılabilir!**`).then(Message => Message.delete({timeout: 7500}))




let botid = args[0]
let prefix = args[1]
let onay = args[2]
if(!botid) return message.channel.send(`<a:iptal:982407033854754816> **|** Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}botekle <bot-id> \`\``).then(Message => Message.delete({timeout: 7500}))
if(!prefix) return message.channel.send(`<a:iptal:982407033854754816> **|** Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}botekle <bot-id> <bot-prefix>\`\``).then(Message => Message.delete({timeout: 7500}))
if(!onay) return message.channel.send(`<a:iptal:982381710350106634> **|** Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}botekle <bot-id> <bot-prefix> <DBL Onay - Evet/Hayır>\`\``).then(Message => Message.delete({timeout: 7500})).then(Message => Message.delete({timeout: 7500}))

let embed1 = new Discord.MessageEmbed()
message.delete()
message.reply(`<a:successful:982734530274271262> **|** **Botun başarıyla başvuruya alındı!**`).then(Message => Message.delete({timeout: 7500}))

  client.channels.cache.get(client.botlist.log).send(`<@&${client.botlist.yetkili}>`)
  message.delete()
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Başvuru")
  .setDescription(`**Bot Sahibi**:\n${message.author}\n**Bot ID**:\n${botid}\n**Bot Prefix**\n${prefix}\n**DBL Onay**:\n${onay}\n**Davet Linkleri**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`)
  client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "botekle"
}