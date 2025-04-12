process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
import './config.js' 
import { createRequire } from 'module'
import path, { join } from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import { platform } from 'process'
import * as ws from 'ws'
import fs, { watchFile, unwatchFile, writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat, mkdirSync, rename } from 'fs';
import { promises as fsPromises } from 'fs';
import yargs from 'yargs'
import { spawn } from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import syntaxerror from 'syntax-error'
import { format } from 'util'
import pino from 'pino'
import Pino from 'pino'
import { Boom } from '@hapi/boom'
import { makeWASocket, protoType, serialize } from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import Datastore from '@seald-io/nedb';
import store from './lib/store.js'
import readline from 'readline'
import NodeCache from 'node-cache' 
import { startSubBots } from './plugins/jadibot-code.js';
import pkg from 'google-libphonenumber'
const { PhoneNumberUtil } = pkg
const phoneUtil = PhoneNumberUtil.getInstance()
const { makeInMemoryStore, DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore } = await import('@whiskeysockets/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000
protoType()
serialize()
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};
//global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '')
global.timestamp = { start: new Date }
const __dirname = global.__dirname(import.meta.url);
//const __dirname = join(fileURLToPath(import.meta.url), '..');
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
//global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@').replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']')

//news
const dbPath = path.join(__dirname, 'database');
if (!fs.existsSync(dbPath)) fs.mkdirSync(dbPath);

const collections = {
users: new Datastore({ filename: path.join(dbPath, 'users.db'), autoload: true }),
chats: new Datastore({ filename: path.join(dbPath, 'chats.db'), autoload: true }),
settings: new Datastore({ filename: path.join(dbPath, 'settings.db'), autoload: true }),
msgs: new Datastore({ filename: path.join(dbPath, 'msgs.db'), autoload: true }),
sticker: new Datastore({ filename: path.join(dbPath, 'sticker.db'), autoload: true }),
stats: new Datastore({ filename: path.join(dbPath, 'stats.db'), autoload: true }),
};

Object.values(collections).forEach(db => {
db.setAutocompactionInterval(300000);
});

global.db = {
data: {
users: {},
chats: {},
settings: {},
msgs: {},
sticker: {},
stats: {},
},
};

function sanitizeId(id) {
return id.replace(/\./g, '_');
}

function unsanitizeId(id) {
return id.replace(/_/g, '.');
}

function sanitizeObject(obj) {
const sanitized = {};
for (const [key, value] of Object.entries(obj)) {
const sanitizedKey = key.replace(/\./g, '_');
sanitized[sanitizedKey] = (typeof value === 'object' && value !== null) ? sanitizeObject(value) : value;
}
return sanitized;
}

function unsanitizeObject(obj) {
const unsanitized = {};
for (const [key, value] of Object.entries(obj)) {
const unsanitizedKey = key.replace(/_/g, '.');
unsanitized[unsanitizedKey] = (typeof value === 'object' && value !== null) ? unsanitizeObject(value) : value;
}
return unsanitized;
}

global.db.readData = async function (category, id) {
const sanitizedId = sanitizeId(id);
if (!global.db.data[category][sanitizedId]) {
const data = await new Promise((resolve, reject) => {
collections[category].findOne({ _id: sanitizedId }, (err, doc) => {
if (err) return reject(err);
resolve(doc ? unsanitizeObject(doc.data) : {});
});
});
global.db.data[category][sanitizedId] = data;
}
return global.db.data[category][sanitizedId];
};

global.db.writeData = async function (category, id, data) {
const sanitizedId = sanitizeId(id);
global.db.data[category][sanitizedId] = {
...global.db.data[category][sanitizedId],
...sanitizeObject(data),
};
await new Promise((resolve, reject) => {
collections[category].update({ _id: sanitizedId },
{ $set: { data: sanitizeObject(global.db.data[category][sanitizedId]) } },
{ upsert: true },
(err) => {
if (err) return reject(err);
resolve();
});
});
};

global.db.loadDatabase = async function () {
const loadPromises = Object.keys(collections).map(async (category) => {
const docs = await new Promise((resolve, reject) => {
collections[category].find({}, (err, docs) => {
if (err) return reject(err);
resolve(docs);
});
});
const seenIds = new Set();
for (const doc of docs) {
const originalId = unsanitizeId(doc._id);
if (seenIds.has(originalId)) {
await new Promise((resolve, reject) => {
collections[category].remove({ _id: doc._id }, {}, (err) => {
if (err) return reject(err);
resolve();
});
});
} else {
seenIds.add(originalId);
if (category === 'users' && (originalId.includes('@newsletter') || originalId.includes('lid'))) continue;
if (category === 'chats' && originalId.includes('@newsletter')) continue;
global.db.data[category][originalId] = unsanitizeObject(doc.data);
}}});
await Promise.all(loadPromises);
};

