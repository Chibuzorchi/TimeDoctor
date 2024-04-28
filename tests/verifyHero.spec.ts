import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Main Section', async ({ page }) => {
    await page.locator('.css-1iudhj4').screenshot({path: './screenshot/Hero-section.png'})
    expect(page).not.toBeNull();
})

// test('Verify Hero Section', async ({ page }) => {
//     const heroSection = await page.locator('Hero Section')
//     expect(heroSection).not.toBe(null);
// })

test('Verify Hero Section Title', async ({ page }) => {
    await page.locator('.HeroSec-Title').screenshot({path: './screenshot/Title.png'})
    await expect(page).toHaveTitle('Time Doctor - #1 Workforce Analytics Platform')
})

test('Verify Hero Section Sub-Title', async ({ page }) => { 
    const subTitle = page.locator('.HeroSec-SubTitle');
    await expect(subTitle).toContainText('Get Peace of Mind with Workforce Analytics for');
})

test('Verify Hero Section Desc', async ({ page }) => {
    const heroDesc = page.locator('.HeroSec-Desc')
    await expect(heroDesc).toContainText("Uncover insights in people, tech & operations to solve workforce & performance gaps");
    await (heroDesc).screenshot({path: './screenshot/Hero-Desc.png'})
})

test('Verify Try it Free', async ({ page }) => {
    const tryFree = page.getByRole('button', { name: 'Try it Free' });
    await expect(tryFree).toBeVisible();
    await (tryFree).screenshot({path: './screenshot/Try-free.png'})
})

test('Verify View Demo Button', async ({ page }) => {
    const viewDemo = page.getByRole('button', { name: 'View Demo' });
    await expect(viewDemo).toBeVisible();
    await (viewDemo).screenshot({path: './screenshot/View-Demo.png'})
})

test('Verify Hero Left-Col', async ({ page }) => {
    const leftCol = page.locator('.css-1u21uil');
    await expect(leftCol).toBeVisible();
    await (leftCol).screenshot({path: './screenshot/Left-col.png'});
})

test('Verify Hero Right-Col', async ({ page }) => {
    const rightCol = page.locator('.HeroSection-RightCol');
    await expect(rightCol).toBeVisible();
    await (rightCol).screenshot({path: './screenshot/Right-col.png'});
})

test('Verify Hero Review', async ({ page }) => {
    const review = page.locator('.css-1u41y9g');
    await expect(review).toBeVisible();
    await (review).screenshot({path: './screenshot/Review.png'})
})

test('Verify Hero Logo-Title', async ({ page }) => {
    await expect(page.locator('.css-je8wx9')).toContainText('Join Over 260,000 Time Doctor Users');
})

test('Verify Hero Logo Images', async ({page}) => {
    const logoImg = page.locator('.css-1s4lnxq');
    await expect(logoImg).toBeVisible();
    await (logoImg).screenshot({path: './screenshot/Logo-Img.png'});
})



