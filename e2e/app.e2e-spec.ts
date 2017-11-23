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

  it('should display welcome message', () => {
    page.navigateToAddWorker();
    expect(page.getAddWorkerTitle()).toEqual('Werknemer Toevoegen');
  });

  it('should display "Gelukt!" message after pressing toevoegen', () => {
    page.navigateToAddWorker();
    page.getToevoegenButton().click();
    expect(page.getSuccess().getText()).toContain('Gelukt!');
  });

  it('checks if dropdown contains Schoonmaker', () => {
    page.navigateToAddWorker();
    expect(page.getSchoonmaker().getText()).toEqual('Schoonmaker');
  });

  it('checks if dropdown contains all roles', () => {
    page.navigateToAddWorker();
    expect(page.getDropdownLength().count()).toEqual(8);
  });

  it('checks if the add button redirects to the addworker page', () => {
    page.navigateToOverview();
    page.getAddButton().click();
    expect(page.getAddWorkerTitle()).toEqual('Werknemer Toevoegen');
  });

  it('checks if table contains 3 rows', () => {
    page.navigateToOverview();
    expect(page.getNumberofRows().count()).toEqual(3);
  });

  it('checks if table contains id 1 as first id', () => {
    page.navigateToOverview();
    expect(page.getFirstIdofRow().getText()).toEqual('1');
  });
});
