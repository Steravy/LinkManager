import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCrawlerDto } from './dto/create-crawler.dto';
import { UpdateCrawlerDto } from './dto/update-crawler.dto';
import { CrawlerService } from './testCrawler.service';

@Controller('crawler')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}

  @Get()
  getDataWithPuppeteer() {
    return this.crawlerService.getDataWithPuppeteer();
  }

  // @Get()
  // findAll() {
  //   return this.crawlerService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.crawlerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCrawlerDto: UpdateCrawlerDto) {
  //   return this.crawlerService.update(+id, updateCrawlerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.crawlerService.remove(+id);
  // }
}
