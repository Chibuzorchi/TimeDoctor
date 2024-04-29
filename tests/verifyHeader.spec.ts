import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/', );
});

test('Verify URL', async ({ page }) => {
    await expect(page).toHaveURL('https://www.timedoctor.com/');
});

test('Verify Header', async ({ page }) => {
    await page.locator('.Header_Header__Content__mfmKf')
    .screenshot({path: './screenshot/Header.png'});
    expect(page).not.toBeNull();
})


test('Verify Logo', async ({ page }) => {
  await page.getByTestId('header-logo-desktop').isVisible();
  await (page).screenshot({path: './screenshot/Headerr-logo.png' }); 
 });

test('Verify Left-Side Menu', async ({ page }) => {
    await page.locator('.Header_Header__LeftSide__NavTabsBox__Y4PNB')
    .screenshot({path: './screenshot/Left-menu.png'})
    expect(page).not.toBeNull();
})

test('Verify Right-Side Menu', async ({ page }) => {
    await page.locator('.Header_Header__RightSide__YmNQ7')
    .screenshot({path: './screenshot/Right-menu.png'})
    expect(page).not.toBeNull();
})


test('Verify Product-Content', async ({ page }) => {
    await page.click('text=Product');
    await page.waitForSelector('.NavTab_NavTabBox__Dropdown__bHacu');
    await page.screenshot({ path: './screenshot/Product-content.png' });
    expect(page).not.toBeNull();
});


test('Verify Product-Dropdown', async ({ page }) => {
    await page.locator("(//div[@class='NavTab_NavTabBox__Box__4v4De'])[1]")
    .screenshot({path: './screenshot/Product-dropdown.png'})
    expect(page).not.toBeNull();
});

test('Verify Solution-Dropdown', async ({ page }) => {
    await page.locator("(//div[@class='NavTab_NavTabBox__Box__4v4De'])[2]")
    .screenshot({path: './screenshot/Solution-dropdown.png'})
    expect(page).not.toBeNull();
});

test('Verify Solution-Content', async ({ page }) => {
    await page.click('text=Solutions');
    page.locator('.NavTab_NavTabBox__Dropdown__CardContent__OpQSS');
    await page.screenshot({ path: './screenshot/Solutions-content.png' });
    expect(page).not.toBeNull();
});


test('Verify Pricing Element', async ({ page }) => {
    await page.getByRole('link', {name: 'Pricing'}).isVisible();
    expect(page).not.toBeNull();
})

test('Verify Sign In Button', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign In' }).isVisible();
    expect(page).not.toBeNull();
})

test('Verify Request Demo Button', async ({ page }) => {
    await page.getByRole('button', { name: 'Request a Demo' }).isVisible();
    expect(page).not.toBeNull();
})

test('Verify Start Trial Button', async ({ page }) => {
    await page.getByRole('button', { name: 'Start Trial' }).isVisible();
    expect(page).not.toBeNull();
})

test('Verify Burger Menu for Mobile', async ({ page }) => {
    await page.getByTestId('burger-btn').isVisible();
    expect(page).not.toBeNull();
})
