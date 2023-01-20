import { Injectable } from '@nestjs/common';
import { CreateCrawlerDto } from './dto/create-crawler.dto';
import { UpdateCrawlerDto } from './dto/update-crawler.dto';
import puppeteer from 'puppeteer';

@Injectable()
export class CrawlerService {
  async getDataWithPuppeteer() {
    const pathUrl = 'https://devgo.com.br/';
    const clickMe = '.css-ici6m2';

    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    console.log('page started')
    await page.goto(pathUrl, {
      waitUntil: 'networkidle2'
    });
    console.log('in the page')
    await page.click(clickMe);
    '.blog-article-card'





    // await browser.close();

    return 'This action adds a new crawler';
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
