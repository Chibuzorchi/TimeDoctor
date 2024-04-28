import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Header-2 Section', async ({page}) => {
    const secondSection = page.locator('.css-1udnls');
    await expect(secondSection).toBeVisible();
    await (secondSection).screenshot({path: './screenshot/2nd-Section.png'});

  })


test('Verify 1st Article Section', async ({page}) => {
    const firstArticle = page.locator('.css-nsrsqm');
    await expect(firstArticle).toBeVisible();
    await (firstArticle).screenshot({path: './screenshot/1st-Article.png'});
    
  })
  

