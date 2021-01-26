var axios = require('axios'),
chalk = require('chalk');




function Delay(msg,time){
setTimeout(() => console.log('\n'+chalk.yellowBright.bold(msg)+'\n'),time*1000)
}