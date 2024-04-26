import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Header', async ({ page }) => {
    expect(await page.waitForSelector('header')).not.toBe(null);
})

test('Verify Header Logo', async ({ page }) => {
    const logoElement = await page.getByRole('link', { name: 'Time Doctor logo' });
    expect(logoElement).not.toBeNull();
})

test('Verify Product Element', async ({ page }) => {
    const productElement = await page.getByLabel('Product');
    expect(productElement).not.toBeNull();
})

test('Verify Solution Element', async ({ page }) => {
    const solutionElement = await page.getByLabel('Solution');
    expect(solutionElement).not.toBeNull();
})

test('Verify Pricing Element', async ({ page }) => {
    const pricingElement = await page.getByLabel('Pricing');
    expect(pricingElement).not.toBeNull();
})

test('Verify Start Trial Button', async ({ page }) => {
    const buttonElement = await page.getByRole('button', { name: 'Start Trial' });
    expect(buttonElement).not.toBeNull();
})

test('Verify Burger Menu for Mobile', async ({ page }) => {
    const burgerMenuElement = await page.getByTestId('burger-btn');
    expect(burgerMenuElement).not.toBeNull();
})