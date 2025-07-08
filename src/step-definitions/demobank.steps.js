
import demoBank from '../pages/demobank.page.js';

import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^I login to with "([^"]*)" and "([^"]*)" credentials$/, async function (username, password) {
    let demoBankPage = new demoBank();
    await demoBankPage.init_locators();
    await demoBankPage.loginApplication(username, password);
});


Then(/^I verify successful Login$/, async function () {
    let demoBankPage = new demoBank();
    await demoBankPage.init_locators();
    return await demoBankPage.confirmSuccessfulLogin();
});


Then(/^I logout from the application successfully$/, async function () {
    let demoBankPage = new demoBank();
    await demoBankPage.init_locators();
    return await demoBankPage.logOutApplication();
});