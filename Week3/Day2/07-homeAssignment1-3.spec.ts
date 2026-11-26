// 07-homeAssignment1-3.spec.ts

import { test, expect } from "@playwright/test";

test('Create Individuals - Salesforce', async({page}) => {

    await page.goto('https://login.salesforce.com');

    await page.locator('//input[@type="email"]').fill('resonimajesha@gmail.com');

    await page.locator('//button[@type="button"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('//input[@name="password"]').fill("Majeshamajee@123");

    await page.locator('//button[text()="Log In"]').click();

    await page.locator('//div[@class="slds-r5"]').click();

    await page.locator('//button[text()="View All"]').click();

    await page.locator('//p[text()="Individuals"]').click();

    // Click on the Dropdown icon in the Individuals tab - Pending

    await page.locator('//span[text()="New Individual"]').click();

    await page.locator('//input[@class="lastName compoundBorderBottom form-element__row input"]').fill('Maje');

    await page.locator('//span[text()="Save"]').click();

    await expect(page.locator('(//span[text()="Maje"])[3]')).toContainText('Maje');

});