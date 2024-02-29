import fs from'fs';
import _ from 'lodash';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Page {

    constructor(pageName) {

        this.pageName = pageName || this.getPageName();
        this.siteHostPrefix = '';
        
        let capabilities = browser["capabilities"];
        this.repoLocationKey = capabilities.repoLocationKey || capabilities.platformName;
        this.baseLocatorsPath = '../page-locators';
        
        // default url
        this.url = '/'
    }

    async init(){

        const pageName = await this.getPageName();
        const locators = await this.locators(pageName);
        const selectors = await locators.selectors;
        this.loc = this.loc || {};
        this.loc = await _.merge(this.loc, selectors);
    }

    async open (path) {
        await browser.url(path);
    }

    // load page
    async getPage() {
        
        await browser.url(this.siteHostPrefix)
        
        await this.init();

        await $(this.loc.loadCheck).waitForExist({
            timeout: 5000
        });
        
    }

    async waitForLoaded() {
        await $(this.loc.loadCheck).waitForExist({
            timeout: 5000
        });
        // await browser.waitForExist(this.loc.loadCheck,5000)
    }

    async locators(pageName) {

        const commonLocFile = await path.join(__dirname, this.baseLocatorsPath+'/common/'+pageName+'.page.loc.js');

        const platformLocFile =  await path.join(__dirname, this.baseLocatorsPath+'/'+this.repoLocationKey.toLowerCase()+'/'+pageName+'.page.loc.js');

        let commonLoc, platformLoc;

        if (fs.existsSync(commonLocFile)) {
            commonLoc = await import(commonLocFile);
        }

        if (fs.existsSync(platformLocFile)) {
            platformLoc = await import(platformLocFile);
        }

        if (_.isUndefined(platformLoc)) {
            if (_.isUndefined(commonLoc)) {

                console.log(`common loc not defined!!!! - ${commonLocFile}`);
                // throw new Error("Locator file for " + pageName + " is undefined!");
                return {selectors: {}};
            }

            return  commonLoc.default;
        }
        else {
            if (_.isUndefined(commonLoc)) {
                return platformLoc
            }

            const mergeLoc = _.merge(commonLoc.default, platformLoc.default);
            return mergeLoc
        }
    }

    async getPageName () {
        let name =  this.pageName || __filename.split(__dirname+"/").pop().split('\.')[0]
        return await name;
    }
};
// module.exports = Page;
