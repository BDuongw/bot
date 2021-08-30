const fs = require("fs");
module.exports.config = {
	name: "cony",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "JRT",
	description: "Tỉ lệ có Ny của bạn trong năm nay",
	commandCategory: "Game", 
	usages: "cony", 
	cooldowns: 0,
	dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, __GLOBAL, Currencies }) {
	var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', '0%', '48%',`1%`,`10%`,`99,9%`,"87%","23%"];
	var tle = tl[Math.floor(Math.random() * tl.length)];
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    var msg = {
				body: `Chúc mừng bạn ${name}. Tỉ lệ có người yêu của bạn trong năm nay là ${tle} ❤❤ (chỉ là Bot đoán xin đừng gạch đá nếu bạn không có người yêu!😷)`,
				attachment: fs.createReadStream(__dirname + `/cache/chucmung.gif`)
			}
			api.sendMessage(msg, event.threadID, event.messageID);
		}