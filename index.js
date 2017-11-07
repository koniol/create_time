var info = require("./modules/OSinfo");


process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var i =  info.convertSecond(3601);
    console.log(i);

    var j =  info.convertSecond(3662);
    console.log(j);

    var j =  info.convertSecond(62);

    console.log(j);
    if (input !== null) {
        var instruction = input.toString().trim();
        var nodeVer = process.versions.node;
        var osType = process.platform;

        switch (instruction) {
            case '/version':
                process.stdout.write(nodeVer + '\n');
                break;
            case '/lang':
                if((osType === "linux") || (osType === "darwin")){
                    process.stdout.write(osType + '\n');
                }else{
                    process.stderr.write('Bad system \n');
                }
                break;
            case '/exit':
                process.stdout.write('Goodbye!!!' + '\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction! \n');
                break
        }

    }
});