import { AppPage } from './app.po';

describe('angular-fancy-hotel App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welkom op het werknemers portaal van hotel fancypants');
  });
});
