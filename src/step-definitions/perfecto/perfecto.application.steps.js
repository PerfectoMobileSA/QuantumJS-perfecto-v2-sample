
/**
 * The class PerfectoApplicationSteps provides methods for working with applications, with cucumber steps annotations.
 * <p>
 * Contexts used for testing:
 * <ul>
 * <li><b>WEBVIEW</b> context is used to identify DOM based UI Elements.
 * <li><b>NATIVE_APP</b> context is used to identify UI Elements defined with OS-based classes.
 * <li><b>VISUAL</b> context is used to identify UI Elements with Perfecto visual analysis.
 * </ul>
 * <p>
 * Example: Working with a device.
 * <pre>
 * Scenario:
 * 	Given I go to the device home screen
 * 	Then I open browser to webpage "https://community.perfectomobile.com/"
 * 	Then I should see text "GETTING STARTED"
 * 	Then I take a screenshot and save to PRIVATE:dir1/dir2/name.png
 * </pre>
 *
 * @author shanil
 * @see <a href="https://github.com/PerfectoCode/Quantum/wiki/BDD-Implementation">BDD Implementation</a>
 * @see <a href="https://community.perfectomobile.com/series/20208/posts/1072062">Switching contexts</a>
 */
/**
     * Opens a native application with the application name.
     *
     * @param name the application name as it is displayed on the device screen
     */

import {  Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';

Then(/^I start application by name "([^"]*)"$/, async function (name) {

    console.log(name);
    await browser.perfStartApp('name',name)
    // Change to app context after open app
    await browser.switchContext('NATIVE_APP')
    console.log('browser.context', await browser.getContext())
})


/**
 * Opens a native application with the application id.
 *
 * @param id the identifier of the application
 * @see <a href="https://community.perfectomobile.com/series/21760/posts/995065">Application Identifier</a>
 */
Then(/^I start application by id "([^"]*)"$/, async function (id) {

    await browser.perfStartApp('identifier', id)
    // Change to app context after open app
    await browser.switchContext('NATIVE_APP')
})

/**
 * Closes a native application with the applicaiton name.
 *
 * @param name the application name as it is displayed on the device screen
 */
Then(/^I try to close application by name "([^"]*)"$/, async function (name) {

    await browser.perfCloseApp('name', name,true)
})

/**
 * Closes a native application with the applicaiton id.
 *
 * @param id the identifier of the application
 * @see <a href="https://community.perfectomobile.com/series/21760/posts/995065">Application Identifier</a>
 */
Then(/^I try to close application by id "([^"]*)"$/, async function (id) {

    await browser.perfCloseApp('identifier', id)
})

/**
 * Closes a native application with the applicaiton name.
 *
 * @param name the application name as it is displayed on the device screen
 */
Then(/^I close application by name "([^"]*)"$/, async function (name) {

    await browser.perfCloseApp('name', name)
})

/**
 * Closes a native application with the applicaiton id.
 *
 * @param id the identifier of the application
 * @see <a href="https://community.perfectomobile.com/series/21760/posts/995065">Application Identifier</a>
 */
Then(/^I close application by id "([^"]*)"$/, async function (id) {

    await browser.perfCloseApp('identifier', id);
});

/**
 * Cleans the data (including cache) from any application installed on the device and brings the application back to its initial state.
 *
 * @param name the application name as it is displayed on the device screen
 */
Then(/^I clean application by name "([^"]*)"$/, async function (name) {

    await browser.perfCleanApp('name', name);
});

/**
 * Cleans the data (including cache) from any application installed on the device and brings the application back to its initial state.
 *
 * @param id the identifier of the application
 * @see <a href="https://community.perfectomobile.com/series/21760/posts/995065">Application Identifier</a>
 */
Then(/^I clean application by id "([^"]*)"$/, async function (id) {

    await browser.perfCleanApp('identifier', id);
});

/**
 * Removes a single application on the device.
 *
 * @param name the application name as it is displayed on the device screen
 */
Then(/^I uninstall application by name "([^"]*)"$/, async function (name) {

    await browser.perfUninstallApp('name', name);
});

/**
 * Removes a single application on the device.
 *
 * @param id the identifier of the application
 * @see <a href="https://community.perfectomobile.com/series/21760/posts/995065">Application Identifier</a>
 */
Then(/^I uninstall application by id "([^"]*)"$/, async function (id) {

    await browser.perfUninstallApp('identifier', id);
});

