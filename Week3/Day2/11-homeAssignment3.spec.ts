// 10-homeAssignment3.spec.ts

import { test, expect } from "@playwright/test";

test('Leafground Check Boxes', async({page}) => {

    await page.goto('https://leafground.com/checkbox.xhtml');

    await page.locator('(//span[text()="Basic"])/parent::div').click();

    await page.locator('(//span[text()="Ajax"])/parent::div').click();

    // Verify that the expected message is displayed. - Pending - No message is displayed

    await page.locator('((//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"])/parent::div[@class="ui-chkbox ui-widget"])[3]').click();

    // Click on the "Tri-State Checkbox."
    // Verify which tri-state option has been chosen.
    await page.locator('((//div[@class="ui-chkbox ui-widget"])/div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"])[6]').click();

    const tristateCheck = await expect(page.locator('(//span[@class="ui-chkbox-icon ui-c ui-icon ui-icon-check"])/parent::div')).toHaveClass('ui-icon-check');

    console.log(`The tristate checked is ${tristateCheck}`);

    await page.locator('//div[@class="ui-toggleswitch-slider"]').click();

    // Verify that the expected message is displayed.

    // Verify if the Checkbox is disabled.

    await page.locator('//ul[@data-label="Cities"]').click();

    // Select multiple options on the page (details may be needed).
    // Perform any additional actions or verifications required.
    // Close the web browser when done.
    
    
});