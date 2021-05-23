const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://cn.bing.com/");
  const hp_table = await page.$("#hp_table");
  console.log(await hp_table.asElement().boxModel());
})();
