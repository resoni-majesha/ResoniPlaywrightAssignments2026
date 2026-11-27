// 05-hA1-alertsAndFrames.spec.ts

import {test, expect} from "@playwright/test";

test('Automating Alert & Frame Interactions', async({page}) => {
    
    page.on('dialog', async(alert) => {

        const message = alert.message();
        console.log(`Alert Message: ${message}`);
        
        const type = alert.type();
        console.log(`Alert Type: ${type}`);
        
        alert.accept();

    });


    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

    const allFrames = page.frames();
    
    console.log(`Number of Frames: ${allFrames.length}`);

    for (let i = 0; i < allFrames.length; i++)  {
        const url = allFrames[i].url(); 
        console.log(`The url of the frame is: ${url}`);

        const title = await allFrames[i].title();
        console.log(`The title of the frame in position ${i} is ${title}`);
        
    }

    // Handle frame using frame locator
    const frame = page.frameLocator('#iframeResult');
    await page.waitForTimeout(1000);
    await frame.locator('[onclick="myFunction()"]').click();
    await page.waitForTimeout(1000);
    await expect(frame.locator('#demo')).toHaveText('You pressed OK!');

    });