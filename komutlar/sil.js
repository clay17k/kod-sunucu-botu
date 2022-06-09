const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply
  ("**<a:iptal:982407033854754816> | Yetersiz yetki!**                                                                                                           https://cdn.discordapp.com/attachments/982690953041150044/982690957810106428/unknown.png")



  
  const sayi = args[0]

  if (!sayi) {
    return message.reply("<a:iptal:982407033854754816> **|** **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**")
  }

  if (sayi > 101) return message.reply("<a:iptal:982407033854754816> **|** **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**")


  let messages = await message.channel.messages.fetch({
    limit: sayi
  });

 await message.channel.bulkDelete(messages, true);
  
    message.reply(`**<:onay:982408447184211988> | ${sayi} Adet Mesaj Başarı İle Uzaya Fırlatıldı.**`).then(mr => mr.delete({timeout: 5000}))
  
};

exports.conf = {
  aliases: ["sil"]
};

exports.help = {
  name: 'temizle'
};