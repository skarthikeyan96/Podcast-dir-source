// puptest.js
const puppeteer = require('puppeteer');

const LCWTM_url = "https://www.podbean.com/podcast-detail/jh5a4-3fe34/Learn-to-Code-With-Me-Podcast";
const JSjabber_url = "https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast";
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //await page.setExtraHTTPHeaders({Referer: 'https://sparktoro.com/'}) 
    await page.goto(`${JSjabber_url}`);
    await page.waitForSelector('td > a.title.listen-now');
  
          let episodeLinks = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('td > a.title.listen-now')).map((item) => ({
            url:  item.getAttribute('href'),
            text: item.innerText,
            Broadcast_date : item.nextElementSibling.innerText
          })
        );
      });
  
        console.log(episodeLinks);
      await browser.close();
      })();

      
  