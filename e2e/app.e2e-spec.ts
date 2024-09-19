import { ResumificationTemplatePage } from './app.po';

describe('Resumification App', function() {
  let page: ResumificationTemplatePage;

  beforeEach(() => {
    page = new ResumificationTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
