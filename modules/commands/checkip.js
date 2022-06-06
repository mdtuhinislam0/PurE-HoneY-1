module.exports.config = {
  name: "checkip",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "K có chủ",// fix by Nguyen
  description: "lấy thông tin sever",
  commandCategory: "Bổ não",
  usages: "[ip/link]",
  cooldowns: 5
}// làm vui th procoder tha em
module.exports.run = async ({ api, event, args }) => {
  if(!args[0]){ 
    return api.sendMessage(`Vui lòng nhập ip or link sever minecraft `,event.threadID, event.messageID)
  }
  const axios = require('axios');
  const res = await axios.get(`https://api.mcsrvstat.us/2/${args[0]}`);
  const onl = res.data.online;
  const ip = res.data.ip;
  const port = res.data.port;
  const host = res.data.hostname;
    return api.sendMessage({body: 
    `= MÁY CHỦ MINECRAFT JAVA =` +
    `\nHostName: ` + host +
    `\nTrạng Thái: ` + onl +
    `\nĐịa chỉ IP: ` + ip +
    `\nPort: ` + port
    }, event.threadID, event.messageID)
}
