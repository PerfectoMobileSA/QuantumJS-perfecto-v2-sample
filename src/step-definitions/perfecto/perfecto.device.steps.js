/**
 * The class PerfectoDeviceSteps provides methods for working with a device,
 * with cucumber steps annotations.
 * <p>
 * Example: Working with a device.
 *
 * <pre>
 * Scenario:
 *    Given I go to the device home screen
 *    Then I open browser to webpage "https://community.perfectomobile.com/"
 *    Then I should see text "GETTING STARTED"
 *    Then I take a screenshot and save to PRIVATE:dir1/dir2/name.png
 * </pre>
 *
 * @author shanil
 * @see <a href=
 *      "https://github.com/PerfectoCode/Quantum/wiki/BDD-Implementation">BDD
 *      Implementation</a>
 *
 */

import {  Then } from '@wdio/cucumber-framework';

Then(/^I rotate the device to landscape$/, async function () {
    await browser.perfRotateDevice("state", "landscape");
})

/**
 * Rotates the device to portrait mode.
 */
Then(/^I rotate the device to portrait$/, async function () {
    await browser.perfRotateDevice("state", "portrait");
})

/**
 * Rotates the device to its next state.
 */
Then(/^I rotate the device$/, async function () {
    await browser.perfRotateDevice("operation", "next");
})

/**
 * Sets the device location using latitude,longitude coordinates (decimal
 * degrees) format. This enables testing a location-aware app that uses Location
 * Services, without moving the device from place to place to generate location
 * data.
 * <p>
 * Confirm that the "Allow mock locations" setting is enabled. Go to: Settings,
 * Developer options, Allow mock locations.
 * <p>
 * Example: 43.642659,-79.387050
 *
 * @param coordinates
 *            the location coordinates to set
 */
Then(/^I set the device location to the coordinates "([^"]*)"$/, async function (coordinates) {
    await browser.perfSetLocation('coordinates', coordinates);
})

/**
 * Sets the device location using address (Google Geocoding) format. This
 * enables testing a location-aware app that uses Location Services, without
 * moving the device from place to place to generate location data.
 * <p>
 * Confirm that the "Allow mock locations" setting is enabled. Go to: Settings,
 * Developer options, Allow mock locations.
 * <p>
 * Example: 1600 Amphitheatre Parkway, Mountain View, CA
 *
 * @param address
 *            the location address to set
 */
Then(/^I set the device location to the address "([^"]*)"$/, async function (address) {
    await browser.perfSetLocation('address', address);
})
/**
 * Checks the device location using latitude,longitude coordinates (decimal
 * degrees) format. Stops the test in case of failure.
 * <p>
 * Example: 43.642659,-79.387050
 *
 * @param coordinates
 *            the location coordinates to check
 */
Then(/^The device coordinates must be "([^"]*)"$/, async function (coordinates) {
   await browser.perfAssertLocation(coordinates);
})

/**
 * Verifies the device location using latitude,longitude coordinates (decimal
 * degrees) format. The test will continue to run in case of failure.
 * <p>
 * Example: 43.642659,-79.387050
 *
 * @param coordinates
 *            the location coordinates to verify
 * @return <code>true</code> if the location is verified, <code>false</code>
 *         otherwise
 */
Then(/^The device coordinates should be "([^"]*)"$/, async function (coordinates) {
    await browser.perfVerifyLocation(coordinates);
})

/**
 * Resets the device location. This command should be used after the setting the
 * location to stop setting the device location.
 * <p>
 * This operation returns the device to its current location.
 */
Then(/^I reset the device location$/, async function () {
    await browser.perfResetLocation();
})

/**
 * Brings the device to its idle / home screen. This is done by navigating the
 * device back to the home screen.
 * <p>
 * For iOS and Android devices, the device is unlocked and returned to its
 * default rotate orientation.
 * <p>
 * Use this command at the beginning of a script, to ensure a known starting
 * point for the user.
 */
Then(/^I go to the device home screen$/, async function () {
    await browser.perfGoToHomeScreen();
})

/**
 * Performs the swipe gesture to the left.
 */
Then(/^I swipe left$/, async function () {
    await browser.perfSwipe("60%,50%", "10%,50%");
})

/**
 * Performs the swipe gesture to the right.
 */
Then(/^I swipe right$/, async function () {
    await browser.perfSwipe("40%,50%", "90%,50%");
})

/**
 * Performs the scroll up gesture.
 */
Then(/^I scroll up$/, async function () {
    await browser.perfSwipe("50%,40%", "50%,60%");
})

/**
 * Performs the scroll down gesture.
 */
Then(/^I scroll down$/, async function () {
    await browser.perfSwipe("50%,60%", "50%,40%");
})

/**
 * Locks the device screen for the duration set in seconds, and unlocks the
 * device.
 *
 * @param seconds
 *            the lock screen duration
 */
Then(/^I lock the device for "([^"]*)" seconds$/, async function (seconds) {
   await browser.perfLockDevice(seconds);
})

