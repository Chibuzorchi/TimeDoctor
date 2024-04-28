import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Header-2 Section', async ({page}) => {
    const secondSection = page.locator('.css-1udnls');
    await expect(secondSection).toBeVisible();
    await (secondSection).screenshot({path: './screenshot/2nd-Section.png'});
  })


test('Verify Header-2 Desc', async ({page}) => {
    const header2Desc = page.locator('.css-3kt5iw');
    await expect(header2Desc).toBeVisible();
    await (header2Desc).screenshot({path: './screenshot/Header2Des.png'});
  })
  

test('Verify Header-2 Title', async ({page}) => {
    const header2Title = page.locator("(//h1[normalize-space()='How Time Doctor Works'])[1]");
    await expect(header2Title).toContainText('How Time Doctor Works');
    await (header2Title).screenshot({path: './screenshot/Header2-Title.png'});
  })


test('Verify Header-2 Desc Text', async ({page}) => {
    const descText = page.locator("(//p[@class='MuiTypography-root MuiTypography-body1 css-1p48owm'])[1]");
    await expect(descText).toContainText('Make your business effective not just productive by uncovering');
    await (descText).screenshot({path: './screenshot/Desc-Text.png'});
  })


test('Verify 1st Article Section', async ({page}) => {
    const firstArticle = page.locator('.css-nsrsqm');
    await expect(firstArticle).toBeVisible();
    await (firstArticle).screenshot({path: './screenshot/1st-Article.png'});  
  })

test('Verify 1st-Article Title', async ({page}) => {
    const articleTitle = page.locator('//article[contains(@class, "css-nsrsqm")]//b');
    await expect(articleTitle).toContainText('Uncover Workforce Insights');
    await (articleTitle).screenshot({path: './screenshot/Artice-Title.png'});
  })
  
test('Verify 1st-Article Content', async ({page}) => {
  const articleContent = page.locator("(//p[contains(text(),'Gain hidden workforce insights from all levels of ')])[1]");
  await expect(articleContent).toContainText('Gain hidden workforce insights from all levels of your business, ');
  await (articleContent).screenshot({path: './screenshot/Artice-Content.png'});
})

test('Verify 1st-Article 2nd-Content', async ({page}) => {
  const secondContent = page.locator("(//div[@class='css-1mij3d3'])[1]");
  await expect(secondContent).toBeVisible();
  await (secondContent).screenshot({path: './screenshot/2nd-Content.png'});
})

test('Verify 2rd Article Section', async ({page}) => {
  const secondArticle = page.locator('.css-1je9oae');
  await expect(secondArticle).toBeVisible();
  await (secondArticle).screenshot({path: './screenshot/2nd-Article.png'});  
})

test('Verify 2nd-Article Title', async ({page}) => {
  const secondArticleTitle = page.locator("(//b[normalize-space()='Enhance Team Performance & Retention'])[1]");
  await expect(secondArticleTitle).toContainText('Enhance Team Performance & Retention');
  await (secondArticleTitle).screenshot({path: './screenshot/2nd-Artice-Title.png'});
})

test('Verify 2st-Article Content', async ({page}) => {
  const secArticleContent = page.locator("(//p[contains(text(),'Boost revenue by balancing workforce well-being an')])[1]");
  await expect(secArticleContent).toContainText('Boost revenue by balancing workforce well-being an');
  await (secArticleContent).screenshot({path: './screenshot/2nd-Artice-Content.png'});
})

test('Verify 2nd-Article 2nd-Content', async ({page}) => {
  const second2ndContent = page.locator("(//div[@class='css-1i7i288'])[1]");
  await expect(second2ndContent).toBeVisible();
  await (second2ndContent).screenshot({path: './screenshot/Second-2nd-Content.png'});
})


test('Verify 3rd-Article Section', async ({page}) => {
  const thirdArticle = page.locator('.css-1fk6qcr');
  await expect(thirdArticle).toBeVisible();
  await (thirdArticle).screenshot({path: './screenshot/Third-Article.png'});
  
})

test('Verify 3rd-Article Title', async ({page}) => {
  const thirdArticleTitle = page.locator("(//b[normalize-space()='Get Peace of Mind'])[1]");
  await expect((thirdArticleTitle)).toContainText('Get Peace of Mind');
  await (thirdArticleTitle).screenshot({path: './screenshot/3rd-Article-Title.png'});

})

test('Verify 3rd-Article Content', async ({page}) => {
  const thirdArticleContent = page.locator("(//p[contains(text(),'Getting a deep understanding of how your workforce')])[1]");
  await expect(thirdArticleContent).toContainText('Getting a deep understanding of how your workforce');
  await (thirdArticleContent).screenshot({path: './screenshot/3rd-Artice-Content.png'});
})

test('Verify 3rd-Article 2nd-Content', async ({page}) => {
   const secContentThird = page.locator("(//div[@class='css-1mij3d3'])[2]");
   await expect(secContentThird).toBeVisible();
   await (secContentThird).screenshot({path: './screenshot/2nd-Content-3rd.png'});
})





