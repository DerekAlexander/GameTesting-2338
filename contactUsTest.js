var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.alexandersroofing.com/');

driver.sleep(5000)
    .then(function () {
        driver.findElement(By.className('unifiednav__item  dmUDNavigationItem_04')).click();
    });

driver.sleep(10000)
    .then(function () {
        driver.getCurrentUrl().then(function (url) {
            if (url === 'https://www.alexandersroofing.com/contact-us') {
                console.log('Test passed');
            } else {
                console.log('Test failed');
            }
            driver.quit();

        });
    });
