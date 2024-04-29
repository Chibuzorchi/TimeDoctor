import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.timedoctor.com/');
    await page.click('text=Product');
    await page.waitForSelector('.NavTab_NavTabBox__Dropdown__bHacu');
});

test('Verify Product Heading', async ({page}) => {
    const productHeading = page.locator("(//h5[@class='MuiTypography-root MuiTypography-h5 NavTab_NavTabBox__NavColumn__Title__TfkyK css-1xyzxtx'][normalize-space()='Product'])[1]");
    await expect(productHeading).toContainText('Product');
    await (productHeading).screenshot({path: './screenshot/Product-Heading.png'}); 
})

test('Verify Product List and Link', async ({ page }) => {
    const productList = page.locator("(//ul[@role='menu'])[1]");

    await expect(productList).toContainText('Overview');
    await expect(productList).toContainText('Integrations');
    await expect(productList).toContainText('Case Studies');

    await expect(productList.locator('li:nth-child(1) > a')).toHaveAttribute('href', '/features');
    await expect(productList.locator('li:nth-child(2) > a')).toHaveAttribute('href', '/integrations-and-addons');
    await expect(productList.locator('li:nth-child(3) > a')).toHaveAttribute('href', 'https://resources.timedoctor.com/case-studies');

    await (productList).screenshot({path: './screenshot/Product-List.png'});
});

test('Verify Download Heading', async ({page}) => {
    const downloadHeading = page.locator("(//h5[@class='MuiTypography-root MuiTypography-h5 NavTab_NavTabBox__NavColumn__Title__TfkyK css-1xyzxtx'][normalize-space()='Download'])[1]");
    await expect(downloadHeading).toContainText('Download');
    await (downloadHeading).screenshot({path: './screenshot/Download-Heading.png'});
})

test('Verify Download List and Links', async ({ page }) => {
    const downloadList = page.locator("(//ul[@role='menu'])[2]");

    await expect(downloadList).toContainText('Desktop App');
    await expect(downloadList).toContainText('Browser Extensions');
    await expect(downloadList).toContainText('Mobile App');

    await expect(downloadList.locator('li:nth-child(1) > a')).toHaveAttribute('href', '/download');
    await expect(downloadList.locator('li:nth-child(2) > a')).toHaveAttribute('href', '/download#browser-extensions');
    await expect(downloadList.locator('li:nth-child(3) > a')).toHaveAttribute('href', '/download#mobile-apps');

    await (downloadList).screenshot({path: './screenshot/Download-List.png'});
});



