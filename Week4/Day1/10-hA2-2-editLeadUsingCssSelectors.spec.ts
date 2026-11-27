// 10-hA2-2-editLeadUsingCssSelectors.spec.ts

import {test, expect} from "@playwright/test";

test('Edit Lead using CS Selectors', async({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await page.locator('#username').fill('Demosalesmanager');

    await page.locator('[id="password"]').fill('crmsfa');

    await page.locator('input[type="submit"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('text=CRM/SFA').click();

    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();

    await page.locator('[class="frameSection"]').click();

    await page.locator('[name="firstName"]').last().fill('Resoni');

    await page.locator('[class="x-btn-text"]').nth(6).click();

    await page.locator('[href="/crmsfa/control/viewLead?partyId=13808"]').first().click();

    await page.locator('a[class="subMenuButton"]').nth(2).click();

    let companyName = page.locator('#updateLeadForm_companyName');
    await companyName.clear();
    await companyName.fill('Wipro');

    let annualRevenue = page.locator('#updateLeadForm_annualRevenue');
    await annualRevenue.clear();
    await annualRevenue.fill('30 LPA');

    let departmentName = page.locator('[name="departmentName"]');
    await departmentName.clear();
    await departmentName.fill('HR');

    let description = page.locator('#updateLeadForm_description');
    await description.clear();
    await description.fill('Edit Lead');

    await page.locator('[name="submitButton"]').first().click();

    await expect(page.locator('//span[contains(text(),"Wipro")]')).toContainText('Wip');

    await expect(page.locator('//span[contains(text(),"30")]')).toContainText('30');

    await expect(page.locator('//span[contains(text(),"HR")]')).toHaveText('HR');

    await expect(page.locator('//span[contains(text(),"Edit Lead")]')).toContainText('Lead');
    
    let title = page.title();
    console.log((`The title of the page is ${title}`));
    

});