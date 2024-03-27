import Page from './page.js';

import { assert } from 'chai';

export default class GooglePage extends Page {

    constructor(pageName="Default") {
        super('google',pageName);
        this.siteHostPrefix = "http://google.com"
    }

    async init_locators(){
        await super.init();
    }

    async wrongSearch(text){
        let searchBox = await this.driverInstance.$(this.loc.searchTextBoxWrong);
        await searchBox.clearValue();
    }

    async search(text) {

        let searchBox = await this.driverInstance.$(this.loc.searchTextBox);
        await searchBox.clearValue();
        await searchBox.setValue(text);
 
        await this.driverInstance.$(this.loc.searchBtn).waitForEnabled({timeout: 5000});

        let searchBtn = await this.driverInstance.$(this.loc.searchBtn);
        await searchBtn.click();
    }

    async searchResult(result) {

        let resultElem = await this.driverInstance.$(`*=${result}`);
        const isResult = await resultElem.waitForDisplayed({timeout:3000, timeoutMsg: `Search result ${result} not visible`});
        // assert.equal(isResult, true, `Search result ${result} not visible`);
    }
};