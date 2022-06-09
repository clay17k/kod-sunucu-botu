const Discord = require('discord.js');

exports.run = function(client, message, args) {
let type = args.slice(0).join(' ');
if (type.length < 1) return message.channel.send(
 new Discord.MessageEmbed()
 .setFooter(`${message.author.username} Tarafından Kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
 .setTimestamp()
 .setColor("RANDOM")
.setDescription('<a:iptal:982407033854754816> **|** **.istek <istek-kod>**'));
message.react('<a:raptiye:984166392116969492>')


var embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`<:github:983830172140724364> **${message.author.tag}** <:github:983830172140724364>`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(type)
.setFooter(`${message.author.username} Tarafından Kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setTimestamp()
client.channels.cache.get('984158927006601217').send(embed2);

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['istekkod',"istek"],
  permLevel: 0 
};

exports.help = {
  name: 'istek-kod',
  description: 'Bot için istek-kod bildirirsiniz',
  usage: 'istek-kod <istek-kod>'
};