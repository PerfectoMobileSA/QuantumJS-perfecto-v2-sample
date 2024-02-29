import HomePage from '../pages/wikipedia/home.page.js';

import { Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

// import pageObjectMap from '../support/pageObjectMap.js'

let currentPage = new HomePage();
    // pageObjectMap['HomePage'];

    Then(/^I search for "([^"]*)" value$/, async function (text) {
        await currentPage.search(text);
    });

    Then(/^I select "([^"]*)" language on home page$/, async function (language) {
        await currentPage.selectLanguage(language);
    });

    Then(/^I select donate to wikipedia link on home page$/, async function () {
        await currentPage.selectDonateWikiLink();
    });

    Then(/^I select discussion link on home page$/, async function () {
        await currentPage.selectDiscussionLink();
    });

    Then(/^I select portada link on home page$/, async function () {
        await currentPage.selectPortadaLink();
    });