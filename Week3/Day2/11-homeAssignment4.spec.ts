// 11-homeAssignment4.spec.ts

import { test } from "@playwright/test";

test('Dropdown - Leafground', async({page}) => {

    await page.goto('https://leafground.com/select.xhtml');

    await page.locator('[class="ui-selectonemenu"]').selectOption({value:'Selenium'});

    await page.locator('[class="ui-selectonemenu"]').selectOption({index:2});

    await page.locator('[class="ui-selectonemenu"]').selectOption({label:'Puppeteer'});

    const dropDownValues = page.locator('[class="ui-selectonemenu"]>option');

    const dropDownCount = await dropDownValues.count();
    console.log(`Dropdown count ${dropDownCount}`);

    for(let i = 0; i<dropDownCount; i++) {

        console.log(await dropDownValues.nth(i).innerText());
        
    }

    await page.locator('text=Select Country').nth(1).click();

    await page.locator('li[data-label="Brazil"]').click();

    await page.locator('text=Select City').nth(1).click();

    await page.locator('//li[text() = "Salvador"]').click();

    await page.locator('[class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('[data-item-value="AWS"]').click();

    await page.locator('//li[@data-item-label="Playwright"]').click(); // Unable to select

    // await page.locator('li[data-item-label="RestAssured"]').click(); Unable to select RestAssured

    // await page.waitForTimeout(1000);

    await page.locator('text = Select Language').nth(1).click();

    await page.locator('text=English').nth(3).click();

    await page.locator('text=Select Values').click();

    // Choose a language and print all the values from the dropdown. 
    // const dropDownValues1 = await page.locator()

    await page.locator('[data-label="Two"]').click();



});
