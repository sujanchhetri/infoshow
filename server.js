#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const os = require('os');
const chalk = require('chalk');
const pkg = require('package.json');

const u = argv.user || argv.u;
const o = argv.os || argv.o;
const n = argv.node || argv.n;
const V = argv.version || argv.V;
const h = argv.help || argv.h;

const usage = `
    Usage: show [(-uon | V | h)]

    -u, --user          User details  
    -o, --os            OS details
    -n, --node          Node details
    -V, --version       show version
    -h, --help          Show this screen
`;

if (h || (!u && !o && !n && !V)) {
    console.log(chalk.magentaBright(usage));
} else if (V) {
    console.log(chalk.magentaBright(`    ${pkg.name} version ${pkg.version}`));
} else {
    if (u) {
    const user = os.userInfo();
    const userInfo = `
    Username: ${user.username}
    Home directory: ${user.homedir}
    UID: ${user.uid}
    GID: ${user.gid}
    `;
    console.log(chalk.greenBright(userInfo));
}
if (o) {
    const osInfo = `
    Architecture: ${os.arch()}
    Platform: ${os.platform()}
    CPU model: ${os.cpus()[0].model}
    CPU count: ${os.cpus().length}
    Total RAM: ${os.totalmem()} bytes
    Free RAM: ${os.freemem()} bytes
    Uptime: ${os.uptime()} seconds
    `;
console.log(chalk.whiteBright(osInfo));
}

if (n) {
    const nodeInfo = `
    Version: ${process.versions.node}
    Executable: ${process.execPath}
    `;
    console.log(chalk.green(nodeInfo));
}
}