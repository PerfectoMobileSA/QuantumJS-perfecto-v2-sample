import Page from './page.js'

export default class CalcPage extends Page {

    constructor() {
        super('calc')
    }

    async add(num1,num2){

        await $(this.loc.btn_clear).waitForVisible(20000);
        // clear
        await $(this.loc.btn_clear).click();
        // add
        console.log('btn_' + num1, this.loc['btn_' + num1]);
        await $(this.loc['btn_' + num1]).click();
        await $(this.loc.btn_add).click();
        await $(this.loc['btn_' + num2]).click();
        await $(this.loc.btn_equal).click();
    }

    async verifyResult(expectedResult){
        let actualResult = await browser.getText(this.loc.txtResult)
        await expect(actualResult).to.include(expectedResult)
        console.log('Actual Result is: ' + actualResult)
    }
}

// module.exports= CalcPage
