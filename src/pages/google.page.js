import Page from './page.js';

import { assert } from 'chai';

export default class GooglePage extends Page {

    constructor() {
        super('google');
        this.siteHostPrefix = "http://google.com"
    }

    async init_locators(){
        await super.init();
    }

    async wrongSearch(text){
        let searchBox = await $(this.loc.searchTextBoxWrong);
        await searchBox.clearValue();
    }

    async search(text) {

        let searchBox = await $(this.loc.searchTextBox);
        await searchBox.clearValue();
        await searchBox.setValue(text);
 
        await browser.waitForEnabled(this.loc.searchBtn,5000);

        let searchBtn = await $(this.loc.searchBtn);
        await searchBtn.click();
    }

    async searchResult(result) {

        let resultElem = await $(`*=${result}`);
        const isResult = await resultElem.waitForDisplayed({timeout:3000, timeoutMsg: `Search result ${result} not visible`});
        // assert.equal(isResult, true, `Search result ${result} not visible`);
    }
};