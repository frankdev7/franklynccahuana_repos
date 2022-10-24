import { Module } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CsvController } from './csv.controller';
import { TribesModule } from 'src/tribes/tribes.module';

@Module({
  imports: [TribesModule],
  providers: [CsvService],
  controllers: [CsvController]
})
export class CsvModule {}