/**
 * Installs a single application on the device.
 * <p>
 * To use, specify the local path to the application or the application repository key.
 * If the application repository key is specified, the application must first be uploaded to the Perfecto Lab repository.
 * <p>
 * To do this, log in to the Perfecto Lab interface and use the Repository manager.
 * Supported file formats include APK files for Android, IPA for iOS and COD for BlackBerry Devices.
 *
 * @param application the local or repository path, including directory and file name, where to locate the application
 */
Then(/^I install application "([^"]*)"$/, async function (application) {
    await browser.perfInstallApp(application);
});

/**
 * Installs a single application on the device, with instrumentation.
 * <p>
 * To use, specify the local path to the application or the application repository key.
 * If the application repository key is specified, the application must first be uploaded to the Perfecto Lab repository.
 * <p>
 * To do this, log in to the Perfecto Lab interface and use the Repository manager.
 * Supported file formats include APK files for Android, IPA for iOS and COD for BlackBerry Devices.
 *
 * @param application the local or repository path, including directory and file name, where to locate the application
 */
Then(/^I install instrumented application "([^"]*)"$/, async function (application) {
    await browser.perfInstallApp(application, true);
});


/**
 * Uninstalls all applications on the device, returning the device to its initial state. It does not affect applications pre-installed on the device.
 */
Then(/^I uninstall all applications$/, async function () {
    await browser.perfUninstallAllApps();
})

/**
 * Verifies the application version. The test will continue to run in case of failure.
 *
 * @param version the application version to verify
 * @return <code>true</code> if the version is verified, <code>false</code> otherwise
 */
Then(/^application version should be "([^"]*)"$/, async function (version) {
    await browser.perfVerifyAppInfo('version', version);
})

/**
 * Checks the application version. Stops the test in case of failure.
 *
 * @param version the application version to check
 */
Then(/^application version must be "([^"]*)"$/, async function (version) {
    await browser.perfAssertAppInfo('version', version)
})

/**
 * Verifies the application orientation. The test will continue to run in case of failure.
 *
 * @param orientation the application orientation to verify, landscape or portrait
 * @return <code>true</code> if the orientation is verified, <code>false</code> otherwise
 */
Then(/^application orientation should be "([^"]*)"$/, async function (orientation) {
    await browser.perfVerifyAppInfo('orientation', orientation)
})

/**
 * Checks the application orientation. Stops the test in case of failure.
 *
 * @param orientation the application orientation to check, landscape or portrait
 */
Then(/^application orientation must be "([^"]*)"$/, async function (orientation) {
    await  browser.perfAssertAppInfo('orientation', orientation)
})

/**
 * Clicks on a native or web element.
 *
 * Identify the object using the <i>Object Repository</i> or an XPath expression.
 *
 * @param locator the object identifier
 * @see <a href="https://github.com/PerfectoCode/Quantum/wiki/Object%20Repository">Object Repository</a>
 */
Then(/^I click on "([^"]*)"$/, async function (locator) {

    let driverInstance = await browser.getWebDriver();
    await driverInstance.$(locator).click();
})

/**
 * Clear element.
 *
 * Identify the edit field object using the <i>Object Repository</i> or an XPath expression.
 *
 * @param locator the object identifier
 * @see <a href="https://github.com/PerfectoCode/Quantum/wiki/Object%20Repository">Object Repository</a>
 */
Then(/^I clear "([^"]*)"$/, async function (locator) {
    let driverInstance = await browser.getWebDriver();
    await driverInstance.$(locator).clearElement();
})

/**
 * Sets the text of a application element. Use the text parameter to specify the text to set.
 *
 * Identify the edit field object using the <i>Object Repository</i> or an XPath expression.
 *
 * @param text the text to insert in the edit field
 * @param locator the object identifier
 * @see <a href="https://github.com/PerfectoCode/Quantum/wiki/Object%20Repository">Object Repository</a>
 */
Then(/^I enter "([^"]*)" to "([^"]*)"$/, async function (text,locator) {

    let driverInstance = await browser.getWebDriver();
    await driverInstance.$(locator).keys(text);
})


/**
 * Verifies whether an element exists in the application. The test will continue to run in case of failure.
 *
 * @param locator the object identifier
 * @return <code>true</code> if the element exists, <code>false</code> otherwise
 */
// TODO verify????
Then(/^"([^"]*)" should exist$/, async function (locator) {
    let driverInstance = await browser.getWebDriver();
    await driverInstance.$(locator).isExisting();
})

/**
 * Checks whether an element exists in the application. Stops the test in case of failure.
 *
 * @param locator the object identifier
 */
Then(/^"([^"]*)" must exist$/, async function (locator) {
    await $(locator).isExisting()
})

