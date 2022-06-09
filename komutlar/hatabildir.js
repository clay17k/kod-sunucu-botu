const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let hata = args.slice(0).join(" ");
  if (!hata) {
    const hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Hata Belirtmediniz!`);
    return message.channel.send(hata);
  }
  const embed = new Discord.MessageEmbed()
    .setTitle(`Hata Bildirimi`)
    .setColor("BLUE")
    .setDescription(
      `**Hatayı Bildiren Kişi:** <@${message.author.id}> \n**Bildirdiği Hata** \`${hata}\``
    );
client.channels.cache.get('984518783253237760').send(embed)

  const başarılı = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<a:successful:982734530274271262> **|** **Hata Bildiriminiz Başarıyla Gönderildi!**`);
  message.channel.send(başarılı);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hatabildir"],
  permLevel: 0
};
exports.help = {
  name: "hata-bildir",
  description: "Bottaki Hataları Bildirmeye Yarar.",
  usage: "hata-bildir"
};