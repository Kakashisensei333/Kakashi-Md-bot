const { default: makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@adiwajshing/baileys');

async function INC() {

const { fs, exec, color, P, Boom, util, banner3, banner2, ms } = require("./consts-func.js")

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

if(!fs.existsSync("./datab/data/vtn.json")) {
console.log("O bot não funcionará, perdão..")
process.exit() 
} else if(!fs.existsSync("./datab/usuarios/premium.json")) {
console.log("O bot não funcionará, perdão...")
process.exit() 
} else if(!fs.existsSync("./armor")) {
console.log("O bot não funcionará, perdão....")
process.exit()   
}

const kontol_info2 = console.info 
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments) 
}}
const kontol_info1 = console.info 
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {")){
return kontol_info1(...arguments)
}} 

var msgRetryCounterMap = {};

var qrcode = "./ALEATORY-QR.json"

const { state, saveCreds } = await useMultiFileAuthState(qrcode)

const keyale = "key-fabio-kakashi-3.0"

const conn = makeWASocket({
browser: Browsers.macOS('Desktop'),
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state, 
msgRetryCounterMap: MessageRetryMap,
generateHighQualityLinkPreview: true,
defaultQueryTimeoutMs: undefined, 
keepAliveIntervalMs: 1000 * 60 * 10 * 3
})

require("./index.js")(conn, saveCreds, qrcode, keyale)  

module.exports = update = async(update) => {
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(connection === "open") {
console.log(banner3.string)   
console.log(banner2.string)  
console.log(color(
`〔 - _ ALEATORY MD 3.0 _ - CONECTADO COM SUCESSO.. 〕`))
}
if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}
if(connection === "close") {
const RECONECTAR_ = new Boom(lastDisconnect?.error)?.output.statusCode 
if(String(lastDisconnect.error).includes("Connection Terminated")) {
console.log(color("Conexão está querendo terminar, mas apenas ignore, o bot reiniciará..", "gray"))
}

switch(RECONECTAR_){
case 503:
case 500:
case 400:
case 515:
case 502:
INC()
break
case 440:
console.log(color("Conexão substituida, feche uma para continuar / ou desligue e ligue para continuar visualizando o console de comandos e mensagens enviadas..", "red"))
break
case 428:
console.log(color("Conexão fechada...", "gray"))
INC()
break
case 403:
case 401:
console.log(color("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR", "red"))
exec(`rm -rf ${qrcode}`)
INC()
break
break
case 408:
console.log(color("Conexão fraca, apenas ignore esta mensagem..", "gray"))
INC()
break
default: 
console.log("Conexão fechada por :", lastDisconnect.error)
}}}
}
INC()