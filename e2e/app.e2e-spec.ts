import { ModerWebStorePage } from './app.po';

describe('moder-web-store App', () => {
  let page: ModerWebStorePage;

  beforeEach(() => {
    page = new ModerWebStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
