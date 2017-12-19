import { MyTunesPage } from './app.po';

describe('my-tunes App', function() {
  let page: MyTunesPage;

  beforeEach(() => {
    page = new MyTunesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
