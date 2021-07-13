import BasePage from './base.page';

class ProjectsPage extends BasePage {
  get header() {
    return $('#drillTab4');
  }

  get inputLink() {
    return $('//b[text() = "Inputs"]');
  }

  get salesLink() {
    return $("//a[@id='nttree5_project_10an']");
  }

  get salesEntryMethodTitle() {
    return $("//div[@id='919517743_meta_title']");
  }

  get salesEntryMethod() {
    return $('//body[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]/b[1]');
  }

  get annualForecastMethod() {
    return $("//option[contains(text(),'Annual Forecast')]");
  }

  get priceAndVolumeMethod() {
    return $("//option[contains(text(),'Price and Volume')]");
  }

  get inputSalesJapan2021() {
    return $(
      '//body[1]/div[6]/div[1]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[4]',
    );
  }

  get inputPriceJapan2020() {
    return $(
      '//body[1]/div[6]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[3]',
    );
  }

  get changesLink() {
    return $("//a[@id='hdr_cnt']");
  }

  get inputPriceJapan2020Value() {
    return $('//body/div[6]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[1]/div[6]/textarea[1]');
  }

  get inputJapan2021Value() {
    return $('.handsontableInput');
  }

  get checkAll() {
    return $('#checkbox_Grid_WkspView_remove_ip_0');
  }

  get removeBtn() {
    return $('#RemoveIP');
  }

  get listFrame() {
    return $('[name = list]');
  }

  get detailFrame() {
    return $('[name = detail]');
  }

  get headerFrame() {
    return $('[name = header]');
  }
}
export default new ProjectsPage();
