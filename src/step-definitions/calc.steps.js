import pageObjectMap from '../support/pageObjectMap.js';
import CalcPage from '../pages/calc.page.js';
import {  When, Then } from '@wdio/cucumber-framework';

let currentPage = new CalcPage();

    When(/^I add "(\d+)" to "(\d+)"$/, async function (num1, num2) {
        await browser.context('NATIVE_APP');

        await currentPage.add(num1,num2);
    });

    Then(/^the result should be "(\d+)"$/, async function (result) {
        await currentPage.verifyResult(result);
    })