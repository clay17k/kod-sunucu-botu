const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yetkili Komutlar')
.setTimestamp(10000)
.addField(`• ${PREFIX}kabul **<sahipID>** **<botID>**`,`Bot başvuru onaylarsınz.`)
.addField(`• ${PREFIX}reddet **<sahipID>** **<sebep>**` ,`Bot başvuru reddersiniz.`)
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yy','yyardim','ykomutlar'], 
  permLevel: 3 
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
