import { MichaelfrohbergPage } from './app.po';

describe('michaelfrohberg App', function() {
  let page: MichaelfrohbergPage;

  beforeEach(() => {
    page = new MichaelfrohbergPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('michaelfrohberg works!');
  });
});
