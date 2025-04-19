// scrape.js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const website = process.env.SCRAPE_URL || 'https://example.com';

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/usr/bin/chromium' // updated path
  });

  const tab = await browser.newPage();
  await tab.goto(website, { waitUntil: 'domcontentloaded' });

  const result = await tab.evaluate(() => {
    return {
      siteTitle: document.title,
      headingOne: document.querySelector('h1')?.innerText || 'No heading found'
    };
  });

  fs.writeFileSync('scraped_data.json', JSON.stringify(result, null, 2));
  await browser.close();
})();
