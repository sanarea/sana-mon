var _os = require('os');
var child_process = require('child_process');
class Utils {
    execSync(command) {
        return new Promise((resolve, reject) => {
            child_process.exec(command, function (error, stdout, stderr) {


                resolve({
                    error,
                    stdout,
                    stderr
                });
            });

        });
    }
}

module.exports = new Utils();