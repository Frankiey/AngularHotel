import { AppPage } from './app.po';
import { element, by } from 'protractor';
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

  it('should display "Success!" message after adding an employee', () => {
    element(by.id('firstName')).sendKeys('Aydin');
    element(by.id('lastName')).sendKeys('Erdas');
    element(by.id('email')).sendKeys('Aydin@live.nl');
    element(by.id('startDate')).sendKeys('11112011');
    page.getSchoonmaker().click();

    delay(5000).then(() => {
      page.getToevoegenButton().click();
      expect(page.getSuccess().getText()).toContain('Success!');
    });
  });

  it('checks if dropdown contains Kok', () => {
    page.navigateToAddWorker();
    expect(page.getSchoonmaker().getText()).toEqual('Kok');
  });

  it('checks if dropdown contains all roles', () => {
    page.navigateToAddWorker();
    expect(page.getDropdownLength().count()).toEqual(8);
  });

  it('checks if the add button redirects to the addworker page', () => {
    page.navigateToOverview();
    page.getAddButton().click();

    delay(20000).then(() => {
      expect(page.getAddWorkerTitle()).toEqual('Add Employee');
    });
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
