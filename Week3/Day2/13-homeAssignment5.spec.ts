// 

import { test, expect } from "@playwright/test";

test('Leafground Radio Buttons', async({page}) => {

    await page.goto('https://leafground.com/radio.xhtml');

    const radioButton = page.locator('[class="ui-radiobutton-icon ui-icon ui-icon-bullet ui-c"]').nth(3);
    await radioButton.click();

    // Identify and assert the default selected radio button.
    await expect(radioButton).toBeChecked();

    await page.locator('text=Chrome').nth(0).click();

    // assert that the browser is enabled. ?

    await page.locator('text=Chennai').nth(0).click();

    await page.locator('text = 1-20 Years').click();

    // Assert the default selected button.



});