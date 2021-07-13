import BasePage from './base.page';

class HomePage extends BasePage {
  get userLink() {
    return $('.userLink');
  }

  get avnimanLink() {
    return $('#roi_prj_1');
  }

  open() {
    return super.open('home.aspx');
  }
}

export default new HomePage();
