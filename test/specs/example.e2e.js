import LoginPage from '../pages/login.page';
import { user } from '../data/user';
import { expected } from '../data/expected';
import HomePage from '../pages/home.page';
import ProjectsPage from '../pages/projects.page';

describe('My Login application', () => {
  it('should login with valid credentials', () => {
    browser.url('https://pharma.enrichconsulting.com');

    LoginPage.login(user.userName, user.password);
    expect(HomePage.userLink).toBeDisplayed();
  });

  it('should click on Avniman link and validate the target URL ', function () {
    HomePage.avnimanLink.click();
    const actualURL = browser.getUrl();
    expect(actualURL).toEqual(expected.projectUrl);
  });

  describe('Projects page', () => {
    it('should click on sales link and verify Sales link is displayed ', function () {
      browser.switchToFrame(ProjectsPage.listFrame);
      ProjectsPage.inputLink.click();
      ProjectsPage.salesLink.moveTo();
      ProjectsPage.salesLink.click();
      browser.pause(5000);
    });

    it('should change value in Sales Volume', function () {
      browser.switchToParentFrame();
      browser.switchToFrame(ProjectsPage.detailFrame);
      ProjectsPage.inputSalesJapan2021.moveTo();
      ProjectsPage.inputSalesJapan2021.doubleClick();
      ProjectsPage.inputJapan2021Value.setValue(1);
      expect(ProjectsPage.inputJapan2021Value.getValue()).toEqual('1');
    });

    it('should change value in Price', function () {
      ProjectsPage.inputPriceJapan2020.moveTo();
      ProjectsPage.inputPriceJapan2020.doubleClick();
      ProjectsPage.inputPriceJapan2020Value.setValue('1');
      expect(ProjectsPage.inputPriceJapan2020Value.getValue()).toEqual('1');
    });

    it('should check text on changes link', function () {
      browser.switchToParentFrame();
      browser.switchToFrame(ProjectsPage.headerFrame);
      expect(ProjectsPage.changesLink.getText()).toEqual(expected.changesLink);
    });

    it('should click on changes link and delete all changes', function () {
      ProjectsPage.changesLink.click();
      browser.switchToParentFrame();
      browser.switchToFrame($('[name=pb_quick_pub]'));
      
    });
    
    describe('API', () => {
      it('Check if axios works', async () => {
        const response = await axios.get('https://pharma.enrichconsulting.com/facttableservice/rawfact/proj/262/5/Revenue_yrs_base', {})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
    })
  })
})

