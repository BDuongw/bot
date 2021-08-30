module.exports.config = {
	name: "gioithieu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "JRT",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Thông tin adminbot", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("»Bảng thông tin về ADMBot«\n\n❯❯Người chạy bot: Bùi Tùng Dương \n❯❯Link fb: https://www.facebook.com/dg.13.12.buiduon\n»Cảm ơn đã sử dụng bot của mình🥰\n❯Have a nice day!!!❤------DG-------",event.threadID, event.messageID);
	}
}