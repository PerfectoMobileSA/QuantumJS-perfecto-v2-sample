import DonatePage from '../pages/wikipedia/donate.page.js';
// import pageObjectMap from '../support/pageObjectMap.js'
import {  Then } from '@wdio/cucumber-framework';

let currentPage = new DonatePage();

Then(/^I select the amount and the payment method on donate page$/, async function () {
    console.log(typeof(currentPage))
    await currentPage.selectAmountAndPayment();
});

Then(/^I fill the form details on donate page$/, async function () {
    await currentPage.fillDonateForm();
});