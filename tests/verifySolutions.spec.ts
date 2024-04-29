import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.timedoctor.com/');
    await page.click('text=Solutions');
    page.locator('.NavTab_NavTabBox__Dropdown__CardContent__OpQSS');
});


test('Verify By Outsourcing Heading', async ({page}) => {
    const outsourcingHeading = page.locator("(//h5[@class='MuiTypography-root MuiTypography-h5 NavTab_NavTabBox__NavColumn__Title__TfkyK css-1xyzxtx'][normalize-space()='By Outsourcing Type'])[1]");
    await expect(outsourcingHeading).toContainText('By Outsourcing Type');
    await (outsourcingHeading).screenshot({path: './screenshot/Outsourcing-Heading.png'}); 
})

test('Verify By Outsourcing Type Links', async ({ page }) => {
    const outsourcingLink = page.locator("(//ul[@role='menu'])[3]");

    await expect(outsourcingLink).toContainText('CX & Contact Center');
    await expect(outsourcingLink).toContainText('BPO & KPO');
    await expect(outsourcingLink).toContainText('Staff Leasing');

    await expect(outsourcingLink.locator('li:nth-child(1) > a')).toHaveAttribute('href', '/contact-centers');
    await expect(outsourcingLink.locator('li:nth-child(2) > a')).toHaveAttribute('href', '/bpo-outsourcing');
    await expect(outsourcingLink.locator('li:nth-child(3) > a')).toHaveAttribute('href', '/staff-leasing');
    await (outsourcingLink).screenshot({path: './screenshot/Outsourcing-Link.png'});
});


test('Verify By Industry Heading', async ({page}) => {
    const industryHeading = page.locator("(//h5[@class='MuiTypography-root MuiTypography-h5 NavTab_NavTabBox__NavColumn__Title__TfkyK css-1xyzxtx'][normalize-space()='By Industries'])[1]");
    await expect(industryHeading).toContainText('By Industries');
    await (industryHeading).screenshot({path: './screenshot/Industries-Heading.png'}); 
})


test('Verify By Industry Links', async ({ page }) => {
    const industryLink = page.locator("(//ul[@role='menu'])[4]");

    await expect(industryLink).toContainText('Technology Providers');
    await expect(industryLink).toContainText('Agencies');

    await expect(industryLink.locator('li:nth-child(1) > a')).toHaveAttribute('href', '/technology-companies');
    await expect(industryLink.locator('li:nth-child(2) > a')).toHaveAttribute('href', '/increase-agency-efficiency');
    await (industryLink).screenshot({path: './screenshot/Industries-Link.png'}); 
});


test('Verify By Workforce Heading', async ({page}) => {
    const workHeading = page.locator("(//h5[@class='MuiTypography-root MuiTypography-h5 NavTab_NavTabBox__NavColumn__Title__TfkyK css-1xyzxtx'][normalize-space()='By Workforce'])[1]");
    await expect(workHeading).toContainText('By Workforce');
    await (workHeading).screenshot({path: './screenshot/Work-Heading.png'}); 
})


test('Verify By Workforce Links', async ({ page }) => {
    const workLink = page.locator("(//ul[@role='menu'])[5]");

    await expect(workLink).toContainText('Fully Remote Teams');
    await expect(workLink).toContainText('Hybrid Workforce');
    await expect(workLink).toContainText('In-Office');

    await expect(workLink.locator('li:nth-child(1) > a')).toHaveAttribute('href', '/remote-work-solutions');
    await expect(workLink.locator('li:nth-child(2) > a')).toHaveAttribute('href', '/hybrid-workforce-model');
    await expect(workLink.locator('li:nth-child(3) > a')).toHaveAttribute('href', '/in-office-solutions');

    await (workLink).screenshot({path: './screenshot/Work-Link.png'}); 
});

test('Verify Business Heading', async ({page}) => {
    const businessHeading = page.locator("(//h5[@class='MuiTypography-root MuiTypography-h5 NavTab_NavTabBox__NavColumn__Title__TfkyK css-1xyzxtx'][normalize-space()='Business Type'])[1]");
    await expect(businessHeading).toContainText('Business Type');
    await (businessHeading).screenshot({path: './screenshot/Business-Heading.png'}); 
})

test('Verify Business Links', async ({ page }) => {
    const businessLink = page.locator("(//ul[@role='menu'])[6]");

    await expect(businessLink).toContainText('Enterprise');
    await expect(businessLink).toContainText('SME & SMB');

    await expect(businessLink.locator('li:nth-child(1) > a')).toHaveAttribute('href', '/enterprise-ready-software');
    await expect(businessLink.locator('li:nth-child(2) > a')).toHaveAttribute('href', '/small-medium-business-solutions');

    await (businessLink).screenshot({path: './screenshot/Business-Link.png'});
});
