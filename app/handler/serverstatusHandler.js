
const aerospikeConnect = require('./../connector/aerospike/connect');
//const client = require('twilio')();
var request = require('request');
var cheerio = require('cheerio');
const puppeteer = require('puppeteer');

// let scrape = async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     console.log("1");
//     await page.goto('https://www.moneycontrol.com/india/stockpricequote/computers-software/infosys/IT');
//     //await page.$eval('input[name=q]', el => el.value = 'infy share price');
//     //await page.waitFor(1000);
//     //await page.click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b');
//     await page.waitFor(5000);
//     console.log("2");

//     const result = await page.evaluate(() => {
//         console.log("3");
//         console.log("document.querySelector('#lastPrice')", document.querySelector('.Bse_Prc_tick'));

//         return { title: "Suagnth", document }
//         // let title = document.querySelector('#lastPrice').innerText;
//         // let price = document.querySelector('.price_color').innerText;

//         // console.log("4");
//         // return {
//         //     title,
//         //     price
//         // }

//     });

//     browser.close();
//     return result;
// };

// async function getPic() {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto('https://google.com');
//     await page.setViewport({ width: 1000, height: 500 })
//     await page.screenshot({ path: 'google.png' });

//     await browser.close();
// }

const serverstatusHandler = async (request, reply) => {
    // getPic();
    scrape().then((value) => {
        console.log(value); // Success!
        //reply.send(value);
    })
    reply.send({ data: { message: "Sever is Up!" } });
}

module.exports = serverstatusHandler;
