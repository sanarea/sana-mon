var osutils = require('./lib/osutils');
console.log("Platform: " + osutils.platform());
console.log("Number of CPUs: " + osutils.cpuCount());


(() => {

});

osutils.cpuUsage(function (v) {
    console.log("CPU Usage (%) : " + v);
});

console.log("Load Average (5m): " + osutils.loadavg(5));

console.log("Total Memory: " + osutils.totalmem() + "MB");

console.log("Free Memory: " + osutils.freemem() + "MB");

console.log("Free Memory (%): " + osutils.freememPercentage());

console.log("System Uptime: " + osutils.sysUptime() + "ms");



(async () => {
   


    
})();