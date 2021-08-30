module.exports.config = {
name: "concainit",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DG",
	description: "còn cái nịt",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cái nịt")==0 || (event.body.indexOf("Còn cái nịt")==0 || (event.body.indexOf("Có cái nịt")==0))) {
		var msg = {
				body: "còn cái nịt",
				attachment: fs.createReadStream(__dirname + `/noprefix/cainit.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}