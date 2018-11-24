const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const pkg = require('../package.json');
const Baidu = require('./config/baidu');

program
    .version(pkg.version, '-v, --version');

program
    .command('*')
    .description('百度文库')
    .action(async () => {
        const len = process.argv.length;
        const src = process.argv[len-1];
        console.log(chalk.yellow('当前的文件为' + src))
        const baidu = new Baidu(src);
        baidu.start();
    });
    
program.parse(process.argv);
