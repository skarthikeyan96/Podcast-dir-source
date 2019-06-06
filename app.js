// puptest.js
const puppeteer = require('puppeteer');

const LCWTM_url = "https://www.podbean.com/podcast-detail/jh5a4-3fe34/Learn-to-Code-With-Me-Podcast";
const JSjabber_url = "https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast";

const run = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`${LCWTM_url}`);
      let episodeLinks = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('span.datetime')).map((item) => ({
            url:  item.baseURI,
            text: item.innerText
          })
        );
      });
      browser.close();
      return resolve(episodeLinks);
    } catch (e) {
      return reject(e);
    }
  })
}

run()
.then(console.log)
.catch(console.error);