/**
 * Verifies that the text appears on the device screen, using visual analysis. The test will continue to run in case of failure.
 *
 * @param text the text to verify
 * @return <code>true</code> if the text exists, <code>false</code> otherwise
 */
Then(/^I should see text "([^"]*)"$/, async function (text) {
    await browser.perfVerifyVisualText(text);
})

/**
 * Checks that the text appears on the device screen, using visual analysis. Stops the test in case of failure.
 *
 * @param text the text to check
 */
Then(/^I must see text "([^"]*)"$/, async function (text) {
    await browser.perfAssertVisualText(text);
})

/**
 * Verifies that the image appears on the device screen, using visual analysis. The test will continue to run in case of failure.
 *
 * @param img the image to check
 */
Then(/^I must see image "([^"]*)" in "(\d+)" seconds with threshold "(\d+)" and needle bound "(\d+)"$/, async function (img, seconds, threshold, needleBound) {
    await browser.perfAssertVisualImage(img, seconds, threshold, needleBound)
})

/**
 * Checks that the image appears on the device screen, using visual analysis. Stops the test in case of failure.
 * <p>
 * To use, the image must first be uploaded to the Perfecto Lab repository.
 * <p>
 * To do this, log in to the Perfecto Lab interface and use the Repository manager.
 *
 * @param img the repository path, including directory and file name, where to locate the image
 * @see <a href="https://community.perfectomobile.com/posts/912493">Perfecto Lab Repository</a>
 */
Then(/^I should see image "([^"]*)" in "(\d+)" seconds with threshold "(\d+)" and needle bound "(\d+)"$/, async function (img, seconds, threshold, needleBound) {
    await browser.perfVerifyVisualImage(img, seconds, threshold, needleBound)
})


/**
 * Switch to context.
 *
 * @see <a href="https://community.perfectomobile.com/series/20208/posts/1072062">Switching contexts</a>
 */
Then(/^I switch to "([^"]*)" context$/, async function (context) {
    await browser.switchContext(context);
})


/**
 * Switch to native context (NATIVE_APP).
 *
 * @see <a href="https://community.perfectomobile.com/series/20208/posts/1072062">Switching contexts</a>
 */
Then(/^I switch to native context$/, async function () {
    await browser.switchContext("NATIVE_APP");
})

/**
 * Switch to web context (WEBVIEW).
 *
 * @see <a href="https://community.perfectomobile.com/series/20208/posts/1072062">Switching contexts</a>
 */
Then(/^I switch to webview context$/, async function () {
    await browser.switchContext("WEBVIEW");
})

/**
 * Switch to visual context (VISUAL).
 *
 * @see <a href="https://community.perfectomobile.com/series/20208/posts/1072062">Switching contexts</a>
 */
Then(/^I switch to visual context$/, async function () {
    await browser.switchContext("VISUAL");
})


/**
 * Waits the specified duration before performing the next script step.
 *
 * @param seconds the wait duration
 */
//TODO - implement
Then(/^I wait for "([^"]*)" seconds$/, async function (seconds) {
    await browser.pause([seconds]);
})

/**
 * Waits for the element to appear on the device screen.
 * <p>
 * Identify the element using the <i>Object Repository</i> or an XPath expression.
 *
 * @param seconds the wait duration
 * @param locator the object identifier
 */
Then(/^I wait for "([^"]*)" seconds for "([^"]*)" to appear$/, async function (seconds, locator) {
    await browser.waitForVisible(locator,seconds * 1000, true);
})

/**
 * Waits for the text to appear on the device screen, using visual analysis.
 *
 * @param seconds the wait duration
 * @param text the text to wait for to appear
 */
Then(/^I wait for "(\d+)" seconds to see the text "([^"]*)"$/, async function (seconds, text) {
    await browser.perfWaitForPresentTextVisual(text, seconds);
})

/**
 * Waits for the image to appear on the device screen, using visual analysis.
 *
 * @param seconds the wait duration
 * @param image the image to wait for to appear
 */
Then(/^I wait for "(\d+)" seconds to see the image "([^"]*)" with threshold "(\d+)" and needle bound "(\d+)"$/, async function (seconds, image, threshold, needleBound) {
    await browser.perfWaitForPresentImageVisual(image, seconds, threshold, needleBound);
})

/**
 * Opens the browser application and browses to the specified location.
 * <p>
 * This is done with a direct native command to the device OS, and not with navigation.
 *
 * @param url the specified URL
 */
Then(/^I open browser to webpage "([^"]*)"$/, async function (url) {
    await browser.url(url);
})



/**
 * Start image injection to the device camera to application using application name.
 *
 * @param repositoryFile the image repository file location
 * @param name the application name as it is displayed on the device screen
 */
