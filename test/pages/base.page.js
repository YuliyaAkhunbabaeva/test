export default class BasePage {
  open(path) {
    return browser.url(` https://pharma.enrichconsulting.com/${path}`);
  }
}
