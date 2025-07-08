
import ExpenseTracker from '../pages/expenseTracker.page.js';

import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I login to the application with "([^"]*)" and "([^"]*)" credentials$/, async function (username, password) {
    let expTracPage = new ExpenseTracker();
    await expTracPage.init_locators();
    await expTracPage.loginApplication(username, password);
});

Then(/^Login should be successful$/, async function () {
    let expTracPage = new ExpenseTracker();
    await expTracPage.init_locators();
    return await expTracPage.confirmSuccessfulLogin();
});

When(/^I will create the Flight expense report$/, async function () {
    let expTracPage = new ExpenseTracker();
    await expTracPage.init_locators();
    return await expTracPage.createExpenseReport();
});

Then(/^the report should successfully created$/, async function () {
    let expTracPage = new ExpenseTracker();
    await expTracPage.init_locators();
    return await expTracPage.confirmReportCreation();
});

Then(/^I logout from the application$/, async function () {
    let expTracPage = new ExpenseTracker();
    await expTracPage.init_locators();
    return await expTracPage.logOutApplication();
});