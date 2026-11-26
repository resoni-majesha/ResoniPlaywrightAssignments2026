// 09-homeAssignment2spec.ts

import { test, expect } from "@playwright/test";

test('Edit Individuals - Salesforce',async({page}) => {

    await page.goto('https://login.salesforce.com');

    await page.locator('//input[@type="email"]').fill('dilipkumar.rajendran@testleaf.com');

    await page.locator('//button[@type="button"]').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('//input[@name="password"]').fill("TestLeaf@2025");

    await page.locator('//button[text()="Log In"]').click();

    await page.locator('//div[@class="slds-r5"]').click();

    await page.locator('//button[text()="View All"]').click();

    await page.locator('(//input[@class="slds-input"])[7]').fill('Accounts');

    await page.locator('//p[text()="Accounts"]').click();

    await page.locator('(//div[@title="New"])[1]').click();

    await page.locator('//input[@name="Name"]').fill('ABC');

    // Select a value for Rating. N/A

    // Select a value for Type. - Unable to inspect dropdown values
    await page.locator('(//button[@class="slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value"])[1]').click();
    //Select

    // Select a value for Industry. - Unable to inspect dropdown values
    await page.locator('//button[@class="slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value"])[2]').click();
    //Select

    // Select a value for Ownership. N/A

    await page.locator('(//button[text()="Save"])[2]').click();

    await expect(page.locator('//lightning-formatted-text[text()="XYZ"]')).toContainText('//lightning-formatted-text[text()="XYZ"]');


});