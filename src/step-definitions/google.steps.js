
import GooglePage from '../pages/google.page.js';

import { When, Then } from '@wdio/cucumber-framework';

When(/^I search for "([^"]*)"$/, async function (text) {
    let currentPage = new GooglePage("Default");
    await currentPage.init_locators();
    return await currentPage.search(text);
});

When(/^I search for "([^"]*)" wrong locator$/, async function (text) {
    let currentPage = new GooglePage();
    await currentPage.init_locators();
    return await currentPage.wrongSearch(text);
});

Then(/^It should have "([^"]*)" in search results$/, async function (result) {
    let currentPage = new GooglePage();
    await currentPage.init_locators();
    return await currentPage.searchResult(result);
});