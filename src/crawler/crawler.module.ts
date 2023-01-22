import { Module } from '@nestjs/common';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './testCrawler.service';

@Module({
  controllers: [CrawlerController],
  providers: [CrawlerService]
})
export class CrawlerModule {}
