import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botnumber = '' //Ejemplo: +573138954963
global.confirmCode = ''

//• ↳𝑺𝑶𝑳𝑶 𝑫𝑬𝑺𝑨𝑹𝑹𝑶𝑳𝑳𝑨𝑫𝑶𝑹𝑬𝑺 𝑨𝑷𝑹𝑶𝑩𝑨𝑫𝑶𝑺
global.owner = [
['33760509044', 'mix🎩', true],
];

//• ↳𝑺𝑶𝑳𝑶 𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹𝑬𝑺!
global.mods = ['']

global.suittag = ['']
global.prems = []

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 💌
global.packsticker = 'rukai-𝙱𝙾𝚃'
global.packname = 'rukai-𝙱𝙾𝚃'
global.author = 'rukai-𝑀𝐷 ´･ᴗ･`'
global.wm = 'l ꙰ 𝙼𝙸𝙻𝙸𝙾𝙳𝙰𝚂-𝙱𝙾𝚃 l ꙰';
global.titulowm = 'rukai-𝙱𝙾𝚃';
global.titulowm2 = 'rukai-ᗰᗪ'
global.igfg = 'rukai-𝙱𝙾𝚃-ᎷＤ '
global.botname = 'rukai-𝑀𝐷 💥'
global.dev = 'rukai-mძ ﾉ)ﾟДﾟ(ヽ'
global.textbot = '𝙼𝙸𝙻𝙸𝙾𝙳𝙰𝚂-𝙱𝙾𝚃-ɱԃ'
global.gt = 'rukai-𝙱𝙾𝚃';
global.namechannel = 'rukai-𝙱𝙾𝚃-𝗠𝗗 🗻'
global.vs = 'V2'
global.vsJB = '5.0'
global.logo2 = fs.readFileSync('./src/logo2.jpg')

global.logo3 = fs.readFileSync('./src/logo3.jpg')

global.catalogo = fs.readFileSync('./src/logo6.png')

global.logo4 = fs.readFileSync('./src/logo4.jpg')

global.logo5 = fs.readFileSync('./src/logo5.jpg')

global.logo7 = fs.readFileSync('./src/Logo7.jpg')

global.logo8 = fs.readFileSync('./src/Logo8.jpg')

global.rule = fs.readFileSync('./src/rule.jpg')

global.welcome = fs.readFileSync('./media/Welcome.jpg')

global.adios = fs.readFileSync('./media/Bye.jpg')
global.imagen1 = fs.readFileSync('./Menu2.jpg');

global.imagen4 = fs.readFileSync('./Menu.jpg');
global.menu1 = imagen4; // Menu.jpg
global.menu2 = imagen1; // Menu2.jpg

global.libreria = 'baileys-pro'
global.baileys = 'V 6.7.8'
global.languaje = 'Español'
global.nameqr = 'rukai-𝙱𝙾𝚃'
global.sessions = 'rukaisesion'
global.jadi = 'jadibots'
global.blackJadibts = true

global.ch = {
ch1: '',
}

//• ↳ ◜𝑭𝑨𝑲𝑬 𝑬𝑺𝑻𝑰𝑳𝑶◞ • 🪩
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '󠁖󠁖󠁖󠁖󠁖󠁖󠁻󠁻rukai-Bot-MD', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'rukai', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '♡٨ﮩ٨ﮩﮩ٨ﮩﮩ٨ﮩ ᗷIEᑎᐯEᑎIᗪO ﮩ٨ﮩﮩ٨ﮩﮩ٨ﮩ٨♡', jpegThumbnail: logo5 }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'rukai-Bot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕Eres un sabio 💞', jpegThumbnail: logo3 }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'rukai', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: 'rukai-Bot-MD', jpegThumbnail: logo5 }}};

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '󠁖󠁖󠁖󠁖󠁖󠁖󠁻󠁻rukai-Bot-MD', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fgif2 = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":'rukai-Bot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `rukai-Bot-MD\n Ivan`, 'jpegThumbnail': logo4 }}}
//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp4 = ''
global.gp1 = '' 
global.gp2 = '' 
global.comunidad1 = '' 
global.channel = ''
global.yt = ''
global.md = ''
global.correo = ''
global.cn ='';

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🍭' + hour;

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363307382381547@newsletter", serverMessageId: 100, newsletterName: namechannel, }, }, }
//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nRukai-Bot-MD`;
global.nomorown = '33760509044';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

//• ↳ ◜𝑨𝑷𝑰𝑺 𝑭𝑼𝑵𝑪𝑰𝑶𝑵◞ 👑
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDiosV2']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