/**
 * Sets the device timezone.
 *
 * @param timezone
 *            the new timezone Id
 */
Then(/^I set timezone to "([^"]*)"$/, async function (timezone) {
    await browser.perfSetTimezone(timezone);
})

/**
 * Checks the device timezone. Stops the test in case of failure.
 *
 * @param timezone
 *            the new timezone Id to check
 */
Then(/^The device timezone must be "([^"]*)"$/, async function (timezone) {
    console.log("he device timezone must be  ")
    await browser.perfAssertTimezone(timezone);
})

/**
 * Verifies the device timezone. The test will continue to run in case of
 * failure.
 *
 * @param timezone
 *            the timezone Id to verify
 * @return <code>true</code> if the timezone is verified, <code>false</code>
 *         otherwise
 */
Then(/^The device timezone should be "([^"]*)"$/, async function (timezone) {
    console.log("he device timezone should be  ")
    await browser.perfVerifyTimezone(timezone);
})

/**
 * Resets the device timezone Id to the default.
 */
Then(/^I reset the device timezone$/, async function () {
    await browser.perfResetTimezone();
})

/**
 * Gets a digital screenshot of the current screen display, and places it in the
 * report.
 */
Then(/^I take a screenshot$/, async function () {
    await browser.perfTakeScreenshot();
})

/**
 * Gets a digital screenshot of the current screen display, and saves it to the
 * repository.
 *
 * @param repositoryPath
 *            the full repository path, including directory and file name, where
 *            to save the file. Example - PRIVATE:dir1/dir2/name.png
 */
Then(/^I take a screenshot and save to "([^"]*)"$/, async function (repositoryPath) {
    await browser.perfTakeScreenshot(repositoryPath, true);
})

/**
 * Hides the virtual keyboard display.
 */
Then(/^I hide keyboard$/, async function () {
    await browser.perfHideKeyboard();
})

Then(/^I press mobile "([^"]*)" key$/, async function (keySequence) {
    await browser.perfPressKey(keySequence);
})

/**
 * Performs the touch gesture according to the point coordinates.
 *
 * @param point
 *            write in format of x,y. can be in pixels or
 *            percentage(recommended) for example 50%,50%.
 */
Then(/^I touch on "([^"]*)" point$/, async function (point) {
    await browser.perfTouch(point);
})

/**
 * Performs the double touch gesture according to the point coordinates.
 *
 * @param point
 *            write in format of x,y. can be in pixels or
 *            percentage(recommended) for example 50%,50%.
 */
Then(/^I double click on "([^"]*)" point$/, async function (point) {
    await browser.perfDoubleTouch(point);
})


/**
 * Performs the double touch gesture according to the point coordinates.
 *
 * @param locator
 *            write in format of x,y. can be in pixels or
 *            percentage(recommended) for example 50%,50%.
 */
Then(/^I double click on "([^"]*)"$/, async function (locator) {

    let myElement = await $(locator);

    let location = await myElement.getLocation()
    let size = await myElement.getElementSize()

    // determine location to click and convert to an appropriate string
    let xToClick = location.x + (size.width / 2)
    let yToClick = location.y + (size.height / 2)
    let clickLocation = xToClick + "," + yToClick

    await browser.perfDoubleTouch(clickLocation);

})

/**
 * Performs the lo touch gesture according to the point coordinates.
 *
 * @param locator
 *            write in format of x,y. can be in pixels or
 *            percentage(recommended) for example 50%,50%.
 */
Then(/^I tap on "([^"]*)" for "([^"]*)" seconds$/, async function (locator, seconds) {
    let myElement = await $(locator)

    let location = await myElement.getLocation()
    let size = await myElement.getElementSize()

    // determine location to click and convert to an appropriate string
    let xToClick = location.x + (size.width / 2)
    let yToClick = location.y + (size.height / 2)
    let clickLocation = xToClick + "," + yToClick

    await browser.perfLongTouch(clickLocation, seconds)
})

/**
 * Generate Har file. The HAR file will be included in the Reporting artifacts
 * for the automation report.
 *
 */
Then(/^Start generate Har file$/, async function () {
    await browser.perfGenerateHAR();
})

/**
 * Stop generatimg Har file.
 *
 */
Then(/^Stop generate Har file$/, async function () {
    await browser.perfStopGenerateHAR();
})

/**
 * Add Comment to Report
 *
 */
Then(/^Add report comment "([^"]*)"$/, async function (comment) {
    await browser.perfReportComment(comment);
})

/**
 * Picks the previous value of the specific pickerwheel
 * @param locator - The pickerwheel element must be this specific
 *                    type ("XCUIElementTypePickerWheel"), not “XCUIElementTypePicker”
 *                    or any other parent/child of the pickerwheel.
 */
Then(/^I validate "([^"]*)" has the value "([^"]*)"$/, async function (locator, value) {
    let message = `The value did not match`;
    let assertMethod = async () => assert.equal(await $(locator).getAttribute("value"), value, message)
    await browser.perfVerify(assertMethod, message);
})