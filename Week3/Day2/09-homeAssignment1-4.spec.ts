// 08-homeAssignment1-4.spec.ts

import { test } from "@playwright/test";

test('Edit Individuals - Salesforce',async({page}) => {

    await page.goto('https://login.salesforce.com');

    await page.locator('//input[@type="email"]').fill('resonimajesha@gmail.com');

    await page.locator('//button[@type="button"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('//input[@name="password"]').fill("Majeshamajee@123");

    await page.locator('//button[text()="Log In"]').click();

    await page.locator('//div[@class="slds-r5"]').click();

    await page.locator('//button[text()="View All"]').click();

    await page.locator('//p[text()="Individuals"]').click();

    await page.locator('//div[@class="search-input-group"]//button').fill('Maje');

    await page.locator('//a[@class="slds-button slds-button--icon-x-small slds-button--icon-border-filled"]').click();
    // long class name?

    await page.locator('//a[@title="Edit"]').click();

    await page.locator('[name="salutation"]').click();

    // Select Salutation dropdown - Pending

    await page.locator('//input[@name="firstName"]').fill('Resoni');

    await page.locator('//button[@name="SaveEdit"]').click();

    // Verify first Name

});