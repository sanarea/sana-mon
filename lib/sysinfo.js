var _os = require('os');
var child_process = require('child_process');
class SysInfo {
    platform() {
        return process.platform;
    }
    cpuCount() {
        return _os.cpus().length;
    }
    sysUptime() {
        //seconds
        return _os.uptime();
    }
    processUptime() {
        //seconds
        return process.uptime();
    }

    // Memory
    freemem() {
        return _os.freemem() / (1024 * 1024);
    }

    totalmem() {
        return _os.totalmem() / (1024 * 1024);
    }

    freememPercentage() {
        return _os.freemem() / _os.totalmem();
    }

    freeCommand() {
        return new Promise((resolve, reject) => {
            child_process.exec('free -m', function (error, stdout, stderr) {
                var lines = stdout.split("\n");

                var str_mem_info = lines[1].replace(/[\s\n\r]+/g, ' ');

                var mem_info = str_mem_info.split(' ');

                total_mem = parseFloat(mem_info[1]);
                free_mem = parseFloat(mem_info[3]);
                buffers_mem = parseFloat(mem_info[5]);
                cached_mem = parseFloat(mem_info[6])

                used_mem = total_mem - (free_mem + buffers_mem + cached_mem)

                resolev(used_mem - 2);
            });

        });
         
    }
}

module.exports = new SysInfo();