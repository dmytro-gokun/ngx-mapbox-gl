import { browser, element, by, ExpectedConditions as EC } from 'protractor';
const browserLogs = require('protractor-browser-logs');

describe('Custom control', () => {
  let logs: any;

  beforeEach(() => {
    logs = browserLogs(browser);
  });

  afterEach(() => {
    return logs.verify();
  });

  beforeEach(async () => {
    browser.ignoreSynchronization = true;
    await browser.get('/ngx-custom-control');
    const canvas = element(by.tagName('canvas'));
    await browser.wait(EC.presenceOf(canvas), 2000);
  });

  it('should show', async () => {
    const button = element(by.tagName('button'));
    await browser.wait(EC.presenceOf(button), 1000);
    expect(button.getText()).toBe('Hello');
  });

  it('should do something on click', async () => {
    const button = element(by.tagName('button'));
    await browser.wait(EC.presenceOf(button), 1000);
    await button.click();
    await browser.wait(EC.alertIsPresent(), 200);
    await browser.switchTo().alert().accept();
  });
});