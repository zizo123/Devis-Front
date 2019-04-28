import { MyApp3Page } from './app.po';

describe('my-app3 App', () => {
  let page: MyApp3Page;

  beforeEach(() => {
    page = new MyApp3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
