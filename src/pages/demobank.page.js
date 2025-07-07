import Page from './page.js';

import { assert } from 'chai';

export default class demoBank extends Page {

    constructor() {
        super('demobank');
    }

    async init_locators(){
        await super.init();
    }


    async loginApplication(username, password){

        let input_username = await this.driverInstance.$(this.loc.edit_username);
        await input_username.setValue(username);
        
        let input_password = await this.driverInstance.$(this.loc.edit_password);
        await input_password.setValue(password);
        let btn_login = await this.driverInstance.$(this.loc.btn_submit);
        await btn_login.click();
    }

    async confirmSuccessfulLogin() {
        let el = await this.driverInstance.$(this.loc.text_page_title);

        if (await el.isDisplayed()) {
            console.log("✅ Login successful");
        } else {
            throw new Error("❌ Login may have failed.");
        }
    }


    async logOutApplication() {
        let clickHambergmenu = await this.driverInstance.$(this.loc.btn_avatar);
        await clickHambergmenu.click();

        let clickLogout = await this.driverInstance.$(this.loc.btn_logout);
        await clickLogout.click();

        await browser.pause(5000); // pauses for 3 seconds


    }


};