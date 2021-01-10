const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('./lib/database/setting.json'))

function help() {
    return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ Yuno Bot
╠➥ CREATOR : Faris
╠➥ wa.me/6287892670067
║
╠══✪〘 LIST MENU 〙✪══
║
╠➥ *${prefix}ownermenu*
╠➥ *${prefix}adminmenu*
╠➥ *${prefix}groupmenu*
╠➥ *${prefix}praymenu*
╠➥ *${prefix}nsfwmenu*
╠➥ *${prefix}funmenu*
╠➥ *${prefix}mediamenu*
╠➥ *${prefix}animemenu*
╠➥ *${prefix}kerangmenu*
╠➥ *${prefix}downloadmenu*
╠➥ *${prefix}othermenu*
║
╠══✪〘 OTHER 〙✪══
║
╠➥ *cekpprefix*
╠➥ *${prefix}setprefix*
╠➥ *${prefix}daftar |nama|umur*
╠➥ *${prefix}bugreport [teks]*
╠➥ *${prefix}listblock*
╠➥ *${prefix}listbanned*
╠➥ *${prefix}listgroup*
╠➥ *${prefix}info*
╠➥ *${prefix}limit*
╠➥ *${prefix}ping*
╠➥ *${prefix}yunogroup*
╠➥ *${prefix}yunoadmin*
╠➥ *${prefix}owner*
║
╚═〘 Yuno Bot 〙
`
}
exports.help = help()
function ownercmd() {
    return `
╔══✪〘 OWNER 〙✪══
║
╠➥ *${prefix}block 62858xxxxx*
╠➥ *${prefix}unblock 62858xxxxx*
╠➥ *${prefix}addadmin @tagmember*
╠➥ *${prefix}deladmin @tagmember*
╠➥ *${prefix}restart*
╠➥ *${prefix}ekickall*
╠➥ *${prefix}banchat*
╠➥ *${prefix}unbanchat*
╠➥ *${prefix}setname [teks]*
╠➥ *${prefix}setstatus [teks]*
╠➥ *${prefix}setprofilepic*
╠➥ *${prefix}eval [kode JavaScript]*
║
╚═〘 Yuno Bot 〙`
}
exports.ownercmd = ownercmd()
function admincmd() {
    return `
╔══✪〘 ADMIN 〙✪══
║
╠➥ *${prefix}mute*
╠➥ *${prefix}unmute*
╠➥ *${prefix}ban @tagmember*
╠➥ *${prefix}unban @tagmember*
╠➥ *${prefix}daftarulang @tagmember umur*
╠➥ *${prefix}spamcall [81273xxxx]*
╠➥ *${prefix}addbadword [text]*
╠➥ *${prefix}delbadword [text]*
╠➥ *${prefix}listbadword [text]*
╠➥ *${prefix}resetsticker @tagmember*
╠➥ *${prefix}resetbadword @tagmember*
╠➥ *${prefix}kickall*
╠➥ *${prefix}oleave*
╠➥ *${prefix}opromote*
╠➥ *${prefix}odemote*
╠➥ *${prefix}odelete*
╠➥ *${prefix}oadd 62813xxxxx*
╠➥ *${prefix}okickall*
╠➥ *${prefix}otagall*
║
╚═〘 Yuno Bot 〙`
}
exports.admincmd = admincmd()
function nsfwcmd() {
    return `
╔══✪〘 NSFW 〙✪══
║
╠➥ *${prefix}randombokep*
╠➥ *${prefix}randomhentai*
╠➥ *${prefix}randomnsfwneko*
╠➥ *${prefix}randomtrapnime*
╠➥ *${prefix}nhentai [kode]*
╠➥ *${prefix}nhder [kode]*
╠➥ *${prefix}xnxx [linkXnxx]*
║
╚═〘 Yuno Bot 〙`
}
exports.nsfwcmd = nsfwcmd()
function praycmd() {
    return `
╔══✪〘 PRAY 〙✪══
║
╠➥ *${prefix}quran [urutan surah]*
╠➥ *${prefix}infosurah [nama surah]*
╠➥ *${prefix}tafsir [nama surah] [ayat]*
╠➥ *${prefix}jadwalsholat [daerah]*
╠➥ *${prefix}listsurah*
╠➥ *${prefix}listdaerah*
║
╚═〘 Yuno Bot 〙`
}
exports.praycmd = praycmd()
function kerangcmd() {
    return `
╔══✪〘 KERANG 〙✪══
║
╠➥ *${prefix}apakah [optional]*
╠➥ *${prefix}rate [optional]*
╠➥ *${prefix}bisakah [optional]*
╠➥ *${prefix}kapankah [optional]*
║
╚═〘 Yuno Bot 〙`
}
exports.kerangcmd = kerangcmd()
function funcmd() {
    return `
╔══✪〘 FUN 〙✪══
║
╠➥ *${prefix}caklontong*
╠➥ *${prefix}family100*
╠➥ *${prefix}tebakgambar*
╠➥ *${prefix}cerpen*
╠➥ *${prefix}puisi1*
╠➥ *${prefix}puisi2*
╠➥ *${prefix}puisi3*
╠➥ *${prefix}thunder [teks]*
╠➥ *${prefix}blackpink [teks]*
╠➥ *${prefix}pornhub [|teks1|teks2]*
╠➥ *${prefix}magernulis1 [teks]*
╠➥ *${prefix}ramalpasangan [kamu|pasangan]*
╠➥ *${prefix}zodiak* [zodiak kamu]
╠➥ *${prefix}artinama [nama]*
╠➥ *${prefix}artinama [nama]*
╠➥ *${prefix}artimimpi [mimpi]*
╠➥ *${prefix}heroml [nama hero]*
╠➥ *${prefix}nulis [teks]*
╠➥ *${prefix}sandwriting [teks]*
╠➥ *${prefix}quotemaker [|teks|author|theme]*
║
╚═〘 Yuno Bot 〙`
}
exports.funcmd = funcmd()
function mediacmd() {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➥ *${prefix}covid [negara]*
╠➥ *${prefix}jadwalTv [channel]*
╠➥ *${prefix}cuaca [tempat]*
╠➥ *${prefix}resepmasakan [optional]*
╠➥ *${prefix}tts [kode bhs] [teks]*
╠➥ *${prefix}igstalk [@username]*
╠➥ *${prefix}tiktokstalk [@username]*
╠➥ *${prefix}smulestalk [@username]*
╠➥ *${prefix}kbbi [query]*
╠➥ *${prefix}wiki [query]*
╠➥ *${prefix}shopee [query]*
╠➥ *${prefix}google [query]*
╠➥ *${prefix}pinterest [query]*
╠➥ *${prefix}playstore [query]*
╠➥ *${prefix}googleimage [query]*
╠➥ *${prefix}brainlysearch [query]*
╠➥ *${prefix}youtubesearch [query]*
╠➥ *${prefix}translate [bahasa] [teks]*
╠➥ *${prefix}brainly [pertanyaan] [.jumlah]*
╠➥ *${prefix}lirik [optional]*
╠➥ *${prefix}chord [optional]*
╠➥ *${prefix}qrcode [optional]*
╠➥ *${prefix}maps [optional]*
╠➥ *${prefix}textmaker [teks1|teks2]*
╠➥ *${prefix}checkip [ipaddress]*
╠➥ *${prefix}ssweb [linkWeb]*
╠➥ *${prefix}shorturl [linkWeb]*
║
╚═〘 Yuno Bot 〙`
}
exports.mediacmd = mediacmd()
function animecmd() {
    return `
╔══✪〘 ANIME 〙✪══
║
╠➥ *${prefix}loli*
╠➥ *${prefix}shota*
╠➥ *${prefix}waifu*
╠➥ *${prefix}husbu*
╠➥ *${prefix}randomNekoNime*
╠➥ *${prefix}randomTrapNime*
╠➥ *${prefix}randomAnime*
╠➥ *${prefix}quotesnime*
╠➥ *${prefix}wait*
╠➥ *${prefix}koin*
╠➥ *${prefix}malanime [optional]*
╠➥ *${prefix}malcharacter [optional]*
╠➥ *${prefix}kusonime [optional]*
╠➥ *${prefix}otakudesu [optional]*
╠➥ *${prefix}dewabatch [optional]*
╠➥ *${prefix}komiku [optional]*
╠➥ *${prefix}animesearch [query]*
║
╚═〘 Yuno Bot 〙`
}
exports.animecmd = animecmd()
function othercmd() {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➥ *${prefix}bahasa*
╠➥ *${prefix}sticker*
╠➥ *${prefix}stickergif*
╠➥ *${prefix}sfire*
╠➥ *${prefix}slightning*
╠➥ *${prefix}ttp [teks]*
╠➥ *${prefix}stickertoimg*
╠➥ *${prefix}neko*
╠➥ *${prefix}pokemon*
╠➥ *${prefix}inu*
╠➥ *${prefix}infoGempa*
╠➥ *${prefix}quotes*
╠➥ *${prefix}ptl*
╠➥ *${prefix}dadu*
╠➥ *${prefix}koin*
╠➥ *${prefix}quoterandom*
╠➥ *${prefix}wa.me*
║
╚═〘 Yuno Bot 〙`
}
exports.othercmd = othercmd()
function downloadcmd() {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
╠➥ *${prefix}ytmp3 [linkYt]*
╠➥ *${prefix}ytmp4 [linkYt]*
╠➥ *${prefix}ig [linkIg]*
╠➥ *${prefix}fb [linkFb]*
╠➥ *${prefix}twitter [linkTwitter]*
╠➥ *${prefix}smule [linkSmule]*
╠➥ *${prefix}tiktok [linkTiktok]*
╠➥ *${prefix}starmaker [linkStarmaker]*
╠➥ *${prefix}xnxx [linkXnxx]*
╠➥ *${prefix}nhder [kodeNuclear]*
╠➥ *${prefix}joox [lagu]*
╠➥ *${prefix}play [lagu]*
╠➥ *${prefix}music [lagu]*
╠➥ *${prefix}getmusic [IdDownload]*
╠➥ *${prefix}video [video]*
╠➥ *${prefix}getvideo [IdDownload]*
║
╚═〘 Yuno Bot 〙`
}
exports.downloadcmd = downloadcmd()
function groupcmd() {
    return `
╔══✪〘 GROUP 〙✪══
║
╠➥ *${prefix}snk*
╠➥ *${prefix}wame*
╠➥ *${prefix}groupinfo*
╠➥ *${prefix}add 62858xxxxx*
╠➥ *${prefix}kick @tagmember*
╠➥ *${prefix}promote @tagmember*
╠➥ *${prefix}demote @tagadmin*
╠➥ *${prefix}tagall*
╠➥ *${prefix}adminList*
╠➥ *${prefix}ownerGroup*
╠➥ *${prefix}leave*
╠➥ *${prefix}delete [replyChatBot]*
╠➥ *${prefix}kickAll*
╠➥ *${prefix}group [open|close]*
╠➥ *${prefix}NSFW [enable|disable]*
╠➥ *${prefix}left [enable|disable]*
╠➥ *${prefix}welcome [enable|disable]*
╠➥ *${prefix}simi [enable|disable]*
╠➥ *${prefix}antisticker [enable|disable]*
╠➥ *${prefix}antilink [enable|disable]*
╠➥ *${prefix}antibadword [enable|disable]*
║
╚═〘 Yuno Bot 〙`
}
exports.groupcmd = groupcmd()

function sumbang() {
    return `
╔══✪〘 DONATE 〙✪══
║
╠➥ *DONASI BISA MELALUI :*
╠➥ *DANA/PULSA/OVO : 087892670067*
╠➥ *TRAKTEER : https://bit.ly/DonateYunoBot-ID*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
╚═〘 Yuno Bot 〙
`
}
exports.sumbang = sumbang()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist()
