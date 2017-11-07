var os = require("os");
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type.red);
    console.log('Release:', release.blue);
    console.log('CPU model:', cpu.grey);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min').yellow;
    console.log('User name:', userInfo.username.green);
    console.log('Home dir:', userInfo.homedir.cyan);
}



module.exports = {
	print: getOSinfo
}
