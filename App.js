#!/usr/bin/env node
var axios = require('axios'),
chalk = require('chalk');

(async () => {
var reddit = await Random();
Delay('\n So, I heard you wanna startup... \n',1)
.then(() => Delay('\n You sure about that ? ... \n ',2))
.then(() => Delay('\n Ideas are easy but Implementation is hard ? ... \n ',1))
.then(() => Delay('\n If you have enough funds , experience and support you can do it  ? ... \n ',3))
.then(() => Delay('\n We Have a lot of sucess stories \n ',1))
.then(() => console.log(`\n  ${reddit.url} \n `))
.then(() => Delay(`\n  ${reddit.title} \n `,2))
})();



function Delay(msg,time){
return new Promise((res) => setTimeout(() => res(console.log('\n'+chalk.yellowBright.bold(msg)+'\n')), time*1000))
}
async function Random() {
var data = await axios.get('https://www.reddit.com/r/startups/new/.json'),
rand = Math.floor(Math.random()*data.data.data.children.length);
return {
title:data.data.data.children[rand].data.title,
url:data.data.data.children[rand].data.url,
}
}
