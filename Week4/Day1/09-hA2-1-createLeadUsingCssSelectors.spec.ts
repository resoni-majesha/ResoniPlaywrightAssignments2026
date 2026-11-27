// 09-hA2-1-createLeadUsingCssSelectors.spec.ts

import {test, expect} from "@playwright/test";

test('Create Lead using CSS Selector', async({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await page.locator('#username').fill('Demosalesmanager');

    await page.locator('[id="password"]').fill('crmsfa');

    await page.locator('input[type="submit"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('text=CRM/SFA').click();

    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();

    await page.locator('[href="/crmsfa/control/createLeadForm"]').click();

    await page.locator('#createLeadForm_companyName').fill('CTS');

    await page.locator('#createLeadForm_firstName').fill('Resoni');

    await page.locator('[name="lastName"]').nth(2).fill('Maje');

    await page.locator('[name="personalTitle"]').fill('Mrs');

    await page.locator('[name="generalProfTitle"]').fill('Senior Test Engineer');

    await page.locator('#createLeadForm_annualRevenue').fill('12 LPA');

    await page.locator('[name="departmentName"]').fill('Software Testing');

    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9600833555');

    await page.locator('input[type="submit"]').click();

    await expect(page.locator('//span[contains(text(),"CTS")]')).toContainText('CT');

    await expect(page.locator('//span[contains(text(),"Resoni")]')).toHaveText('Resoni');

    await expect(page.locator('//span[contains(text(),"Maje")]')).toContainText('Maj');

    await expect(page.locator('//span[contains(text(),"Assigned")]')).toContainText('Assigned');

    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    

});