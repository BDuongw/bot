module.exports.config = {
name: "cacbanbilamsaoi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DG",
	description: "các bạn bị làm sao í",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bị làm sao í")==0 || (event.body.indexOf("Bạn bị làm sao í)==0 || (event.body.indexOf("Làm sao í")==0))) {
		var msg = {
				body: "bạn bị làm sao íiii",
				attachment: fs.createReadStream(__dirname + `/noprefix/minhthu.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}