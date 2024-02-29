import BasePage from './base.page.js'

export default class DonatePage extends BasePage {

    constructor() {
        super('wikipedia/donate')
    }

    async selectAmountAndPayment() {
        await $(this.loc.justOnceButton).click();
        await $(this.loc.fivedButton).click();
        await $(this.loc.payButton).click();
    }

    async fillDonateForm() {
        await browser.setValueImmediate(this.loc.nameField, 'Eyal')
        await $(this.loc.lastNameField).click()
        await browser.setValueImmediate(this.loc.lastNameField, 'Yovel')
    }

};
// module.exports= DonatePage;
