module.exports.config = {
  name: "adm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://s9.gifyu.com/images/taoanhdep_avatar_anime.jpg",
  ];
  var callback = () => api.sendMessage({body:`❯❯ADMIN BOT\n\n ❯Tên: Bùi Tùng Dương (Dươn)\n ❯Giới tính: Nam\n ❯Sinh ngày: 13/12/2005\n ❯Mối quan hệ: Hmmm..\n ❯Quê quán và nơi ở: Ninh Bình\n ❯Facebook: https://www.facebook.com/dg.13.12.buiduon
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người ❤
------------
✔Donate:
+MB: hmmm..
+VIB: hmmm..
+MoMo: ...

------Love------`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };