$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginTest.feature");
formatter.feature({
  "line": 2,
  "name": "Verify user login and logout successfully",
  "description": "",
  "id": "verify-user-login-and-logout-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9265537800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should login successfully",
  "description": "",
  "id": "verify-user-login-and-logout-successfully;verify-user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should verify welcome text",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 211351600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 122970500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 145107400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2875980400,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userShouldVerifyWelcomeText()"
});
formatter.result({
  "duration": 914583200,
  "status": "passed"
});
formatter.after({
  "duration": 827665400,
  "status": "passed"
});
formatter.before({
  "duration": 6210164300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the Orange HRM logo is displayed",
  "description": "",
  "id": "verify-user-login-and-logout-successfully;verify-the-orange-hrm-logo-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should verify welcome text",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should verify that Orange HRM logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 165456900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 168649200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2318571400,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userShouldVerifyWelcomeText()"
});
formatter.result({
  "duration": 589536900,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userShouldVerifyThatOrangeHRMLogoIsDisplayed()"
});
formatter.result({
  "duration": 215743700,
  "status": "passed"
});
formatter.after({
  "duration": 828599700,
  "status": "passed"
});
formatter.before({
  "duration": 4952511900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user logout successfully",
  "description": "",
  "id": "verify-user-login-and-logout-successfully;verify-user-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should verify welcome text",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should logout successfully \u003c\"LOGIN Panel\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 114327800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 132207400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2288781800,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userShouldVerifyWelcomeText()"
});
formatter.result({
  "duration": 677481200,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userClickOnLogout()"
});
formatter.result({
  "duration": 50144898500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //a[normalize-space()\u003d\u0027Logout\u0027] (tried for 50 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:61316}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61316/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 680017bbef2f2c84a75a97b47427e462\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat com.orangehrmlive.demo.pages.HomePage.pmDoWaitUntilVisibilityOfElementLocated(HomePage.java:52)\r\n\tat com.orangehrmlive.demo.pages.HomePage.mouseHoverOnLogoutAndClick(HomePage.java:63)\r\n\tat com.orangehrmlive.demo.steps.UserLoginSteps.userClickOnLogout(UserLoginSteps.java:27)\r\n\tat ✽.And User click on logout(loginTest.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 34
    }
  ],
  "location": "UserLoginSteps.userShouldLogoutSuccessfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1113664700,
  "status": "passed"
});
formatter.uri("usersTest.feature");
formatter.feature({
  "line": 2,
  "name": "Admin should create user, search for user, delete a user and verify no record found for deleted user.",
  "description": "",
  "id": "admin-should-create-user,-search-for-user,-delete-a-user-and-verify-no-record-found-for-deleted-user.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5294334200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "admin-should-create-user,-search-for-user,-delete-a-user-and-verify-no-record-found-for-deleted-user.;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Admin is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Admin verify \u0027system users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Admin click on \u0027add\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Admin verify \u0027add user\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin select user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin enter employee name\u003c\"Ananya Dash\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Admin enter user name\u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Admin select status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Admin enter password \u003c\"anayapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Admin enter confirm password\u003c\"ananyapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin click on \u0027save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Admin verify \u0027successfully saved\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.adminIsOnHomepage()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 118776200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 126336600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2496517900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 1700637000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySystemUsersText()"
});
formatter.result({
  "duration": 43624500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnAddButton()"
});
formatter.result({
  "duration": 624294300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifyAddUserText()"
});
formatter.result({
  "duration": 64082100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.adminSelectUserRole(String)"
});
formatter.result({
  "duration": 435895500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.adminEnterEmployeeName(String)"
});
formatter.result({
  "duration": 128701400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterUserName(String)"
});
formatter.result({
  "duration": 575481200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.adminSelectStatus(String)"
});
formatter.result({
  "duration": 99787000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anayapassword123",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterPassword(String)"
});
formatter.result({
  "duration": 139089100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ananyapassword123",
      "offset": 30
    }
  ],
  "location": "AddUserSteps.adminEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 140295200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnSaveButton()"
});
formatter.result({
  "duration": 83979500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySuccessfullySavedMessage()"
});
formatter.result({
  "duration": 40148800,
  "status": "passed"
});
formatter.after({
  "duration": 938957100,
  "status": "passed"
});
formatter.before({
  "duration": 5325983000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Admin should search the user created and verify it",
  "description": "",
  "id": "admin-should-create-user,-search-for-user,-delete-a-user-and-verify-no-record-found-for-deleted-user.;admin-should-search-the-user-created-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Admin verify \u0027system users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Admin click on \u0027add\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Admin verify \u0027add user\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Admin select user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Admin enter employee name\u003c\"Ananya Dash\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Admin enter user name\u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Admin select status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Admin enter password \u003c\"anayapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Admin enter confirm password\u003c\"ananyapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Admin click on \u0027save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Admin verify \u0027successfully saved\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Admin verify \u0027system users\u0027 text from view system users page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Admin search for username \u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Admin search for user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Admin search for user status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Admin click on \u0027search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Admin should verify user found successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.adminIsOnHomepage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 121343400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 120939000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2887986700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 1020625800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySystemUsersText()"
});
formatter.result({
  "duration": 53429800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnAddButton()"
});
formatter.result({
  "duration": 483405600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifyAddUserText()"
});
formatter.result({
  "duration": 92622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.adminSelectUserRole(String)"
});
formatter.result({
  "duration": 108561600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.adminEnterEmployeeName(String)"
});
formatter.result({
  "duration": 125942800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterUserName(String)"
});
formatter.result({
  "duration": 270425800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.adminSelectStatus(String)"
});
formatter.result({
  "duration": 99282300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anayapassword123",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterPassword(String)"
});
formatter.result({
  "duration": 137331800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ananyapassword123",
      "offset": 30
    }
  ],
  "location": "AddUserSteps.adminEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 134963000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnSaveButton()"
});
formatter.result({
  "duration": 84381500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySuccessfullySavedMessage()"
});
formatter.result({
  "duration": 39676500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 864098800,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminVerifySystemUsersTextFromViewSystemUsersPage()"
});
formatter.result({
  "duration": 74361000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 28
    }
  ],
  "location": "SearchUserSteps.adminSearchForUsername(String)"
});
formatter.result({
  "duration": 127394900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 29
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserRole(String)"
});
formatter.result({
  "duration": 133201700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 31
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserStatus(String)"
});
formatter.result({
  "duration": 99278700,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminClickOnSearchButton()"
});
formatter.result({
  "duration": 414922000,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminShouldVerifyUserFoundSuccessfully()"
});
formatter.result({
  "duration": 20085459500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027AnanyaDash20\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [32183ba126c45f8e1aeff74a34523c72, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027AnanyaDash20\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:61394}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61394/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 32183ba126c45f8e1aeff74a34523c72\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:66)\r\n\tat com.orangehrmlive.demo.utility.Utility.verifyTestMethod(Utility.java:42)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserCreated(ViewSystemUsersPage.java:89)\r\n\tat com.orangehrmlive.demo.steps.SearchUserSteps.adminShouldVerifyUserFoundSuccessfully(SearchUserSteps.java:35)\r\n\tat ✽.Then Admin should verify user found successfully(usersTest.feature:47)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1045654700,
  "status": "passed"
});
formatter.before({
  "duration": 4615232000,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Admin should delete user successfully",
  "description": "",
  "id": "admin-should-create-user,-search-for-user,-delete-a-user-and-verify-no-record-found-for-deleted-user.;admin-should-delete-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Sanity"
    },
    {
      "line": 49,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Admin is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Admin verify \u0027system users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Admin click on \u0027add\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Admin verify \u0027add user\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Admin select user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Admin enter employee name\u003c\"Ananya Dash\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Admin enter user name\u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Admin select status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Admin enter password \u003c\"anayapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Admin enter confirm password\u003c\"ananyapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Admin click on \u0027save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin verify \u0027successfully saved\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Admin verify \u0027system users\u0027 text from view system users page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Admin search for username \u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Admin search for user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Admin search for user status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Admin click on \u0027search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Admin should verify user found successfully",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Admin click on the checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Admin click on \u0027delete\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Admin click on \u0027OK\u0027 delete",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Admin verify user deleted text",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.adminIsOnHomepage()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 108601100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 118739100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2703498600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 1634501400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySystemUsersText()"
});
formatter.result({
  "duration": 42243300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnAddButton()"
});
formatter.result({
  "duration": 518226900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifyAddUserText()"
});
formatter.result({
  "duration": 79788700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.adminSelectUserRole(String)"
});
formatter.result({
  "duration": 98584700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.adminEnterEmployeeName(String)"
});
formatter.result({
  "duration": 122387800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterUserName(String)"
});
formatter.result({
  "duration": 138231600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.adminSelectStatus(String)"
});
formatter.result({
  "duration": 98522000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anayapassword123",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterPassword(String)"
});
formatter.result({
  "duration": 138826000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ananyapassword123",
      "offset": 30
    }
  ],
  "location": "AddUserSteps.adminEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 156239500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnSaveButton()"
});
formatter.result({
  "duration": 100405600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySuccessfullySavedMessage()"
});
formatter.result({
  "duration": 46192100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 1025101000,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminVerifySystemUsersTextFromViewSystemUsersPage()"
});
formatter.result({
  "duration": 36262600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 28
    }
  ],
  "location": "SearchUserSteps.adminSearchForUsername(String)"
});
formatter.result({
  "duration": 96209600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 29
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserRole(String)"
});
formatter.result({
  "duration": 103358900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 31
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserStatus(String)"
});
formatter.result({
  "duration": 99440000,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminClickOnSearchButton()"
});
formatter.result({
  "duration": 427421400,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminShouldVerifyUserFoundSuccessfully()"
});
formatter.result({
  "duration": 20015022600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027AnanyaDash20\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b19851b9f63d2e174a439458f145bc00, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027AnanyaDash20\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:61430}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61430/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b19851b9f63d2e174a439458f145bc00\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:66)\r\n\tat com.orangehrmlive.demo.utility.Utility.verifyTestMethod(Utility.java:42)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserCreated(ViewSystemUsersPage.java:89)\r\n\tat com.orangehrmlive.demo.steps.SearchUserSteps.adminShouldVerifyUserFoundSuccessfully(SearchUserSteps.java:35)\r\n\tat ✽.And Admin should verify user found successfully(usersTest.feature:73)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DeleteUserSteps.adminClickOnTheCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteUserSteps.adminClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteUserSteps.adminClickOnOKDelete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteUserSteps.adminVerifyUserDeletedText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 957171800,
  "status": "passed"
});
formatter.before({
  "duration": 5430584200,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Admin should serach for deleted user and verify no record found",
  "description": "",
  "id": "admin-should-create-user,-search-for-user,-delete-a-user-and-verify-no-record-found-for-deleted-user.;admin-should-serach-for-deleted-user-and-verify-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "Admin is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "User enter the username to login \u003c\"Admin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User enter password to login \u003c\"admin123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Admin verify \u0027system users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Admin click on \u0027add\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Admin verify \u0027add user\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Admin select user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Admin enter employee name\u003c\"Ananya Dash\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Admin enter user name\u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Admin select status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Admin enter password \u003c\"anayapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Admin enter confirm password\u003c\"ananyapassword123\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Admin click on \u0027save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Admin verify \u0027successfully saved\u0027 message",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Admin clicks on \u0027admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Admin verify \u0027system users\u0027 text from view system users page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Admin search for username \u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Admin search for user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Admin search for user status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Admin click on \u0027search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Admin should verify user found successfully",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Admin click on the checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Admin click on \u0027delete\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Admin click on \u0027OK\u0027 delete",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Admin verify user deleted text",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "Admin search for user role \u003c\"AnanyaDash20\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Admin search for user role \u003c\"Admin\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Admin search for user status \u003c\"Disabled\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin click on \u0027search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Admin should verify \u003c\"No Records Found\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.adminIsOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 35
    }
  ],
  "location": "AddUserSteps.userEnterTheUsernameToLogin(String)"
});
formatter.result({
  "duration": 114988200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "AddUserSteps.userEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 208378700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 3403980000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 977569300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySystemUsersText()"
});
formatter.result({
  "duration": 41161100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnAddButton()"
});
formatter.result({
  "duration": 467588700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifyAddUserText()"
});
formatter.result({
  "duration": 58744000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.adminSelectUserRole(String)"
});
formatter.result({
  "duration": 113468000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.adminEnterEmployeeName(String)"
});
formatter.result({
  "duration": 126199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterUserName(String)"
});
formatter.result({
  "duration": 145302100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.adminSelectStatus(String)"
});
formatter.result({
  "duration": 112928500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anayapassword123",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.adminEnterPassword(String)"
});
formatter.result({
  "duration": 138415300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ananyapassword123",
      "offset": 30
    }
  ],
  "location": "AddUserSteps.adminEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 151002500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClickOnSaveButton()"
});
formatter.result({
  "duration": 79528600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminVerifySuccessfullySavedMessage()"
});
formatter.result({
  "duration": 39464300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.adminClicksOnAdminTab()"
});
formatter.result({
  "duration": 766858800,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminVerifySystemUsersTextFromViewSystemUsersPage()"
});
formatter.result({
  "duration": 42783200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 28
    }
  ],
  "location": "SearchUserSteps.adminSearchForUsername(String)"
});
formatter.result({
  "duration": 110075500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 29
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserRole(String)"
});
formatter.result({
  "duration": 101908800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 31
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserStatus(String)"
});
formatter.result({
  "duration": 111517000,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminClickOnSearchButton()"
});
formatter.result({
  "duration": 420208600,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserSteps.adminShouldVerifyUserFoundSuccessfully()"
});
formatter.result({
  "duration": 20068207100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027AnanyaDash20\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6d5735dbbb61e8297e87953a74eedf34, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027AnanyaDash20\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:61470}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61470/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6d5735dbbb61e8297e87953a74eedf34\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:66)\r\n\tat com.orangehrmlive.demo.utility.Utility.verifyTestMethod(Utility.java:42)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserCreated(ViewSystemUsersPage.java:89)\r\n\tat com.orangehrmlive.demo.steps.SearchUserSteps.adminShouldVerifyUserFoundSuccessfully(SearchUserSteps.java:35)\r\n\tat ✽.And Admin should verify user found successfully(usersTest.feature:103)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DeleteUserSteps.adminClickOnTheCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteUserSteps.adminClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteUserSteps.adminClickOnOKDelete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteUserSteps.adminVerifyUserDeletedText()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaDash20",
      "offset": 29
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserRole(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 29
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserRole(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 31
    }
  ],
  "location": "SearchUserSteps.adminSearchForUserStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchUserSteps.adminClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No Records Found",
      "offset": 22
    }
  ],
  "location": "DeleteUserSteps.adminShouldVerify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 958135900,
  "status": "passed"
});
});