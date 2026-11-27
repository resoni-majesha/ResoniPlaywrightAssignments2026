// 08-hA1-createLeadusingPlaywrightLocators.spec.ts

import test from "@playwright/test";

test('Create Lead using Playwright Locators', async({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await page.getByRole('textbox', {name:'Username', exact:true}).fill('Demosalesmanager');

    await page.getByLabel('Password', {exact:true}).fill('crmsfa');

    await page.getByRole('button', {name:'Login', exact:true}).click();

    await page.getByText('CRM/SFA').click();

    await page.getByRole('link', {name:'Leads', exact:true}).click();

    await page.getByRole('link', {name:'Create Lead', exact:true}).click();

    // Fill form -?


    await page.getByRole('button', {name:'Role', exact: true}).nth(1).click();

    console.log('Used Playwright locators to create lead');
    




})