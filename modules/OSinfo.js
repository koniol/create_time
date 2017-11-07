var os = require("os");

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
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

function convertSecond( second ) {
    var s = second %60;
    var m = (second % 60).toFixed(0);
    var h = (second / 3600).toFixed(0);

    var hDisplay = h >= 1 ? h + (h == 1 ? " godzina, " : " godzin, ") : "";
    var mDisplay = m >= 1 && m <60 ? m + (m == 1 ? " minuta, " : " minuty ") : "";
    var sDisplay = s >= 1 && s <60 ? s + (s == 1 ? " sekunda" : " sekundy") : "";

    return hDisplay + mDisplay + sDisplay;

}

module.exports = {
	print: getOSinfo,
    convertSecond: convertSecond
}
exports.print = getOSinfo;