global.db.save = async function () {
const savePromises = [];
for (const category of Object.keys(global.db.data)) {
for (const [id, data] of Object.entries(global.db.data[category])) {
if (Object.keys(data).length > 0) {
if (category === 'users' && (id.includes('@newsletter') || id.includes('lid'))) continue;
if (category === 'chats' && id.includes('@newsletter')) continue;
savePromises.push(
new Promise((resolve, reject) => {
collections[category].update({ _id: sanitizeId(id) },
{ $set: { data: sanitizeObject(data) } },
{ upsert: true },
(err) => {
if (err) return reject(err);
resolve();
});
}));
}}}
await Promise.all(savePromises);
};

global.db.loadDatabase().then(() => {
console.log('Base de datos lista');
}).catch(err => {
console.error('Error cargando base de datos:', err);
});

/*global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile('database.json'))
global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) {
return new Promise((resolve) => setInterval(async function() {
if (!global.db.READ) {
clearInterval(this);
resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
}}, 1 * 1000));
}
if (global.db.data !== null) return;
global.db.READ = true;
await global.db.read().catch(console.error);
global.db.READ = null;
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {}),
};
global.db.chain = chain(global.db.data);
};
loadDatabase();*/

//if (global.conns instanceof Array) {console.log('Conexiones ya inicializadas...');} else {global.conns = [];}

/* ------------------------------------------------*/

global.creds = 'creds.json'
global.authFile = `CrowSession`
global.authFileJB  = 'CrowJadiBot'
global.rutaBot = join(__dirname, authFile)
global.rutaJadiBot = join(__dirname, authFileJB)
const respaldoDir = join(__dirname, 'BackupSession');
const credsFile = join(global.rutaBot, global.creds);
const backupFile = join(respaldoDir, global.creds);

if (!fs.existsSync(rutaJadiBot)) {
fs.mkdirSync(rutaJadiBot)}

if (!fs.existsSync(respaldoDir)) fs.mkdirSync(respaldoDir);

const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = new Map();
const msgRetryCounterCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const userDevicesCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const {version} = await fetchLatestBaileysVersion()
let phoneNumber = global.botNumberCode
const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")
let rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: true,
})

const question = (texto) => {
rl.clearLine(rl.input, 0)
return new Promise((resolver) => {
rl.question(texto, (respuesta) => {
rl.clearLine(rl.input, 0)
resolver(respuesta.trim())
})})
}

let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
let lineM = '⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ 》'
opcion = await question(`╭${lineM}  
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}
┊ ${chalk.blueBright('┊')} ${chalk.blue.bgBlue.bold.cyan(await tr('MÉTODO DE VINCULACIÓN'))}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}   
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}     
┊ ${chalk.blueBright('┊')} ${chalk.green.bgMagenta.bold.yellow(await tr('¿CÓMO DESEA CONECTARSE?'))}
┊ ${chalk.blueBright('┊')} ${chalk.bold.redBright(await tr('⇢  Opción 1:'))} ${chalk.greenBright(await tr('Código QR.'))}
┊ ${chalk.blueBright('┊')} ${chalk.bold.redBright(await tr('⇢  Opción 2:'))} ${chalk.greenBright(await tr('Código de 8 digitos.'))}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}
┊ ${chalk.blueBright('╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')}     
┊ ${chalk.blueBright('┊')} ${chalk.italic.magenta(await tr('Escriba sólo el número de'))}
┊ ${chalk.blueBright('┊')} ${chalk.italic.magenta(await tr('la opción para conectarse.'))}
┊ ${chalk.blueBright('╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅')} 
╰${lineM}\n${chalk.bold.magentaBright('---> ')}`)
if (!/^[1-2]$/.test(opcion)) {
console.log(chalk.bold.redBright(await tr(`NO SE PERMITE NÚMEROS QUE NO SEAN ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, TAMPOCO LETRAS O SÍMBOLOS ESPECIALES. ${chalk.bold.yellowBright("CONSEJO: COPIE EL NÚMERO DE LA OPCIÓN Y PÉGUELO EN LA CONSOLA.")}`)))
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

console.info = () => {} 
const connectionOptions = {
logger: pino({ level: 'silent' }), 
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
browser: opcion == '1' ? ['CrowBot-MF', 'Edge', '20.0.04'] : methodCodeQR ? ['CrowBot-MF', 'Edge', '20.0.04'] : ["Ubuntu", "Chrome", "108.0.5359.125"],
version: version,
msgRetryCounterMap,
markOnlineOnConnect: false,
generateHighQualityLinkPreview: true,
syncFullHistory: false, 
};
