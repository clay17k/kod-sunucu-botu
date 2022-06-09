const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:cark:984164781739098223> Komutlar')
.setTimestamp(30000)
.addField(`• ${PREFIX}botekle **<botID> <prefix>**`,`Bot başvurursunuz.`)
.addField(`• ${PREFIX}istek **<istek-kod>`)
.addField(`• ${PREFIX}banner **Banner'ınızı Atar!**`)
.setFooter(`${message.author.username} Tarafından Kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setTimestamp()
message.channel.send(embed)
};

//MRT

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardim','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
