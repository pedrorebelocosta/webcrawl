// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')
const plugin = require('puppeteer-extra-plugin-stealth')

puppeteer.addExtra(plugin());

puppeteer.launch({ headless: true }).then(async browser => {

    console.log("Opening website...");
    const page = await browser.newPage();
    await page.goto('https://www.bet.pt/apostas-desportivas/futebol/');

    await page.waitFor(5000);
    const [e1] = await page.$x('/html/body/div[2]/div/div[2]/div/section[9]/div/div[2]/div[1]/div/div[2]');
    
    const text = await e1.getProperty('innerText');
    const rawTxt = await text.jsonValue();

    console.log({ rawTxt });

    browser.close();

});

