import { test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.timedoctor.com/');
});


test('Verify Footer Section', async ({page}) => {
    const footerSect = page.locator("(//footer)[1]");
    await expect (footerSect).toBeVisible();
    await (footerSect).screenshot({path: './screenshot/Footer-Section.png'});
})

test('Verify General Column', async ({page}) => {
    const generalColumn = page.locator("(//nav[@class='nav-column'])[1]");
    await expect(generalColumn).toBeVisible();
    await (generalColumn).screenshot({path: './screenshot/General-Column.png'});
  })

test('Verify General Title', async ({page}) => {
    const generalTitle = page.locator("(//h5[normalize-space()='General'])[1]");
    await expect(generalTitle).toContainText('General');
    await (generalTitle).screenshot({path: './screenshot/General-Title.png'});
  })  


  test('Verify General Content', async ({ page }) => {
    const generalContent = page.locator("(//ul[@class='nav-column__content'])[1]");

    await expect(generalContent).toContainText('Pricing');
    await expect(generalContent).toContainText('Case Studies');
    await expect(generalContent).toContainText('Customer Reviews');
    await expect(generalContent).toContainText('Request a Demo');
    await expect(generalContent).toContainText('Blog');
    await expect(generalContent).toContainText('Resources');
    await expect(generalContent).toContainText('Benchmarking Tool');
    await (generalContent).screenshot({path: './screenshot/General-Content.png'});
});


test('Verify Features Column', async ({page}) => {
    const featColumn = page.locator("(//nav[@class='nav-column'])[2]");
    await expect(featColumn).toBeVisible();
    await (featColumn).screenshot({path: './screenshot/Features-Clmn.png'});
  })

test('Verify Features Title', async ({page}) => {
    const featTitle = page.locator("(//h5[normalize-space()='Features'])[1]");
    await expect(featTitle).toContainText('Features');
    await (featTitle).screenshot({path: './screenshot/Features-Title.png'});
  })
  
test('Verify Feature Content', async ({ page }) => {
    const featContent = page.locator("(//ul)[17]");

    await expect(featContent).toContainText('All Features');
    await expect(featContent).toContainText('Time Tracking');
    await expect(featContent).toContainText('Payroll');
    await expect(featContent).toContainText('Timesheets');
    await expect(featContent).toContainText('Time Management');
    await expect(featContent).toContainText('Screen Monitoring');
    await expect(featContent).toContainText('Employee Productivity');
    await expect(featContent).toContainText('Attendance');

    await (featContent).screenshot({path: './screenshot/Features-Content.png'})
});

test('Verify Contact Column', async ({page}) => {
  const contactColumn = page.locator("(//nav[@class='nav-column'])[3]");
  await expect(contactColumn).toBeVisible();
  await (contactColumn).screenshot({path: './screenshot/Contact-Column.png'});
})

test('Verify Contact Title', async ({page}) => {
  const contactTitle = page.locator("(//h5[normalize-space()='Contact'])[1]");
  await expect(contactTitle).toContainText('Contact');
  await (contactTitle).screenshot({path: './screenshot/Contact-Title.png'});
})  

test('Verify Contact Content', async ({ page }) => {
  const contactContent = page.locator("(//ul)[18]");

    await expect(contactContent).toContainText('Help Center');
    await expect(contactContent).toContainText('Partner Programs');
    await expect(contactContent).toContainText('Contact Us');
    await expect(contactContent).toContainText('Uptime Status');
    await expect(contactContent).toContainText('About Us');
    await expect(contactContent).toContainText('Jobs');

  await (contactContent).screenshot({path: './screenshot/Contact-Content.png'});
});

test('Verify By Industry Column', async ({page}) => {
  const industryColumn = page.locator("(//nav[@class='nav-column'])[4]");
  await expect(industryColumn).toBeVisible();
  await (industryColumn).screenshot({path: './screenshot/ByIndustry-Column.png'});
})

test('Verify By Industry Title', async ({page}) => {
  const industryTitle = page.locator("(//h5[normalize-space()='By Industry'])[1]");
  await expect(industryTitle).toContainText('By Industry');
  await (industryTitle).screenshot({path: './screenshot/ByIndustry-Title.png'});
})  

test('Verify By Industry Content', async ({ page }) => {
  const industryContent = page.locator("(//ul)[19]");

  // Asserting the presence of specific link texts in each li element
  await expect(industryContent).toContainText('CX & Contact Centers');
  await expect(industryContent).toContainText('BPO & KPO');
  await expect(industryContent).toContainText('Staff Leasing');
  await expect(industryContent).toContainText('Technology Providers');
  await expect(industryContent).toContainText('Agencies');
  
  await (industryContent).screenshot({path: './screenshot/Contact-Content.png'});
});

