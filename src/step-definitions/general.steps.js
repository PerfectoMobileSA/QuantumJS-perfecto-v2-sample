import _ from 'lodash';
import { Given, When, Then } from '@wdio/cucumber-framework';
// import pageObjectMap from '../support/pageObjectMap.js'
import PageObjectMap from '../support/pageObjectMap.js';

Given('the {string} is at the {string} of google', async function (user, pageName) {
    await browser.url('http://www.google.com')
})

Given('.*\(covered by .*\)', async function () {
})

Given(/^I (?:am on|go to) the "([^"]*)" page$/, async function (pageName) {

    let pageObject = new PageObjectMap();
    
    let page =await pageObject.loadPageFile(pageName);

    await page.getPage();

});

Given(/^I (?:have|change to|resize to|rotate to) a (\d+)x(\d+) screen size$/, async function (width, height) {
    await browser.setViewportSize({
        width: parseInt(width, 10),
        height: parseInt(height, 10)
    });
});

When('I (?:navigate|click) (?:backwards|back) in my browser', async function () {
    await browser.back();
});


When(/^I type "([^"]*)" in(?:to)? the "([^"]*)" field$/, async function (text, fieldName) {

    let field
    //TODO: Write logic to create string to var names to replace cukefarm logic
    await  browser.setValueImmediate(fieldName, text);
});

When(/^I click the "([^"]*)"(?: )?(link|button|drop down list|tab|field|element|)$/, async function (elementName, elementType) {
    await browser.click(elementName);
})

When('I refresh the page', async function () {
    await browser.refresh();
})

When('I select "([^"]*)" in the "([^"]*)" drop down list', async function (optionText, list) {

});

Then('the title should equal "([^"]*)"', async function (text) {
});

Then('the "([^"]*)" (should|should not) be active', async function (tabName, expectation) {
});

Then('the "([^"]*)" (should|should not) be present', async function (el, expectation) {
});

Then(/^I (?:should be on|reach|am taken to) the "([^"]*)" page$/, async function (pageName) {

    let pageObject = new PageObjectMap();

    let page =await pageObject.loadPageFile(pageName);
    
    await page.waitForLoaded();
});

Then('(?:the )?"([^"]*)" should (?:have|contain) the text "([^"]*)"', async function (el, text) {
});

Then('"([^"]*)" should appear in the "([^"]*)" drop down list', async function (option, list) {
});

Then('the "([^"]*)" (should|should not) be displayed', async function (el, shouldBeDisplayed) {
   
});

Then('(?:the )?"([^"]*)" should (?:have|contain) the placeholder text "([^"]*)"', async function (el, text) {
   
});

Then('the "([^"]*)"(?: )?(button|field|drop down list|) (should|should not) be enabled', async function (el, elType, expectation) {
});

Then('"([^"]*)" should be (?:selected|displayed) in the "([^"]*)" drop down list', async function (optionText, list) {
});

Then('the "([^"]*)"(?: )?(checkbox|) (should|should not) be checked', async function (el, elType, expectation) {
});

When(/^I wait for (\d+) seconds(?:.*)$/, async function (seconds) {
    await browser.pause(seconds * 1000);
});