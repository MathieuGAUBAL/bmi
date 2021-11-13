const puppeteer = require('puppeteer')

class Scrap {
    constructor() {
        this.url = null;
        this.options = {
            executablePath:
                'D:\\developpements\\REACTJS\\BMI\\back\\node_modules\\puppeteer\\.local-chromium\\win64-901912\\chrome-win\\chrome.exe',
            headless: false,
            defaultViewport: null,
            args: ['--window-size=1920,1080'],
        }
        this.browser = null;
        this.page = null;
        this.arrayObjectReunion = []
    }

    async init() {
        this.browser = await puppeteer.launch(this.options)
        this.page = await this.browser.newPage()
    }

    async closeBroswer() {
        await this.browser.close();
    }

    async validationUrl(url) {

        try {
            await this.page.goto(url, { waitUntil: 'networkidle2' })
        } catch (error) {
            this.closeBroswer();
            return 'error';
        }
    }

    async getLinks(url) {
        await this.init();
        if (await this.validationUrl(url) === 'error') { return 'error'; }
        else {
            let links = await this.page.$$eval('td.numero a.tld-fr-only', links => links.map(link => link.href));
            let names = await this.page.$$eval('td.nom span.nom-hippodrome-et-drapeau', names => names.map(name => name.innerText));
            this.buildObjReunion(links, names);
            this.closeBroswer();
            return links;
        }
    }

    async buildObjReunion(links, names) {
        for (let index = 0; index < links.length; index++) {
            let linkSplited = links[index].split('/');
            let date = linkSplited[linkSplited.length - 2]
            let ref = linkSplited[linkSplited.length - 1].split('-')[0]
            let obj = {
                'date': date,
                'ref': ref,
                'name': names[index],
                'urls': []
            }
            this.arrayObjectReunion.push(obj);
        }
    }

    async getInfosCourse(url) {
        await this.init();
        await this.page.goto(url, { waitUntil: 'networkidle2' })
        let horseNames = await this.page.$$eval('.first-line', horseNames => horseNames.map(name => name.innerText.trim()));
        let driversNames = await this.page.$$eval('div.second-line > div:nth-child(1) > b', driversNames => driversNames.map(name => name.innerText.trim()));
        let trainersNames = await this.page.$$eval('div.second-line > div:nth-child(1) > span', trainersNames => trainersNames.map(name => name.innerText.trim()));
        let horsesWinners = await this.page.$$eval('#arriveeTab > table > tbody > tr > td:nth-child(2)', horsesWinners => horsesWinners.map(name => name.innerText.trim()));
        let courseName = await this.page.evaluate(() => {
           return document.querySelector('#mCSB_1_container > a > h2') !== null ?
            document.querySelector('#mCSB_1_container > a > h2').innerText :
            document.querySelector('#infos-course > div.content > div.informations > a > h2').innerText
        })
        await this.closeBroswer();
        let obj = this.buildObjCourse([horseNames, driversNames, trainersNames], horsesWinners, courseName);
        return obj;
    }

    async buildObjCourse(arrays, arrayWinners, courseName) {
        let obj = {
            'course_name': "",
            'starters': [],
            'results': []
        }
        console.log();
        let arrayObj = []
        for (let i = 0; i < arrays[0].length; i++) {
            let results = arrays.map(d => d[i])
            arrayObj.push(
                {
                    'number': i + 1,
                    'horsename': results[0],
                    'driver': results[1],
                    'trainer': results[2]
                })
        }
        obj.starters = arrayObj;
        obj.results = arrayWinners;
        obj.course_name = courseName;
 
        return obj;
    }


    async getLinksCourses(arrayUrl) {
        await this.init();
        for (let index in arrayUrl) {
            await this.page.goto(arrayUrl[index], { waitUntil: 'networkidle2' });
            await this.page.waitForSelector('td.numero a.tld-fr-only');
            this.arrayObjectReunion[index].urls = await this.page.$$eval('td.numero a.tld-fr-only', links => links.map(link => link.href));
        }
        this.closeBroswer();
        return this.arrayObjectReunion;
    }


}

module.exports = Scrap;