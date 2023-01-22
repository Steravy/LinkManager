import { Injectable } from '@nestjs/common';
import { CreateCrawlerDto } from './dto/create-crawler.dto';
import { UpdateCrawlerDto } from './dto/update-crawler.dto';
import puppeteer from 'puppeteer';
import path from 'path';

@Injectable()
export class CrawlerService {
    getDataWithPuppeteer () {
        return new Promise(async (resolve, reject) => {
            try {
                const pathUrl = 'https://devgo.com.br/';
                const loadMore = '.css-ici6m2';
                const selector = '.blog-article-card > a';
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(pathUrl);
                const element = await page.waitForSelector('.blog-article-card > a');
                // await page.click('.css-ici6m2')

                let urls = [];
                while (urls.length <= 20) {
                    let newUrls = await page.evaluate(() => {
                        let results = [];
                        let items = document.querySelectorAll('.blog-article-card > a');
                        items.forEach((item) => {
                            results.push({
                                url:  item.getAttribute('href'),
                                text: item.textContent,
                            });
                        });
                        return results;
                    });
                    urls = urls.concat(newUrls);
                    if (urls.length <= 20) {
                        await Promise.all([
                            await page.click('.css-ici6m2'),
                            await page.waitForSelector('.blog-article-card > a')
                        ])
                    }
                }
                browser.close();
                return resolve(urls);
            } catch (e) {
                return reject(e);
            }
        })
    }

  // findAll() {
  //   return `This action returns all crawler`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} crawler`;
  // }

  // update(id: number, updateCrawlerDto: UpdateCrawlerDto) {
  //   return `This action updates a #${id} crawler`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} crawler`;
  // }
}