Then(/^I start inject "([^"]*)" image to application name "([^"]*)"$/, async function (repositoryFile, name) {
    await browser.context("NATIVE_APP");
    await browser.perfStartImageInjection(repositoryFile, name, "name");
})


/**
 * Start image injection to the device camera to application using application name.
 *
 * @param repositoryFile the image repository file location
 * @param id the identifier of the application
 * @see <a href="https://community.perfectomobile.com/series/21760/posts/995065">Application Identifier</a>
 */
Then(/^I start inject "([^"]*)" image to application id "([^"]*)"$/, async function (repositoryFile, id) {
    await browser.context("NATIVE_APP");
    await browser.perfStartImageInjection(repositoryFile, 'id', id);
})

/**
 * Stop image injection.
 *
 */
Then(/^I stop image injection$/, async function () {
    await browser.perfStopImageInjection();
})

/**
 * Send fingerprint with success result to application with the applicaiton id.
 *
 * @param id the identifier of the application
 */
Then(/^I set fingerprint with success result to application by id "([^"]*)"$/, async function (id) {
    await browser.perfSetFingerprint('identifier', id,  'success');
})

/**
 * Send fingerprint with success result to application with the applicaiton name.
 *
 * @param name the name of the application
 */
Then(/^I set fingerprint with success result to application by name "([^"]*)"$/, async function (name) {
    await browser.perfSetFingerprint('name', name,  'success');
})

/**
 * Send fingerprint with fail result to application with the applicaiton id.
 *
 * @param errorType indicates why the authentication failed. May be authFailed, userCancel, userFallback, systemCancel, or lockout
 * @param id the identifier of the application
 */
Then(/^I set fingerprint with error type "([^"]*)" result to application by id "([^"]*)"$/, async function(errorType, id){
    await browser.perfSetFingerprint('identifier', id,  'fail', errorType);
})

/**
 * Send fingerprint with fail result to application with the applicaiton name.
 *
 * @param errorType indicates  why the authentication failed. May be authFailed, userCancel, userFallback, systemCancel, or lockout
 * @param name the name of the application
 */
Then(/^I set fingerprint with error type "([^"]*)" result to application by name "([^"]*)"$/, async function(errorType, name){
    await browser.perfSetFingerprint('name', name,  'fail', errorType)
})
/**
 * Send fingerprint with success result to application with the applicaiton id.
 *
 * @param id the identifier of the application
 */
Then(/^I set sensor authentication with success result to application by id "([^"]*)"$/, async function (id) {
    await browser.perfSetSensorAuthentication('identifier', id,  'success');
})

/**
 * Send fingerprint with success result to application with the applicaiton name.
 *
 * @param name the name of the application
 */
Then(/^I set sensor authentication with success result to application by name "([^"]*)"$/, async function (name) {
    await browser.perfSetSensorAuthentication('name', name,  'success');
})

/**
 * Send fingerprint with fail result to application with the applicaiton id.
 *
 * @param errorType indicates why the authentication failed. May be authFailed, userCancel, userFallback, systemCancel, or lockout
 * @param id the identifier of the application
 */
Then(/^I set sensor authentication with error type "([^"]*)" result to application by id "([^"]*)"$/, async function(errorType, id){
    await browser.perfSetSensorAuthentication('identifier', id,  'fail', errorType);
})
/**
 * Send fingerprint with fail result to application with the applicaiton name.
 *
 * @param errorType indicates  why the authentication failed. May be authFailed, userCancel, userFallback, systemCancel, or lockout
 * @param name the name of the application
 */
Then(/^I set sensor authentication with error type "([^"]*)" result to application by name "([^"]*)"$/, async function(errorType, name){
   await browser.perfSetSensorAuthentication('name', name,  'fail', errorType);
})

/**
 * This step will inject an audio from the given path into the device.
 *
 * @param audioFilePath
 *            - example: PUBLIC:Audio\\play25s1.wav
 */
Then(/^I inject an audio from "([^"]*)" into the device$/, async function(audioFilePath){
    await browser.perfAudioInject(audioInjectParams);
});

Then(/^I set sensor authentication with error type "([^"]*)" result to application by name "([^"]*)"$/, async function(errorType, name){
    await browser.perfSetSensorAuthentication('name', name,  'fail', errorType);
});

/**
 * This step will verify that the audio was played. Audio checkpoint will only
 * ensure that the audio was played and not the content of audio.
 */
Then(/^I verify the audio is received$/, async function(){
    await browser.perfVerifyAudioReceived()
});