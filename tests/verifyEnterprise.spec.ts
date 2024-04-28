import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});

test('Verify Enterprise Section', async ({page}) => {
    const entSection = page.locator('.css-1ym16u5');
    await expect (entSection).toBeVisible();
    await (entSection).screenshot({path: './screenshot/Enterprise-Section.png'});
})

test('Verify Enterprise Title', async ({page}) => {
    const entTitle = page.locator(".css-qzwer0");
    await expect(entTitle).toContainText('Enterprise');
    await (entTitle).screenshot({path: './screenshot/Enterprise-Title.png'});
  })

  test('Verify Enterprise Article Heading', async ({page}) => {
    const entHeading = page.locator("(//span[contains(text(),'Time tracking and productivity software that scale')])[1]");
    await expect(entHeading).toContainText('ime tracking and productivity software that scale');
    await (entHeading).screenshot({path: './screenshot/Enterprise-Heading.png'});
  })  

  test('Verify Enterprise Content List', async ({ page }) => {
    const enterpriseList = page.locator('ul.css-a3e7ql');
    await expect(enterpriseList).toContainText('Enterprise-level security and deployment');
    await expect(enterpriseList).toContainText('GDPR & HIPAA compliance');
    await expect(enterpriseList).toContainText('Custom user roles and permission settings');
    await expect(enterpriseList).toContainText('60+ integrations with enterprise tools');
    await expect(enterpriseList).toContainText('24-hour multilingual customer service');
    await expect(enterpriseList).toContainText('99% uptime SLA');

    await (enterpriseList).screenshot({path: './screenshot/Enterprise-list.png'});
});

test('Verify Enterprise Contact Button ', async ({page}) => {
   await page.getByRole('button', {name: 'Contact'})
   .screenshot({path: './screenshot/Ent-Contact-btn.png'});
   expect(page).not.toBeNull();
})

test('Verify 2nd Content Content', async ({page}) => {
    const ent2ndContent = page.locator("(//div[@title='Enterprise'])[2]");
    await expect(ent2ndContent).toBeVisible();
    await (ent2ndContent).screenshot({path: './screenshot/Enterp-Content.png'});
  })




