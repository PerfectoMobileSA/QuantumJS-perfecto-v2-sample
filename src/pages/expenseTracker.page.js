import Page from './page.js';

import { assert } from 'chai';

export default class ExpenseTracker extends Page {

    constructor() {
        super('exptracker');
        this.capabilities = this.driverInstance["capabilities"];
        this.platform = this.capabilities.platformName;
    }

    async init_locators(){
        await super.init();
    }

    async loginApplication(username, password){

        console.log(`Platform: ${this.platform}`); // Access platform name

        let input_username = await this.driverInstance.$(this.loc.input_username);
        await input_username.setValue(username);
        
        let input_password = await this.driverInstance.$(this.loc.input_password);
        await input_password.setValue(password);
        let btn_login = await this.driverInstance.$(this.loc.btn_login);
        await btn_login.click();
    }

    async confirmSuccessfulLogin() {
        let el = await this.driverInstance.$(this.loc.btn_add);

        if (await el.isDisplayed()) {
            console.log("✅ Login successful");
        } else {
            throw new Error("❌ Login may have failed.");
        }
    }

    async createExpenseReport() {
        let addExpense = await this.driverInstance.$(this.loc.btn_add);
        await addExpense.click();

        let selectHead = await this.driverInstance.$(this.loc.list_head);
        await selectHead.click();

        let choseHead = await this.driverInstance.$(this.loc.text_flight);

        if (this.platform === 'Android') {
            await choseHead.click();
        }
        else {
            await choseHead.addValue('Flight');
        }

        let choseAmount = await this.driverInstance.$(this.loc.btn_seebar);
        await choseAmount.click();

        let selectCurrency = await this.driverInstance.$(this.loc.list_currency);
        await selectCurrency.click();


        let choseCurrency = await this.driverInstance.$(this.loc.text_currency);

        if (this.platform === 'Android') {
            await choseCurrency.click();
        }
        else {
            await choseCurrency.addValue('USD - $');
        }
        

        let selectCategory = await this.driverInstance.$(this.loc.list_category);
        await selectCategory.click();

        let choseCategory = await this.driverInstance.$(this.loc.text_category);


        if (this.platform === 'Android') {
            await choseCategory.click();
        }
        else {
            await choseCurrency.addValue('Business');
            let choseDate = await this.driverInstance.$(this.loc.text_date);
            await choseDate.click();
        }

        let submitExpense = await this.driverInstance.$(this.loc.btn_submit);
        await submitExpense.click();
        if (this.platform === 'iOS') {
            let confirmation = await this.driverInstance.$(this.loc.btn_ok);
            await confirmation.click();
        }
    }

    async confirmReportCreation() {
        const el = await this.driverInstance.$(this.loc.text_added_expense);
        if (await el.isDisplayed()) {
            console.log("✅ Expense Report added Successfully");
        } else {
            throw new Error("❌ Expense Report Addition Failed.");
        }
    }


    async logOutApplication() {
        let clickHambergmenu = await this.driverInstance.$(this.loc.btn_hambergMenu);
        await clickHambergmenu.click();

        let clickLogout = await this.driverInstance.$(this.loc.text_logout);
        await clickLogout.click();

        if (this.platform === 'Android') {
            let clickOk = await this.driverInstance.$(this.loc.btn_ok);
            await clickOk.click();
        }
    }


};