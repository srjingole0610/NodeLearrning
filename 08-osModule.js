// OS MODULE

const os = require("os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
const uptime = os.uptime();

console.log(user);
console.log(`The sysyem uptime is : ${uptime}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
