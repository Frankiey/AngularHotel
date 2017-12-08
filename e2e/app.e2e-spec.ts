import { AppPage } from './app.po';
import { element, by, protractor } from 'protractor';
import { delay } from 'q';
import { first } from 'rxjs/operators/first';
import { max } from 'rxjs/operators/max';

describe('angular-fancy-hotel App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to the employee portal of Saint-Nicolas Lake Resort');
  });

  it('should display Add Employee', () => {
    page.navigateToAddWorker();
    expect(page.getAddWorkerTitle()).toEqual('Add Employee');
  });

  it('should add an employee', () => {
    element(by.id('startDate')).sendKeys('1111' + protractor.Key.TAB + '2011');
    element(by.id('firstName')).sendKeys('Aydin');
    element(by.id('lastName')).sendKeys('Erdas');
    element(by.id('email')).sendKeys('Aydin@live.nl');
    
    page.getCertainRole().click();

      page.getToevoegenButton().click();
      expect(page.getSuccess().getText()).toContain('Success!');
  });

  it('should display "Success!" message after adding an employee', () => {
    element(by.id('firstName')).sendKeys('Aydin');
    element(by.id('lastName')).sendKeys('Erdas');
    element(by.id('email')).sendKeys('Aydin@live.nl');
    page.getCertainRole().click();
    element(by.id('startDate')).sendKeys('1111' + protractor.Key.TAB + '2011');
    
      page.getToevoegenButton().click();
      expect(page.getSuccess().getText()).toContain('Success!');
      page.waitForCSS('#addSuccess')
  });

  it('checks if dropdown contains Kok', () => {
    page.navigateToAddWorker();
    expect(page.getCertainRole().getText()).toEqual('Kok');
  });

  it('checks if dropdown contains all roles', () => {
    page.navigateToAddWorker();
    expect(page.getDropdownLength().count()).toEqual(8);
  });

  it('checks if the add button redirects to the addworker page', () => {
    page.navigateToAddWorker();
    page.waitForCSS('h1');
      expect(page.getAddWorkerTitle()).toContain('Add Employee');    
  });

  it('checks if table contains rows', () => {
    page.navigateToOverview();

    expect(page.getNumberofRows().count()).toBeGreaterThan(0);
});

  it('should delete selected user', () => {
    page.navigateToSpecificWorker();

    page.getDeleteButton().click();
    expect(page.getSuccessDeleted().getText()).toContain('Deletion successful!');
  });
});
