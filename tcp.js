/**
 * 构建TCP客户端
 */

/* 引入net模块 */
var net = require("net");
var randomstring = require("randomstring");
/* 创建TCP服务器 */
var server = net.createServer(function(socket){
    setInterval(()=>{
        let count = Math.floor(Math.random() * 40) + 1;
        socket.write(strToPackage(randomstring.generate(count)))
    },100)
});

function strToPackage(str){
    let buf = Buffer.from(str, 'utf8');
    let headBuf = new Buffer(2);
    headBuf.writeUInt16LE(buf.length);
    let package = Buffer.concat([headBuf, buf])
    return package;
}

/* 设置连接的服务器 */
server.listen(55555, function(){
    console.log("Creat server on http://127.0.0.1:8000/");
});