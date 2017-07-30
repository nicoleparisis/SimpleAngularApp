import { Hw4Page } from './app.po';

describe('hw4 App', () => {
  let page: Hw4Page;

  beforeEach(() => {
    page = new Hw4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
