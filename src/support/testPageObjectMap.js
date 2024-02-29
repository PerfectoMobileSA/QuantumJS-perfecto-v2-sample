import pageObjectMap from './pageObjectMap.js'
const homePage = new pageObjectMap['HomePage']

console.log('Call a method from home page - ' + homePage.test());

module.exports.test = function () {

}
