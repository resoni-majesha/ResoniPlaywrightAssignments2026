// 09-homeAssignment1

import { chromium, webkit, test } from "@playwright/test";

test ('Open Redbus in Edge and Flipkart in Webkit', async() => {

    // Edge Browser
    let browser1 = await chromium.launch({channel: 'msedge'});
    let context1 = await browser1.newContext();
    let page1 = await context1.newPage();

    await page1.goto('https://www.redbus.in/');

    console.log('Redbus Title: ', await page1.title());
    console.log('Redbus url: ', page1.url());

    //WebKit Browser
    let browser2 = await webkit.launch();
    let context2 = await browser2.newContext();
    let page2 = await context2.newPage();

    await page2.goto('https://www.flipkart.com/');

    console.log('Flipkart Title: ', await page2.title());
    console.log('Flipkart url: ', page2.url()); 

});