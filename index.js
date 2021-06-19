const Discord = require("discord.js");
const Client = new Discord.Client();
const config = require("./config.json");
const prefix = "&"
const nuke = require("discord-channel-nuke");
const moment = require('moment');
const AntiSpam = require('discord-anti-spam');
const { measureMemory } = require("vm");


Client.on("message", (message) => {
    const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const discordgg = new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Pub effectué par' + `${user}`  + 'dans le salon'   + message.channel )
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    var id = message.author.id
    if (message.content.startsWith("discord.gg/")) {
      message.delete();
      message.reply("*Vous n'avez pas l'autorisation d'envoyer des liens ici*")
      channel.send(discordgg)
    }
});
Client.on("message", (message) => {
    const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const https = new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Pub effectué par' + `${user}`  + 'dans le salon'   + message.channel)
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    var id = message.author.id
    if (message.content.startsWith("https://")) {
      message.delete();
      message.reply("*Vous n'avez pas l'autorisation d'envoyer des liens ici*")
      channel.send(https)
    }
});



Client.on('message', message => {
    const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const ban= new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('ban effectué par' + `${user}`  + 'dans le salon'   + message.channel + "pour l'utlisateur" + message.mentions.users.first())
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('&ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'Raison Facultatif',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply("L'utilisateur ${user} à bien été Banni !");
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Tu n as pas la permission de bannir un membre !');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply("L'utilisateur mentionner n est pas sur le Serveur !");
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply("Tu n as pas mentionner l'utilisateur !");
        channel.send(ban)
      }
    }
  });

  Client.on("message", message => {
const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const clear = new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Message clear par' + `${user}`  + 'dans le salon'   + message.channel)
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      if (message.content.startsWith(prefix + "clear")) {
        let args = message.content.split(" ");
  
        if (args[1] == undefined) {
          message.reply("*Nombre de message non ou mal défini !!*.");
        }
        else {
          let number = parseInt(args[1]);
  
          if (isNaN(number)) {
            message.reply("*Nombre de message non ou mal défini !!*.");
          }
          else {
            message.channel.bulkDelete(number).then(messages => {
              console.log("Supression de " + messages.size + " messages réussi !");
              message.reply("Supression de " + messages.size + "message réussis")
            }).catch(err => {
              console.log("Erreur de clear : " + err);
              message.reply("Supression de " + messages.size + "message réussis")
              channel.send(clear)
            });
          }
        }
      }
    }
});

Client.on('message', message =>{
    if (message.content.startsWith(prefix + "help")) {
      let aideembed = new Discord.MessageEmbed()
      //.setThumbnail(sicon)
      .setTitle(" 🌍・Géneral")
      .setColor('#ff0000')
      .setDescription(`\`Prefix:&\``, `*Prefix du Bot sur le serveur*`)
      .addField(`\`&support\``, `*affiche un lien pour le support du bot*`)
      .addField(`\`&help\``, `*Voir les commandes du bot génral*`)
      .addField(`\`&ping\``, `*Voir le ping du bot*`)
      .addField(`\`&serveur-info\``, `*Vois mes infos sur le serveur*`)
      .addField(`\`&user-info\``, `*Vois les infos sur soi ou sur une personne*`)
      .addField(`\`&avatar\``, `*Voir son avatar*`)
      
      message.channel.send(aideembed);
  
      return;
 }});


 Client.on('message', message =>{
    if (message.content.startsWith(prefix + "help")) {
      let aideembed = new Discord.MessageEmbed()
      //.setThumbnail(sicon)
      .setTitle(" 🔨・Modération")
      .setColor('#ff0000')
      .setDescription(`\`Prefix:&\``, `*Prefix du Bot sur le serveur*`)
      .addField(`\`&clear\``, `*Clear un nombre de message entre 1 et 99*`)
      .addField(`\`&renew\``, `*recréer le chanel demandé*`)
      .addField(`\`&lock\``, `*lock le salon demandé*`)
      .addField(`\`&unlock\``, `*unlock le salon demandé*`)
      .addField(`\`&kick\``, `*kick l'utlisateur mentionné'*`)
      .addField(`\`&ban\``, `*ban l'utlisateur mentionné*`)
      
      
      message.channel.send(aideembed);
  
      return;
    }
});


Client.on('message', message =>{
    if (message.content.startsWith(prefix + "help")) {
      let aideembed = new Discord.MessageEmbed()
      //.setThumbnail(sicon)
      .setTitle(" ⚒・Administration")
      .setColor('#ff0000')
      .setDescription(`\`Prefix:&\``, `*Prefix du Bot sur le serveur*`)
      .addField(`\`&antilien h24\``, `*empêche les membres de mettre des lien sur le serveur*`)
      message.channel.send(aideembed);
  
      return;
    }
});

