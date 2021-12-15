package com.orangehrmlive.demo.steps;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.HomePage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;

public class AddUserSteps {
    @cucumber.api.java.en.Given("^Admin is on homepage$")
    public void adminIsOnHomepage() {
    }

    @cucumber.api.java.en.When("^User enter the username to login <\"([^\"]*)\">$")
    public void userEnterTheUsernameToLogin(String uname) {
        new LoginPage().enterTheUsernameInTheUsernameField(uname);
    }

    @And("^User enter password to login <\"([^\"]*)\">$")
    public void userEnterPasswordToLogin(String pname) {
        new LoginPage().enterThePasswordInThePasswordField(pname);
    }

    @And("^User click on login button$")
    public void userClickOnLoginButton() {
        new LoginPage().clickOnTheLoginButton();
    }

    @And("^Admin clicks on 'admin' tab$")
    public void adminClicksOnAdminTab() {
        new HomePage().clickOnAdminTabFromHomePage();
    }

    @And("^Admin verify 'system users' text$")
    public void adminVerifySystemUsersText() {
        new AddUserPage().verifyTheSystemUsersWelcomeText();
    }

    @And("^Admin click on 'add' button$")
    public void adminClickOnAddButton() {
        new AddUserPage().clickOnTheAddButton();
    }

    @And("^Admin verify 'add user' text$")
    public void adminVerifyAddUserText() {
        new AddUserPage().verifyTheAddUserText();
    }

    @And("^Admin select user role <\"([^\"]*)\">$")
    public void adminSelectUserRole(String role) {
        new AddUserPage().selectUserRole(role);
    }

    @And("^Admin enter employee name<\"([^\"]*)\">$")
    public void adminEnterEmployeeName(String ename) {
        new AddUserPage().putEmployeeNameInTheEmployeeNameField(ename);
    }

    @And("^Admin enter user name<\"([^\"]*)\">$")
    public void adminEnterUserName(String username) {
        new AddUserPage().putUserNameInTheUserNameField(username);
    }

    @And("^Admin select status <\"([^\"]*)\">$")
    public void adminSelectStatus(String status) {
        new AddUserPage().selectUserStatus(status);
    }

    @And("^Admin enter password <\"([^\"]*)\">$")
    public void adminEnterPassword(String pword) {
        new AddUserPage().enterPasswordInThePasswordField(pword);
    }

    @And("^Admin enter confirm password<\"([^\"]*)\">$")
    public void adminEnterConfirmPassword(String cpw) {
        new AddUserPage().enterConfirmationPassword(cpw);
    }

    @And("^Admin click on 'save' button$")
    public void adminClickOnSaveButton() {
        new AddUserPage().clickOnTheSaveButton();
    }

    @cucumber.api.java.en.Then("^Admin verify 'successfully saved' message$")
    public void adminVerifySuccessfullySavedMessage() {
        new AddUserPage().verifyTheSuccessfullySavedMessage();
    }


}
