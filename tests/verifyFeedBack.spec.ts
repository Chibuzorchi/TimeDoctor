import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});

test('Verify FeedBack Section', async ({page}) => {
    const fbSection = page.getByTestId('feedback-section');
    await expect (fbSection).toBeVisible();
    await (fbSection).screenshot({path: './screenshot/Feedback-Section.png'});
})

test('Verify 1st-FeedBack Section', async ({page}) => {
    const fb1stSection = page.locator("(//div[@class='col-lg-4 col-md-12 left-col'])[1]");
    await expect(fb1stSection).toBeVisible();
    await (fb1stSection).screenshot({path: './screenshot/1st-Fb-Sec.png'});  
  })

test('Verify 1st-FeedBack Title', async ({page}) => {
    const fbTitle = page.locator("(//h2[contains(text(),'Don’t take our word for it')])[1]");
    await expect(fbTitle).toContainText('Don’t take our word for it');
    await (fbTitle).screenshot({path: './screenshot/Feedback-Title.png'});
  })
  
test('Verify 1st-FeedBack Content', async ({page}) => {
  const fb1stContent = page.locator("(//p[contains(text(),'Teams from across the globe share how Time Doctor ')])[1]");
  await expect(fb1stContent).toContainText('Teams from across the globe share how Time Doctor ');
  await (fb1stContent).screenshot({path: './screenshot/1st-Fb-Content.png'});
})

test('Verify 1st-FeedBack Rating Section', async ({page}) => {
    const fbRatingSection = page.locator("(//div[@class='row'])[1]");
    await expect(fbRatingSection).toBeVisible();
    await (fbRatingSection).screenshot({path: './screenshot/Rating-Sec.png'});  
  })

test('Verify 2nd-FeedBack Rating Section', async ({page}) => {
    const fb2ndSection = page.locator("(//div[@class='col-lg-8 col-md-12 right-col'])[1]");
    await expect(fb2ndSection).toBeVisible();
    await (fb2ndSection).screenshot({path: './screenshot/2ndfeedback-Sec.png'});  
  })  


  