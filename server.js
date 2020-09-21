const http = require("http");
const express = require("express");
const app = express();
require("events").EventEmitter.prototype._maxListeners = 100;

//
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

///

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("Encendido", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "aea") {
    msg.reply("cual aea ctm");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "oe") {
    msg.reply("dime bb");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("donde")) {
    msg.channel.send("En el culo de tu vieja, hablamos");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("dónde")) {
    msg.channel.send("En el culo de tu vieja, hablamos");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("quien")) {
    msg.channel.send("Tu mama wn, tu mama");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("quién")) {
    msg.channel.send("Tu mama wn, tu mama");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("nada")) {
    if (msg.author.bot) {
      console.log("Ignoring bot message!");
      return;
    }
    msg.channel.send("nada masculino es lo que tiene kuz");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("hol")) {
    if (msg.author.bot) {
      console.log("Ignoring bot message!");
      return;
    }
    msg.channel.send("Hola :3");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "ip") {
    msg.channel.send(
      "Multimodos 1.6:\n104.238.205.46:27041 \nZombie Escape CSGO: 104.238.205.46:27060"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("kuz")) {
    if (msg.author.bot) {
      console.log("Ignoring bot message!");
      return;
    }
    msg.channel.send("kuz debe estar con su gorda");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("crash")) {
    if (msg.author.bot) {
      console.log("Ignoring bot message!");
      return;
    }
    msg.reply("Me nombraste a un estafador?");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("si")) {
    if (msg.author.bot) {
      console.log("Ignoring bot message!");
      return;
    }
    msg.channel.send("Ok.");
  }
});
//si contiene
client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.includes("bot") || message.startsWith("ab33")) {
    msg.reply(" Como dices ctm?");
  }
});
client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.startsWith("rata") || message.startsWith("bolo")) {
    msg.reply(" el que tiene lag en la lengua?");
  }
});
client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.startsWith("xd") || message.startsWith("xdd")) {
    msg.reply(" que te ries gil");
  }
});

client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.includes("face") || message.includes("face")) {
    msg.reply("El gordo de " +"<@615812776149123073>" +" vive aqui");
  }
});
client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.includes("pg") || message.includes("server")) {
    msg.reply("El servidor lamentablemente murio :( ");
  }
});





client.on("guildMemberAdd", member => {
  let canal = client.channels.cache.get("713906205101260890");
  canal.send(
    `Hola ${member.user}, bienvenido a PerGAmes # MultiModos ${member.guild.name} Unetete a nuestro servidor multimodos CS 1.6 IP: 104.238.205.46:27041`
  );
});

client.on("guildMemberRemove", member => {
  let canal = client.channels.cache.get("713906205101260890");
  canal.send(`${member.user}, se fue a ver porno`);
});

client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith("/meme")) {
    var myNumeroAleatorio = Math.floor(Math.random() * 98) + 1;
    msg.channel.send({
      files: [
        "https://cdn.glitch.com/973ed9aa-3246-4f30-a1c3-136e65d87166%2F" +
          myNumeroAleatorio +
          ".jpg"
      ]
    });
  }
});

client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.includes("pddsa") || message.startsWith("yape")) {
    msg.reply("oe pero ya pague entiende:");
    msg.channel.send({
      files: [
        "https://cdn.glitch.com/7902c58a-a679-4795-8e96-da82f3b2145a%2F973ed9aa-3246-4f30-a1c3-136e65d871662Fcobrar.png"
      ]
    });
  }
});

client.on("message", msg => {
  if (msg.author.bot == client.user) {
    return;
  }
  let message = msg.content.toLowerCase();
  if (message.includes("♂") || message.startsWith("sj")) {
    msg.reply("Aqui esta el mapa:");
    msg.channel.send({
      files: [
        "https://cdn.glitch.com/7902c58a-a679-4795-8e96-da82f3b2145a%2Fsj.jpg"
      ]
    });
  }
});

client.login("NzE2NzQyNTMzNDk3MDk0MjQ2.Xvwehg.DZnEZ49gOPfVOyXbZ6WYIxm-th4");
