// 06-homeAssignment1.spec.ts06-homeAssignment1.spec.ts

import { expect,test } from '@playwright/test';

test('Create Lead - Salesforce', async({page}) => {

    await page.goto('https://login.salesforce.com');

    await page.locator('//input[@type="email"]').fill('resonimajesha@gmail.com');

    await page.locator('//button[@type="button"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('//input[@name="password"]').fill("Majeshamajee@123");

    await page.locator('//button[text()="Log In"]').click();

    await page.waitForTimeout(2000);

    await page.locator('//div[@class="slds-r5"]').click();

    await page.locator('//button[text()="View All"]').click();

    await page.locator('//p[text()="Sales"]').click();

    await page.locator('//a[@title="Leads"]/span').click();

    await page.locator('//button[text()="New"]').click();

    await page.locator('[name="salutation"]').click();

    // Select Salutation dropdown - Pending

    await page.locator('//input[@name="lastName"]').fill('Maje');

    await page.locator('//input[@name="Company"]').fill('CTS');

    await page.locator('(//button[text()="Save"])[2]').click();

    // Verify Leads name created ???

    // await expect(page.locator('[slot="primaryField"]')).toContainText('Mrs.  Maje');

});