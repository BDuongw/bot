module.exports.config = {
name: "adu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DG",
	description: "á đù",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đù")==0 || (event.body.indexOf("Đu")==0 || (event.body.indexOf("Adu")==0))) {
		var msg = {
				body: "Ừ thì đù",
				attachment: fs.createReadStream(__dirname + `/noprefix/adu.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}