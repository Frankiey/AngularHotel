import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToAddWorker() {
    return browser.get('/addworker');
  }

  navigateToOverview() {
    return browser.get('/overview');
  }

// ===================== navigator / selector devider ====================================== //


// === frontpage test === //
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

// === add worker test === //
  getToevoegenButton() {
    return element(by.css('#addWorker'));
  }

  getSuccess() {
    return element(by.css('#addSuccess'));
  }

  getSchoonmaker() {
    return element(by.cssContainingText('option', 'Schoonmaker'));
  }

  getDropdownLength() {
    return element.all(by.css('select[name="role"] option'));
  }

  getAddWorkerTitle() {
    return element(by.css('h2')).getText();
  }

// === overview worker tests === //

  getAddButton() {
  return element(by.css('a[href="/addworker"]'));
  }

  getNumberofRows() {
    return element.all(by.css('tbody tr'));
  }

  getPage2() {
    return element(by.css('ul li:nth-child(3) a'));
  }

  getFirstIdofRow() {
    return element(by.css('tbody tr:first-child td:first-child'));
  }
}
