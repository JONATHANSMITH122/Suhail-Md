const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "18763351213" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18763351213";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_13_03_31_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0xvT2dBOWEvd3dlVVhTd0locG1FVmN5QnJkUktmTzJ3b0I0WXFGMnJFVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlg2WHU2am5DUm1XNnBFQ0p0RVpaNnNEZzNVZ3VwU093anhwNnB5WGRnUk09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUdSQ2NZTVB4NVMwQlZJdkVqb3YyOHlHQmhwSC8vaGFxRmo0a1NYcWltTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjZBVzJ5OXZRUU13dEJVNStiNXdtcHFnRUNPMWlKQVNNQ1VoTklUQWtXSDg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ09pcm9sUkhLaDNvdlFBWFZ1K2xPUnFBdFJlZ1Iyb0FsRG1od0xJelRrYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhKODFhbENBT2VHazNYZFcwY2tFd3lrZ3pzbDNWZ21ZOVZFUDYxaUJ4RGM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJNSlhCKzV4MTVJUXQ0Z0dNWU9lT05IYXMrd3AvTnUzWW5sREpXOUpvK0ZFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUjhpNVRKcy9sc3pWSzZHSjYrOHdIRWM1QXpGSElVVmlLUU9RdjJ1U0lSaz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIxWkVvR040dm5iSW9la1A4dDVrTWtPRkRMa2wxNDJPQXA4dmdyUHEzL1FtN3p0WkpxUm01YzArbjBNTUhmTTJVWUFja0xhbXBlYjB5K21KVXJocktndz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6ODUsXCJhZHZTZWNyZXRLZXlcIjpcIldmQUhuQ0h3UE1JWi9SaEFZZkMrZTRPcURTeFN6OXlxa3JPN1V2NTJVMlU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIxODc2ODM3MTgzMkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJFMDIyREU1ODE3MzY5MkY0NkU5RTMwQzNCOUIwMUExM1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExODk0Mzk4fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjE4NzY4MzcxODMyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkE4RTkwMDkzMjE1OTdGQjNDNUZFRTkyOTZCOEE0RTkzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE4OTQzOTh9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJnVGtrdjBjVVRuMkJBSlRIUkVEdlFnXCIsXCJwaG9uZUlkXCI6XCI2NzBiZDU4MS1lYWI2LTRkNTYtYTY3My1lMzc4YTYyMTk5MWVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBIZUF2QTYvT0ZQWDdvTXpCcGNFMUZzSitSST1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPcHJSZUxYc1pKNFArTXJSSGE2R0JGSTRsbjg9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiRVQ4TEpaOUxcIixcIm1lXCI6e1wiaWRcIjpcIjE4NzY4MzcxODMyOjNAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjQ5NDY1MDM4NDcxNDIwOjNAbGlkXCIsXCJuYW1lXCI6XCJVbmtub3duaW5jXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPS2ZvNHdERVBqZXBiQUdHQUlnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRWx5TUU3SXVudUprUzZCRjRFU0Y1TDM2N1NRKzl2NzIzZXU0MkpSZ1dFQT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInlKQTUxamxpdXB4WnlLbWpUalNOcEtxTTdlUDFYRlZZclpGeWxHNTN5S2Q0SjJIZ0J3TExNMGZmYTBHUU9qbENlblU4ZFFPNUNFdGVRSU16RzN6M0JBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiWWdZV1JZOFp4MjBrY1JqNGdMbW5JakhBUTJUYXM3RGlHamxic253UmN0aWE0VDdHMlZacFRhU1RrUU1JeWFUL3R1OHZLbTduUlVGWTJCaTlFRDFoZ0E9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjE4NzY4MzcxODMyOjNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUkpjakJPeUxwN2laRXVnUmVCRWhlUzkrdTBrUHZiKzl0M3J1TmlVWUZoQVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTE4OTQzOTUsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTFl5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFl5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwialVTZFQ4WVRXMWg0ckgrVm9VU2FSMHAvUlVRMi9HOWt5RUwvVTVJQmNLMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzEwNDk2OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTg0Njg2NjI0NVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "𝐔𝚴𝐊𝚴𝚯𝐖𝚴", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐔𝚴𝐊𝚴𝚯𝐖𝚴",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝐔𝚴𝐊𝚴𝚯𝐖𝚴",
  ownername:process.env.OWNER_NAME|| "𝐔𝚴𝐊𝚴𝚯𝐖𝚴",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
