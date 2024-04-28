import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Try for Free Section', async ({page}) => {
    const try4FreeSect = page.locator('.css-1sl4e5n');
    await expect (try4FreeSect).toBeVisible();
    await (try4FreeSect).screenshot({path: './screenshot/Try4Free-Section.png'});
})

test('Verify Try for Free Title', async ({page}) => {
    const try4freeTitle = page.locator("(//h2[normalize-space()='Try Time Doctor for free'])[1]");
    await expect(try4freeTitle).toContainText('Try Time Doctor for free');
    await (try4freeTitle).screenshot({path: './screenshot/Try4free-Title.png'});
  })

test('Verify Try for Free Text', async ({page}) => {
    const try4freeText = page.locator("(//p[@class='MuiTypography-root MuiTypography-body2 css-a5n046'])[1]");
    await expect(try4freeText).toContainText('Reveal Workforce Analytics Insights, make your team effective ');
    await (try4freeText).screenshot({path: './screenshot/Try4free-Text.png'});
  })  


test('Verify Try for Free Button ', async ({page}) => {
    await page.getByRole('button', {name: 'Try it out'})
    .screenshot({path: './screenshot/Try4free-btn.png'});
    expect(page).not.toBeNull();
 })  

test('Verify Try for Free Text2', async ({page}) => {
    const try4freeText2 = page.locator("(//p[@class='MuiTypography-root MuiTypography-body css-sgnncx'])[1]");
    await expect(try4freeText2).toContainText('No credit card required');
    await (try4freeText2).screenshot({path: './screenshot/Try4free-Text2.png'});
  }) 
 

  
