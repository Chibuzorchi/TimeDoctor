import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Our Solution Section', async ({page}) => {
    const solutionSection = page.locator('.css-14mbpo4');
    await expect (solutionSection).toBeVisible();
    await (solutionSection).screenshot({path: './screenshot/Solution-Section.png'});
})

test('Verify Our Solution Header', async ({page}) => {
    const solutionHeader = page.locator('.css-jgewex');
    await expect(solutionHeader).toBeVisible();
    await (solutionHeader).screenshot({path: './screenshot/Solution-Header.png'});
})

test('Verify Our Solution Title', async ({page}) => {
  const solutionTitle = page.locator("(//h1[normalize-space()='Our Solutions'])[1]");
  await expect(solutionTitle).toContainText('Our Solutions');
  await (solutionTitle).screenshot({path: './screenshot/Solution-Title.png'});
})

test('Verify Our Solution Desc Text', async ({page}) => {
  const solutionDesc = page.locator("(//span[contains(text(),'The #1 Workforce Analytics Platform for all teams ')])[1]");
  await expect(solutionDesc).toContainText('The #1 Workforce Analytics Platform for all teams');
  await (solutionDesc).screenshot({path: './screenshot/Solu-Desc-Text.png'});
})

test('Verify Our Solution Content', async ({page}) => {
  const solutionHeader = page.locator("(//div[@class='css-102eyi5'])[1]");
  await expect(solutionHeader).toBeVisible();
  await (solutionHeader).screenshot({path: './screenshot/Solution-Content.png'});
})

test('Verify 1st-Content', async ({page}) => {
  const firstContent = page.locator('.css-1hccovf');
  await expect(firstContent).toBeVisible();
  await (firstContent).screenshot({path: './screenshot/1st-Content.png'});  
})

test('Verify 1st-Content Title', async ({page}) => {
  const content1stTitle = page.locator("(//h3[normalize-space()='Fully Remote'])[1]");
  await expect(content1stTitle).toContainText('Fully Remote');
  await (content1stTitle).screenshot({path: './screenshot/1st-Content-Title.png'});
})

test('Verify 1st-Content Text', async ({page}) => {
  const content1stText = page.locator("(//p[contains(text(),'Increased visibility and actionable work insights ')])[1]");
  await expect(content1stText).toContainText('Increased visibility and actionable work insights ');
  await (content1stText).screenshot({path: './screenshot/1st-Content-Text.png'});
})


test('Verify 2nd-Content', async ({page}) => {
  const secondContent = page.locator('.css-1gtkb9e');
  await expect(secondContent).toBeVisible();
  await (secondContent).screenshot({path: './screenshot/2nd-Content.png'});  
})

test('Verify 2nd-Content Title', async ({page}) => {
  const content2ndTitle = page.locator("(//h3[normalize-space()='Hybrid and In-Office'])[1]");
  await expect(content2ndTitle).toContainText('Hybrid and In-Office');
  await (content2ndTitle).screenshot({path: './screenshot/2nd-Content-Title.png'});
})

test('Verify 2nd-Content Text', async ({page}) => {
  const content3rdText = page.locator("(//p[contains(text(),'Real-time workforce analytics to improve performan')])[1]");
  await expect(content3rdText).toContainText('Real-time workforce analytics to improve performan ');
  await (content3rdText).screenshot({path: './screenshot/2nd-Content-Text.png'});
})

test('Verify 3rd-Content', async ({page}) => {
  const thirdContent = page.locator('.css-3xj0x3');
  await expect(thirdContent).toBeVisible();
  await (thirdContent).screenshot({path: './screenshot/3rd-Content.png'});  
})

test('Verify 3rd-Content Title', async ({page}) => {
  const content3rdTitle = page.locator("(//h3[normalize-space()='Outsourced'])[1]");
  await expect(content3rdTitle).toContainText('Outsourced');
  await (content3rdTitle).screenshot({path: './screenshot/3rd-Content-Title.png'});
})

test('Verify 3rd-Content Text', async ({page}) => {
  const content3rdText = page.locator("(//p[contains(text(),'Workforce analytics to drive profitability for BPO')])[1]");
  await expect(content3rdText).toContainText('Workforce analytics to drive profitability for BPO ');
  await (content3rdText).screenshot({path: './screenshot/3rd-Content-Text.png'});
})