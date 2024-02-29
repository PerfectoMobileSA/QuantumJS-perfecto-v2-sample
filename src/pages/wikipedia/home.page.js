import BasePage from './base.page.js'

export default class HomePage extends BasePage {

    constructor() {
        super('wikipedia/home')
    }

    async submit () {
        await $(this.loc .searchwikiButton).click()
     }

    async search (text) {
        await $(this.loc.searchwikiField).clearElement()
        await $(this.loc.searchwikiField).setValue(text)
        await this.submit()
    }

    test () {
        return "this.loc" + this.loc.loadCheck
    }

    async selectLanguage(language) {
        if(language === 'English') {
            await $(this.loc.enLink).click()
        } else if(language === 'Espanol') {
            await $(this.loc.esLink).click()
        }
    }

    async selectDonateWikiLink() {
        await $(this.loc.donateLink).click()
    }

    async selectDiscussionLink() {
        await $(this.loc.discussionLink).waitForExist(10000);
        await $(this.loc.discussionLink).click();
    }

    async selectPortadaLink() {
        await $(this.loc.portadaLink).waitForExist(10000);
        await $(this.loc.portadaLink).click();
    }
};

// module.exports= HomePage;