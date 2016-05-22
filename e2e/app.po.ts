export class MichaelfrohbergPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('michaelfrohberg-app h1')).getText();
  }
}
