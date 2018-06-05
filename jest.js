const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3002';
//iport statements would work here as well

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});


describe('search function', async () => {
  beforeEach(() => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'})
  })
  test('initial title is correct', () => {
    var div = '.game-icon'
    const title = page.$eval(div, e => e.textContent)
    expect(title).toEqual('some text')
  })
})