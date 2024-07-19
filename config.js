const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_55_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh4MHNSVC8zQ0o3Um13MGRTNHlLNi9DRHdMNkhtc3BlZkVRRHU1VTBhSDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDA1Mzk2MDk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MjlERDMyN0M4OEI5OTg5OEFCM0I4N0NCNjVCOUZCQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNTQxMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDUzOTYwOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNEODdGRjQ3NEI5NTAyNzI0OUYwNTJCMTVDRUMxQTA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM1NDExNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGYmpyU3RHMVIxcWszaVFkeEpYZ253XCIsXG4gIFwicGhvbmVJZFwiOiBcImNiNWYyMjhmLWNjOTctNGNkOC04MmE0LTBlMWM3ODI4ZGU4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxOTAsXG4gICAgICAxMTgsXG4gICAgICAyNTQsXG4gICAgICAxNTMsXG4gICAgICAxODAsXG4gICAgICA1NixcbiAgICAgIDEzNixcbiAgICAgIDExNixcbiAgICAgIDI0MyxcbiAgICAgIDIwOSxcbiAgICAgIDkyLFxuICAgICAgMjQyLFxuICAgICAgMjI4LFxuICAgICAgMjQ3LFxuICAgICAgMjAsXG4gICAgICAyNTIsXG4gICAgICA4MyxcbiAgICAgIDgzLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDIxMyxcbiAgICAgIDYyLFxuICAgICAgMTExLFxuICAgICAgMjA0LFxuICAgICAgMjI4LFxuICAgICAgMTM0LFxuICAgICAgNzYsXG4gICAgICAyMDksXG4gICAgICA4NixcbiAgICAgIDE0NixcbiAgICAgIDAsXG4gICAgICA4MCxcbiAgICAgIDgzLFxuICAgICAgMjA2LFxuICAgICAgMTk4LFxuICAgICAgMTM2LFxuICAgICAgMTQ1LFxuICAgICAgMjA1LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAxTDQ5U1cxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDUzOTYwOTQ6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzAxMjIyNTg4NTQyOjQ2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQ3h0Y3dGRVBpTzU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhEVitwZGMxSEJ5K2xuQ0pJcXhTa29hNXZjM0xHZXc5Mk5OY2x6T0tJaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMkhvZWdZTU9meTBLb2Z2cTRPYW5ZKy9HVkwweGp4MnZicit4Yk54N1U0UG5Tb0tYYkwzblBlZk1GMFp2THRGbEY5NC9lK3BMWmE0SEtWS083dDVrRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWYzV25iZ0wyWFFGRWRPWnI3M2k4RUQzekw2SzVrdjJIMVBQMU1iVjRMRTZSbWg2VHRYbTh1bG52OEI0M01nTGZMODh3bzh0ZktUU0UreE1CUER4Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDA1Mzk2MDk0OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzU0MTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXA1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3ajhFek9WQk10SlR0c0lPYzBlY1lkZlZiU3ZLMFJsVFBoWFdaNy9nYzV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDI0MzU1MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTM1NDExNTA2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
