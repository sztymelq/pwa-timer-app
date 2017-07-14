import { PwaTimerAppPage } from './app.po';

describe('pwa-timer-app App', function() {
  let page: PwaTimerAppPage;

  beforeEach(() => {
    page = new PwaTimerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
