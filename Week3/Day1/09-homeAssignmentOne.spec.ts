// 09-homeAssignmentOne.spec.ts

import { test } from  '@playwright/test';

test('Create a Lead using CSS selectors', async({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await page.locator('#username').fill('democsr2');

    await page.locator('#password').fill('crmsfa');

    await page.locator('.decorativeSubmit').click();

    await page.locator('text = CRM/SFA').click();

    await page.waitForLoadState('domcontentloaded');

    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();

    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

    await page.locator('#createLeadForm_companyName').fill('CTS');

    await page.locator('input[id=createLeadForm_firstName]').fill('Resoni');

    await page.locator('#createLeadForm_lastName').fill('Majesha');

    await page.locator('input[id=createLeadForm_personalTitle]').fill('Mrs');

    await page.locator('#createLeadForm_generalProfTitle').fill('Senior Quality Engineer');

    await page.locator('#createLeadForm_annualRevenue').fill('9');

    await page.locator('#createLeadForm_departmentName').fill('Software Testing');

    let dropDownValues = page.locator('#createLeadForm_dataSourceId>option');

    let dropDownCount = await dropDownValues.count();
    console.log(dropDownCount);

    for(let i = 0; i < dropDownCount; i++) {
        console.log(await dropDownValues.nth(i).innerText());
        
    }
    
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9600833510');

    await page.locator('.smallSubmit').click();



});