test('Verify By useCase Column', async ({page}) => {
  const useCaseColumn = page.locator("(//nav[@class='nav-column'])[5]");
  await expect(useCaseColumn).toBeVisible();
  await (useCaseColumn).screenshot({path: './screenshot/ByuseCase-Column.png'});
})

test('Verify By Use Case Title', async ({page}) => {
  const useCaseTitle = page.locator("(//h5[normalize-space()='By Use Case'])[1]");
  await expect(useCaseTitle).toContainText('By Use Case');
  await (useCaseTitle).screenshot({path: './screenshot/ByuseCase-Title.png'});
})  

test('Verify By Use Case Content', async ({ page }) => {
  const useCaseContent = page.locator("(//ul)[20]");

  await expect(useCaseContent).toContainText('Accountability');
  await expect(useCaseContent).toContainText('Productivity');
  await expect(useCaseContent).toContainText('Profitability');
  await expect(useCaseContent).toContainText('Empowering Employees');
  
  await (useCaseContent).screenshot({path: './screenshot/UseCase-Content.png'});
});


test('Verify By Work Type Column', async ({page}) => {
  const workTypeColumn = page.locator("(//nav[@class='nav-column'])[6]");
  await expect(workTypeColumn).toBeVisible();
  await (workTypeColumn).screenshot({path: './screenshot/ByworkType-Column.png'});
})


test('Verify By Work Type Title', async ({page}) => {
  const workTypeTitle = page.locator("(//h5[normalize-space()='By Workforce Type'])[1]");
  await expect(workTypeTitle).toContainText('By Workforce Type');
  await (workTypeTitle).screenshot({path: './screenshot/ByworkType-Title.png'});
})  


test('Verify By Work Type Content', async ({ page }) => {
  const workTypeContent = page.locator("(//ul)[21]");
  await expect(workTypeContent).toContainText('Fully Remote Teams');
    await expect(workTypeContent).toContainText('Hybrid Workforce');
    await expect(workTypeContent).toContainText('In-Office');
    await expect(workTypeContent).toContainText('Enterprise');
    await expect(workTypeContent).toContainText('SME & SMB');
  
  await (workTypeContent).screenshot({path: './screenshot/workType-Content.png'});
});


test('Verify Integrations Column', async ({page}) => {
  const IntegrationsColumn = page.locator("(//nav[@class='nav-column'])[6]");
  await expect(IntegrationsColumn).toBeVisible();
  await (IntegrationsColumn).screenshot({path: './screenshot/ByIntegrations-Column.png'});
})


test('Verify Integrations Title', async ({page}) => {
  const IntegrationsTitle = page.locator("(//h5[normalize-space()='Integrations'])[1]");
  await expect(IntegrationsTitle).toContainText('Integrations');
  await (IntegrationsTitle).screenshot({path: './screenshot/ByIntegrations-Title.png'});
}) 


test('Verify Integrations Content', async ({ page }) => {
  const integrationsContent = page.locator("(//ul[@class='nav-column__content nav nav-pills'])[1]");

  await expect(integrationsContent).toContainText('JIRA');
    await expect(integrationsContent).toContainText('Asana');
    await expect(integrationsContent).toContainText('Trello');
    await expect(integrationsContent).toContainText('G Suite');
    await expect(integrationsContent).toContainText('Monday');
    await expect(integrationsContent).toContainText('Intercom');
    await expect(integrationsContent).toContainText('Office 365');
    await expect(integrationsContent).toContainText('Salesforce');
    await expect(integrationsContent).toContainText('Slack');
    await expect(integrationsContent).toContainText('Todoist');
    await expect(integrationsContent).toContainText('API');
    await expect(integrationsContent).toContainText('See All 60+ Integrations');
  
  
  await (integrationsContent).screenshot({path: './screenshot/Integrations-Content.png'});
});


test('Verify Company Link Column', async ({page}) => {
  const companyLinkColumn = page.locator("(//div[@class='company-links'])[1]");
  await expect(companyLinkColumn).toBeVisible();
  await (companyLinkColumn).screenshot({path: './screenshot/CompanyLink-Column.png'});
})

test('Verify Security & Compliance Link Column', async ({page}) => {
  const securityColumn = page.locator("(//div[@class='col-sm-12 col-md-12 col-lg-12 col-xl-6'])[1]");
  await expect(securityColumn).toBeVisible();
  await (securityColumn).screenshot({path: './screenshot/security-Column.png'});
})




