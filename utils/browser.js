import puppeteer from 'puppeteer';

class Browser {
	constructor() {
		this.init();
	}

	async init() {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		this.p = page;
	}

	async page() {
		if (!this.p) {
			await this.init();
		}

		return this.p;
	}
}

const browser = new Browser();

export default browser;
