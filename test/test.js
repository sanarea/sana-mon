const Utils = require("../lib/utils");

(async () => {
    let {
        error,
        stdout,
        stderr
    } = await Utils.execSync("ls -al");

    var lines = stdout.split("\n");
    console.log(lines);
    lines.shift();
    console.log(lines);
    lines.pop();
    console.log(lines);
})();