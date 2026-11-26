// 07-homeAssignment1-2.spec.ts'

import { test } from "@playwright/test";

test('Edit Lead in Leaftaps Page', async({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await page.locator('//input[@id="username"]').fill('democsr');

    await page.locator('//input[@id="password"]').fill('crmsfa');

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM/SFA")]').click();

    await page.locator('//div[@class="x-panel-header"]/a[text()="Leads"]').click();

    await page.locator('//ul[@class="shortcuts"]//a[text()="Create Lead"]').click();

    await page.locator('(//input[@name="companyName"])[2]').fill('CTS');

    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Resoni');

    await page.locator('//input[@id="createLeadForm_lastName"]').fill('Majesha');

    await page.locator('//input[@name="submitButton"]').click();

    await page.locator('//a[text()="Edit"]').click();

    await page.locator('(//input[@name="companyName"])[2]').fill('Cognizant');

    await page.locator('(//input[@class="smallSubmit"])[1]').click();


});