Client.on('message', message => {
    const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const kick= new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Kick effectué par' + `${user}`  + 'dans le salon'   + message.channel + "pour l'utlisateur" + message.mentions.users.first())
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('&kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Raison facultatif').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`L'utilisateur ${user} à bien été kick`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Tu n as pas la permission de kick des membres');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply("L utilistateur n'est pas sur le serveur !");
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply("Tu as oublié de mentionner l'utilisateur !");
        channel.send(kick)
      }
    }
  });

  Client.on("message", message => {
    const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const lock = new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Salon lock par' + `${user}`  + 'dans le salon'   + message.channel)
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    if (message.content.toLowerCase() === prefix + "lock") {
  
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("tu manque de la perm \"MANAGE_CHANNELS\" pour utliser la commande de lockdown!");
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: false, SEND_MESSAGES: false });
      message.reply("*Salon lock*"); // you can write content as you want to send nuked channel.
      channel.send(lock)
    }
  });

  Client.on('message', message => {
    if (message.content === '&ping') {  
      message.reply(`🏓 Latency : ${Date.now() - message.createdTimestamp}ms. API : ${Math.round(Client.ws.ping)}ms`);
    }
  });

  Client.on("ready", async () => {
    Client.user.setPresence({
      status: 'online',
      activity: {
        name: `🍭・Candy/&help`,
        type: 'STREAMING',
        url: 'https://twitch.tv/lebouseuh'
      }
    });
  });

  Client.on('message', message =>{
    if (message.content.startsWith(prefix + "reload")) {
    message.channel.send("🕙 | Reload en cours ...")
        message.edit("🕙 | Reload en cours ...")
        Client.destroy();
        Client.login(config.token);
        message.reply("Reload bien effectué")
  } 
  });    
  
  Client.on("message", message => {
    const user= message.author
    const channel = Client.channels.cache.get('853374742156017695')
    const renew = new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Salon renew par' + `${user}`  + 'dans le salon'   + message.channel)
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    if (message.content.toLowerCase() === prefix + "renew") {
  
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("tu manque de la perm \"MANAGE_CHANNELS\" pour utliser la commande de renew!");
  
      nuke(message, "*Salon recréer*"); // you can write content as you want to send nuked channel.
      channel.send(renew)
    }
  });

  Client.on('message', message =>{
    if (message.content.startsWith(prefix + "serveur-info")) {
      const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .setColor('#ff0000')
        .addField("**Owner du serveur 👑 :**", `${message.guild.owner}`, true)
        .addField("**Membres Du serveur👨:**", `${message.guild.memberCount}`, true)
        .addField("**Total de Bots 🤖**", message.guild.members.cache.filter(member => member.user.bot).size, true)
        .addField("**Total Channels ⚒ **", message.guild.channels.cache.size, true)
        .addField("**Total Salon Texte 💭**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
        .addField("**Total Salon Vocal 🎧**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
        .addField("**Créer le**", message.guild.createdAt.toLocaleString(), true)
        .setFooter(`© ${message.guild.me.displayName}`, Client.user.displayAvatarURL()); 
        message.channel.send(helpEmbed)     
    }
  });        

  Client.on('message', message =>{
    if (message.content.startsWith(prefix + "support")) {
      let gg = new Discord.MessageEmbed()
      //.setThumbnail(sicon)
      .setTitle(" ⚒・Support 🍭・Candy")
      .setDescription("<a:papillon1:844352686966439997>")
      .setURL('https://discord.gg/bjkvJxeM5e')
      .setColor('#ff0000')
      .setFooter('Clique sur le lien en bleu')
      message.channel.send(gg);
      return;
    }
  });

  Client.on("message", message => {
    const channel = Client.channels.cache.get('853374742156017695')
    const user = message.author
    const id = message.author
    const unlock = new Discord.MessageEmbed()
    .setTitle("🖖・Logs")
    .setDescription('Salon unlock par' + `${user}`  + 'dans le salon'   + message.channel)
    .setColor('#ff0000')
    .setImage(user.displayAvatarURL())
    if (message.content.toLowerCase() === prefix + "unlock") {
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("tu manque de la perm \"MANAGE_CHANNELS\" pour utliser la commande de unlock!");
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
      message.reply("*Salon unlock*"); // you can write content as you want to send nuked channel.
      channel.send(unlock)
    }
  });


  Client.on('message', message =>{
    if (message.content.startsWith(prefix + "user-info")) {
  
      const membre = message.mentions.members.first() || message.member;
   
      message.channel.send({
          embed: {
              color: ('#ff0000'),
              title: `👥・Informations de l'utilisateur **${membre.user.tag}**`,
              fields: [
                  {
              name: '🤖・ID :',
                      value: membre.id
                  },
                  {
                      name: '👾・Crée le :',
                      value: moment.utc(membre.user.createdAt).format("LL")
                  },
                  {
                      name: '🖖・Rejoint le :',
                      value: moment.utc(membre.joinedAt).format('LL')
                  }
              ],
              footer: {
                  text: `Informations de l'utilisateur ${membre.user.username}`
              }
          }
      });
    }
  });


  Client.on('message', message =>{
    if (message.content.startsWith(prefix + "embedj1")) {
      let gg = new Discord.MessageEmbed()
      //.setThumbnail(sicon)
      .setTitle("BOT FONCTIONNEL")
      .setDescription("J'ai eu un gros problème avec l'hébergement du bot ducoup j'ai été absent lomptemps mais la je suis sur ovh et ca marche")
      .setURL('https://discord.gg/bjkvJxeM5e')
      .setColor('#ff0000')
      .setFooter('problème = mp')
      message.channel.send(gg);
      return;
    }
  });

  Client.on('message', message =>{
    if (message.content.startsWith(prefix + "mention")) {
      message.channel.send("@everyone")
      message.delete();
       }
});     

  Client.login(config.token)  
