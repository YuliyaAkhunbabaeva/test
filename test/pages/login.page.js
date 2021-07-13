import BasePage from './base.page';

class LoginPage extends BasePage {
  get inputUsername() {
    return $('#username');
  }
  get inputPassword() {
    return $('#password');
  }
  get btnLogin() {
    return $('#loginButton');
  }

  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnLogin.click();
  }
}

export default new LoginPage();
