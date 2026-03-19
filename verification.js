const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });

  const filePath = 'file://' + path.resolve('quxi-photo.html');
  await page.goto(filePath);

  // Wait a little for any initialization
  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/home/jules/verification/quxi_photo_full.png', fullPage: true });

  console.log('Screenshot saved!');
  await browser.close();
})();
