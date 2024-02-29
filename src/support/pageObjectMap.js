// let  files, extraFiles, extraFilesPattern, i, page

import globule from "globule";
import path from "path";
import { createRequire } from "module";

export default class PageObjectMap{

    pageObjectMap = {};
    constructor(){
    }

    async loadPageFile(pageName){
        const files = globule.find(`**/pages/**/${pageName}.page.js`);
        const require = createRequire(import.meta.url);

        let filePath = path.resolve(files[0]);
        let Page = await import(filePath);

        return new Page.default();
    } 

    async init(){
        const files = globule.find('**/pages/**/*.page.js');

        
        const require = createRequire(import.meta.url);

        if (process.env.TEST_ASSET_PATH) {
            extraFilesPattern = process.env.TEST_ASSET_PATH + '/**/*.page.js';
            console.debug('searching for extra page objects using ' + extraFilesPattern);
            extraFiles = globule.find(extraFilesPattern);
            if (extraFiles.length > 0) {
                console.debug('found ' + extraFiles.length + ' extra page objects');
                files = files.concat(extraFiles);
            }
        }

        console.log("=======================================");
        files.forEach(async file => {
            // import page from path.resolve(file);
            
            var pageName = path.basename(file).split(".page.js")[0];

            let filePath = path.resolve(file);
            let page = await import(filePath);
            this.pageObjectMap[pageName] = page;
        });

        console.log("=======================================");
        console.log(this.pageObjectMap);
    }
}

// const globule = require('globule')
// const path = require('path')

// files = globule.find('**/pages/**/*.page.js');

// console.debug('found ' + files.length + ' common page objects..');



// let pageObjectTimingLabel = "page object load duration";
// console.time(pageObjectTimingLabel);
// for (i = 0; i < files.length; i++) {
//     page = require(path.resolve(files[i]));
//     // commenting this out to reduce noise in job outout - uncomment locally for debug if required
//      console.debug('adding page [' + page.name + ']');
//     module.exports[page.name] = page;
// }


// console.timeEnd(pageObjectTimingLabel);
