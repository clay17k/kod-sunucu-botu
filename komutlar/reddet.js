const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')
exports.run = async(client, message, args) => {
  
		if(!message.member.roles.cache.has(client.botlist.yetkili)) return message.channel.send("<a:iptal:982407033854754816> **|** **Yeterli Yetkin Yok!**")
  if(message.channel.id !== client.botlist.kanalyetkili) return message.channel.send(`<a:iptal:982407033854754816> **|** <#984176769089273916> **Sadece Bu kanalda Kullanılabilir!**`).then(a => a.delete(7500))

let botid = args[0]
let sahip = args[1]
let sebep = args.slice(2).join(' ')
if(!botid) return message.channel.send("<a:iptal:982407033854754816> **|** **Bir Bot İd Gir!**").then(a => a.delete(7500))
if(!sahip) return message.channel.send("<a:iptal:982407033854754816> **|** **Sahip İd Giriniz.**").then(a => a.delete(7500))
if(!sebep) return message.channel.send("<a:iptal:982407033854754816> **|** **Sebep Giriniz!**").then(a => a.delete(7500))
message.delete()
  
message.channel.send("<a:successful:982734530274271262> **|** Başarıyla Botu Reddetınız.")
  
 message.guild.members.cache.get(sahip).send(`<a:iptal:982407033854754816> **|** <@${botid}> Adlı Bot  Reddildi!`)
  
  let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`<a:successful:982734530274271262> **|** <@${botid}> Adlı Bot **${sebep}** Nedeniyle Reddedildi!`)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "reddet"
  
}