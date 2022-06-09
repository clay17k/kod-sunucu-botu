const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')

exports.run = async(client, message, args) => {
	if(!message.member.roles.cache.has(client.botlist.yetkili)) return message.channel.send('<a:iptal:982407033854754816> **|** **Bot kabul etmek için `Yönetici` İznine sahip olmalısın!**').then(a => a.delete(7500))
  if(message.channel.id !== ('984176769089273916')) return message.channel.send(`<a:iptal:982407033854754816> **|** <#984176769089273916> **Sadece Bu kanalda Kullanılabilir!**`).then(a => a.delete(7500))

let botid = args[0]
let sahip = args[1]
if(!botid) return message.channel.send(`<a:iptal:982407033854754816> **|** Bir Kullanıcı İD girmelisin!**`).then(a => a.delete(7500))
if(!sahip) return message.channel.send(`<a:iptal:982407033854754816> **|** **Botun İD'sini Girin!**`).then(a => a.delete(7500))
.then(a => a.delete(7500))
  
message.channel.send(`<@${botid}> | <@${sahip}> **isimli bot başarıyla onaylandı!** <a:successful:982734530274271262>`)
    
  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
.setDescription(`<a:successful:982734530274271262> **|**  <@${sahip}> Adlı Bot Onaylandı Bot Sahip : <@${botid}>.`)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['onayla'],
	permlevel: 0
};

exports.help = {
	name: "kabulet",
  description : ""
}