import { SummarizeMeClientPage } from './app.po';

describe('summarize-me-client App', () => {
  let page: SummarizeMeClientPage;

  beforeEach(() => {
    page = new SummarizeMeClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
